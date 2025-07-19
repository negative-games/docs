The main configuration file for the plugin is located at `plugins/Punishments/main.yml`. This file contains various settings that control the behavior of the plugin.

<details>
<summary>Full File</summary>

```yaml
# --------------------------------------------------------
# Punishments Configuration
#  
# Useful Resources:
# * Discord: https://dsc.gg/negative-games
# * Wiki: https://wiki.ericlmao.com/projects/punishments
# * MiniMessage Format: https://docs.advntr.dev/minimessage/format.html
# * MiniMessage Web UI: https://webui.advntr.dev/
# --------------------------------------------------------

# When true, the plugin will disable unnecessary logs to the console.
disable-unnecessary-logs: false

# The interval in seconds in which the cache is synchronized with the database.
# In lamen's terms, this is the interval that the plugin will check the database for new
# or updated punishments and then store them locally.
cache-sync-interval: 5

# When true, the /record command is enabled for all players to use.
record-command-enabled: true

# Whether to use a categorized record menu or not.
# If set to true, the record menu will be categorized
# by punishment type (e.g. mutes, bans, warns) in their own
# dedicated submenus, similar to the /history command.
#  
# If set to false, the record menu will display all punishments
# in a single menu.
record-menu-categorized: true

# Staff Leaderboard Configuration
staff-leaderboard:
  # When true, the staff leaderboard system is enabled.
  enabled: true

  # The interval in seconds in which the staff leaderboard cache is synchronized with the database.
  # In lamen's terms, this is the interval that the plugin will check the database for new
  # or updated staff leaderboard data and then store it locally.
  cache-sync-interval: 30

# Note Configuration
notes:
  # When true, the note system is enabled.
  enabled: true

  # When true, the note database system will use an external database instead of the default SQLite database.
  use-external-database: false

  # External Database Information
  database:
    host: localhost
    port: 3306
    database: punishments
    username: root
    password: password

# Punishments
punishments:
  Hacking:
    reason: Hacking
    filter-revoked-punishments: false
    forgiveness: 100d
    icon:
      position: 10
      name: <red>Hacking
      material: BOOK
      lore:
      - ' '
      - '<white>Violation #1: <yellow>7 days <red>(BAN)'
      - '<white>Violation #2: <yellow>30 days <red>(BAN)'
      - '<white>Violation #3: <yellow>Permanent <red>(IP BAN)'
      - ' '
      - '<white>Total Punishments: <yellow>%total%'
    ladder:
      FIRST:
        length: 30d
        category: BAN
        force-silent: true
        ip: false
        commands:
        - lp user %player% parent remove VIP

# Authors: ericlmao
```
</details>

## Overview of Configuration Options
This section provides an overview of the configuration options available in the `main.yml` file for the Punishments plugin. Each option is explained in detail to help you understand its purpose and how to configure it.

#### `disable-unnecessary-logs`
This option, when set to `true`, disables unnecessary logs to the console. This can help reduce clutter in the console output.

When set to `false`, the plugin will log various actions and events to the console, which can be useful for debugging or monitoring purposes.

#### `cache-sync-interval`
This setting defines the interval in seconds at which the plugin synchronizes its local cache with the database. This is important for ensuring that the plugin has the most up-to-date information about punishments.

A shorter interval means that the plugin will check for updates more frequently, while a longer interval may reduce database load but could lead to outdated information being displayed.

#### `record-command-enabled`
When set to `true`, this option enables the `/record` command for all players. This command allows players to view their own punishment records.

When set to `false`, the command will be disabled, and players will not be able to access their punishment records.

#### `record-menu-categorized`
This setting determines whether the record menu is categorized by punishment type or not.

When set to `true`, the record menu will display punishments in separate submenus based on their type (e.g., mutes, bans, warns). This can make it easier for players to navigate their records.

When set to `false`, all punishments will be displayed in a single menu, which may be simpler but less organized.

#### `staff-leaderboard`

This section contains settings related to the staff leaderboard system.
##### `enabled`
When set to `true`, the staff leaderboard system is enabled. This allows players to view a leaderboard of staff members based on their actions or contributions.

When set to `false`, the staff leaderboard will be disabled, and players will not be able to access it.

##### `cache-sync-interval`
This setting defines the interval in seconds at which the staff leaderboard cache is synchronized with the database. Similar to the `cache-sync-interval` for punishments, this ensures that the leaderboard data is up-to-date.

A shorter interval means more frequent updates, while a longer interval may reduce database load.

#### `notes`

This section contains settings related to the note system, which allows staff members to leave notes on players.

##### `enabled`
When set to `true`, the note system is enabled, allowing staff members to create and manage notes on players.

When set to `false`, the note system will be disabled, and staff members will not be able to leave notes.

##### `use-external-database`
When set to `true`, the note system will use an external database instead of the default SQLite database. This is useful for larger servers or those that require more robust database management.

When set to `false`, the plugin will use the default SQLite database for storing notes.

##### `database`
This section contains the configuration for the external database used by the note system when `use-external-database` is set to `true`. It includes the following fields:
- `host`: The hostname or IP address of the database server.
- `port`: The port number on which the database server is running.
- `database`: The name of the database to connect to.
- `username`: The username used to authenticate with the database.
- `password`: The password used to authenticate with the database.

#### `punishments`
This section defines the various punishments that can be applied to players. Each punishment type has its own configuration, including the reason, filter options, forgiveness period, icon settings, and ladder configurations.

Each punishment type can have the following fields:
- `reason`: The reason for the punishment.
- `filter-revoked-punishments`: When set to `true`, this option filters out revoked punishments from the player's record.
- `forgiveness`: The period after which the punishment is considered forgiven and may no longer affect the player's record.

- `icon`: This section defines the icon that represents the punishment in menus. It includes:
  - `position`: The position of the icon in the menu.
  - `name`: The name of the icon, which can include color formatting using MiniMessage.
  - `material`: The material type of the icon (e.g., BOOK).
  - `lore`: A list of lore lines that provide additional information about the punishment. Can include placeholders like `%total%` to display dynamic information, such as the total number of punishments.

- `ladder`: This section defines the punishment ladder for the specific punishment type. It works in descending order, meaning the first entry in the list is the first punishment, and the last entry in the list is the last punishment in the ladder. Information must include:
  - `<id>`: The id of the ladder. Recommended numbers (eg. FIRST, SECOND, THIRD, etc.), which can include:
    - `length`: The duration of the punishment.
    - `category`: The category of the punishment (e.g., BAN, MUTE, WARN, KICK).
    - `force-silent`: When set to `true`, this option forces the punishment to be silent, meaning no broadcast messages will be sent.
    - `ip`: When set to `true`, this option applies the punishment to the player's IP address.
    - `commands`: A list of commands that will be executed when the punishment is applied (e.g., removing a permission group).
    