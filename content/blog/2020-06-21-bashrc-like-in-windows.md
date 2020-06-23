+++
title = "bashrc—like in Windows Command Processor"
date = 2020-06-21

[taxonomies]
categories = [
  "operating system",
  "windows"
]
tags = [
  "operating system",
  "windows",
  "tips"
]
+++

![Snowfall in the mountains](https://images.unsplash.com/photo-1486837650665-9a48b09ca255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)

[Image by Stanislav Kondratiev](https://unsplash.com/photos/3LNdtIlZgiw)

---

One of the benefit to use bashrc-like for the **Windows Command Processor** or `cmd.exe` is to set an environment easily. The common way to set a new or editing environment variable and it require administrator rights which would be not very convenient if you are turning on the admin priviledges prompt.

![Setting environment variable](https://i.imgur.com/Hlk0No2.png)

*Setting environment variable*

## Steps

- Run `regedit.exe` (Search it or run it through **Windows Command Processor**)
- Navigate to `HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor` path
- Right click on the **Command Processor** folder and press **New** -> **String Value**
- Set the key as `AutoRun`
- Make a file in `C:\bashrc.cmd` or wherever you want your "rc" file to reside

![Resulting image](https://i.imgur.com/HCnUV63.png)

*Resulting registry folder. It now have `AutoRun` key*

- Now you can add the **Windows Command Processor** command processor in the autorun file you have setup

Note that the **Windows Command Processor** will run and show every command in the "rc" file everytime you open **Windows Command Processor**.

## Hide the Command When Starting Windows Command Processor

Well, you can turn off the echo before running any command and turn it on afterwards, so no command or result will be shown in the **Windows Command Processor**.

```
@echo off

# Your command

@echo on
```

## Verdict

There are actually a lot of alternative to make this bashrc—like in Windows Command Processor, but I think this method is the one that are close to bashrc.

And maybe you want to try PowerShell which have "Profile" feature.

---

Reference

- https://superuser.com/a/916478/917913
- https://ss64.com/nt/cmd.html
