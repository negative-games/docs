This file is located at `plugins/Punishments/messages.yml`. This file contains messages used by the plugin, which can be customized to fit your server's theme or style.

:::info[Message Syntax]

All plugin messages use the **MiniMessage** format.

For more information:
* Documentation: https://docs.advntr.dev/minimessage/index.html
* Web UI: https://webui.advntr.dev/
:::

<details>
<summary>Full File</summary>

```yaml
SPECIFY_PUNISHMENT:
- <red><bold>ERROR!</bold> <gray>Please specify a punishment!
INVALID_PUNISHMENT:
- <red><bold>ERROR!</bold> <gray>The punishment of '<red>%argument%</red>' cannot
  be found.
CANNOT_PUNISH_SELF:
- <red><bold>ERROR!</bold> <gray>You cannot punish yourself!
STAFF_HISTORY_MISSING_PROFILES:
- <gray><i>Some records are missing critical data to be displayed, so they have been
  omitted.
RELOAD:
- <green><bold>SUCCESS!</bold> <gray>Reloaded configuration files!
NOTE_NOTICE_TOGGLE_ON:
- <green><bold>SUCCESS!</bold> <gray>You have toggled note notices <dark_green><bold>ON</bold></dark_green>!
NOTE_NOTICE_TOGGLE_OFF:
- <green><bold>SUCCESS!</bold> <gray>You have toggled note notices <red><bold>OFF</bold></red>!
NOTE_NOTICE:
- <aqua>[Alert] <gray>Player <aqua>%player%</aqua> has joined and has <aqua>%amount%</aqua>
  notes (<red>%severe%</red> severe).
NOTE_CREATE_PROMPT:
- <aqua>[Alert] <gray>Please enter the note you would like to attach to this user.
- <gray><i><click:suggest_command:'cancel'>Click this message or type <red>cancel</red>
  to cancel!</click>
NOTE_CREATE_CANCELLED:
- <red><bold>CANCELLED!</bold> <gray>You have canceled the note creation process!
NOTE_CREATED:
- <green><bold>SUCCESS!</bold> <gray>You have created a note for <aqua>%player%</aqua>!
NOTE_EDIT_PROMPT:
- <aqua>[Alert] <gray>Please enter the new content of the note you would like to change!
- <gray><i><click:run_command:'cancel'>Click this message or type <red>cancel</red>
  to cancel!</click>
NOTE_EDIT_CANCELLED:
- <red><bold>CANCELLED!</bold> <gray>You have cancelled the note editorial process!
NOTE_EDITED:
- <green><bold>SUCCESS!</bold> <gray>You have edited the content for the note!
NOTE_DELETE_CONFIRMED:
- <aqua>[Alert] <gray>You have successfully deleted the note.
```
</details>