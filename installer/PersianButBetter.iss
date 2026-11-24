#ifndef MyAppVersion
  #define MyAppVersion "2.1"
#endif

#ifndef StageDir
  #define StageDir "..\dist\windows"
#endif

[Setup]
AppId={{8F6C4A2E-9D1B-4E7A-B3C5-2E8A7F1D4C90}
AppName=Persian but Better
AppVersion={#MyAppVersion}
AppVerName=Persian but Better {#MyAppVersion}
AppPublisher=Hamid Reza Ashkiyan
AppPublisherURL=https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined
AppSupportURL=https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/issues
DefaultDirName={autopf}\Persian but Better
DisableDirPage=yes
DisableProgramGroupPage=yes
DisableWelcomePage=no
PrivilegesRequired=admin
ArchitecturesInstallIn64BitMode=x64
Compression=lzma2
SolidCompression=yes
WizardStyle=modern
UninstallDisplayName=Persian but Better Keyboard Layout ({#MyAppVersion})
OutputBaseFilename=PersianButBetter-Setup

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "{#StageDir}\amd64\Parsi.dll"; DestDir: "{sys}"; Flags: ignoreversion restartreplace uninsrestartdelete; Check: Is64BitInstallMode
Source: "{#StageDir}\wow64\Parsi.dll"; DestDir: "{syswow64}"; Flags: ignoreversion restartreplace uninsrestartdelete; Check: Is64BitInstallMode
Source: "{#StageDir}\i386\Parsi.dll"; DestDir: "{sys}"; Flags: ignoreversion restartreplace uninsrestartdelete; Check: not Is64BitInstallMode

[Messages]
FinishedLabel=Setup has finished installing [name] on your computer.%n%nSign out and sign back in, then go to:%nSettings > Time & language > Language & region > Persian > Keyboard%nand add "Persian but Better".

[Code]
const
  LayoutsRootKey = 'SYSTEM\CurrentControlSet\Control\Keyboard Layouts';
  LayoutDllName  = 'Parsi.dll';
  LayoutTitle    = 'Persian but Better';

function StringInArray(const Value: string; const Arr: TArrayOfString): Boolean;
var
  I: Integer;
begin
  Result := False;
  for I := 0 to GetArrayLength(Arr) - 1 do
  begin
    if CompareText(Value, Arr[I]) = 0 then
    begin
      Result := True;
      Exit;
    end;
  end;
end;

procedure RegisterKeyboardLayout;
var
  Subkeys: TArrayOfString;
  UsedLayoutIds: TArrayOfString;
  UsedCount, I: Integer;
  KeyPath, ExistingFile, ExistingId: string;
  ChosenKlid, ChosenLayoutId, Candidate: string;
begin
  ChosenKlid := '';
  ChosenLayoutId := '';
  UsedCount := 0;

  if RegGetSubkeyNames(HKEY_LOCAL_MACHINE, LayoutsRootKey, Subkeys) then
  begin
    SetArrayLength(UsedLayoutIds, GetArrayLength(Subkeys));
    for I := 0 to GetArrayLength(Subkeys) - 1 do
    begin
      KeyPath := LayoutsRootKey + '\' + Subkeys[I];
      if RegQueryStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout Id', ExistingId) then
      begin
        if ExistingId <> '' then
        begin
          UsedLayoutIds[UsedCount] := ExistingId;
          UsedCount := UsedCount + 1;
        end;
      end;

      if ChosenKlid = '' then
      begin
        if RegQueryStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout File', ExistingFile) then
        begin
          if CompareText(ExistingFile, LayoutDllName) = 0 then
          begin
            ChosenKlid := Subkeys[I];
            if RegQueryStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout Id', ExistingId) then
              ChosenLayoutId := ExistingId;
          end;
        end;
      end;
    end;
    SetArrayLength(UsedLayoutIds, UsedCount);
  end;

  if ChosenKlid = '' then
  begin
    for I := 0 to 255 do
    begin
      Candidate := Format('a%.3x0429', [I]);
      if not StringInArray(Candidate, Subkeys) then
      begin
        ChosenKlid := Candidate;
        Break;
      end;
    end;
  end;

  if ChosenLayoutId = '' then
  begin
    for I := $00C0 to $0FFF do
    begin
      Candidate := Format('%.4x', [I]);
      if not StringInArray(Candidate, UsedLayoutIds) then
      begin
        ChosenLayoutId := Candidate;
        Break;
      end;
    end;
  end;

  if (ChosenKlid = '') or (ChosenLayoutId = '') then
  begin
    MsgBox('Could not allocate a free Keyboard Layout ID in the Windows registry.', mbError, MB_OK);
    Exit;
  end;

  KeyPath := LayoutsRootKey + '\' + ChosenKlid;
  RegWriteStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout Text', LayoutTitle);
  RegWriteStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout File', LayoutDllName);
  RegWriteStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout Display Name', '@' + LayoutDllName + ',-1000');
  RegWriteStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout Id', ChosenLayoutId);
end;

procedure UnregisterKeyboardLayout;
var
  Subkeys: TArrayOfString;
  I: Integer;
  KeyPath, ExistingFile: string;
begin
  if RegGetSubkeyNames(HKEY_LOCAL_MACHINE, LayoutsRootKey, Subkeys) then
  begin
    for I := 0 to GetArrayLength(Subkeys) - 1 do
    begin
      KeyPath := LayoutsRootKey + '\' + Subkeys[I];
      if RegQueryStringValue(HKEY_LOCAL_MACHINE, KeyPath, 'Layout File', ExistingFile) then
      begin
        if CompareText(ExistingFile, LayoutDllName) = 0 then
          RegDeleteKeyIncludingSubkeys(HKEY_LOCAL_MACHINE, KeyPath);
      end;
    end;
  end;
end;

procedure CurStepChanged(CurStep: TSetupStep);
begin
  if CurStep = ssPostInstall then
    RegisterKeyboardLayout;
end;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
begin
  if CurUninstallStep = usPostUninstall then
    UnregisterKeyboardLayout;
end;
