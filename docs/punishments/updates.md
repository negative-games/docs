---
title: Updates
---
All Punishments updates are listed here, with the latest update at the top.


## 3.3.4 - April 25th, 2024
Back with another massive update, folks; this update primarily focuses on tech debt and updating older systems and internals to newer and better things.

**Configuration**

**settings.json**

The old `settings.json` file is now called `main.yml`; all current settings will automatically be converted by the plugin on startup.

**punishments.yml**

The old `punishments.yml` file has been merged into `main.yml`; the plugin on startup will automatically convert all current settings, and the `punishments.yml` file will be deleted afterward. It is recommended that you back up these files.

**Menus**

All menus were converted to the new configuration system but will keep their original file names and override current settings. It is recommended that you back up these files.

**Why?**

As stated at the start of the post, the main reason is tech debt. The configuration system I used is not the best and doesn't automatically add any new entries when I add things to the configuration. I have migrated to a new configuration system called ConfigLib, which is a Java Object to Yaml mapper, so any new "config" entries I add internally will automatically be mapped and added to existing user configs so you will no longer have to reset or manually add any new entries to your configuration files.

**Other Changes**
* The plugin now requires **Java 21**
* Fixed some menu consistencies with Bedrock and Java users who have the same name (meaning both a Java and a Bedrock account exist with the username "bob123").

**Additions**
* Separated the record menu from the history menu configuration and added its configuration files.
* Added the ability for record menus to have a single GUI instead of a categorized sub-menu system like the history menu. This will require changing  `record-menu-categorized` to `false` in `main.yml`.

## 3.2.4 - March 5th, 2024
**[PATCH]** When the punishment category in the punishment ladder is KICK or WARN, the reason formatting would be weird and would start with "1s" for some reason! So, it would break the punishment chain and not be counted towards punishments.

## 3.2.3 - February 29th, 2024
**[PATCH]** Patched a bug where when you have filter-revoked-punishments enabled, it will entirely screw up the calculations :)
**[FEATURE]** Added a feature in the history menus where it will automatically open the history main menu when you exit the history menu!

## 3.2.2 - February 27th, 2024
This update completely revamps the message system for the plugin to a commonly used format called **MiniMessage**.


Using this system will now allow you to fully customize your plugin messages, along with supporting PlaceholderAPI. With this update, PlaceholderAPI is now a required plugin to run Punishments. This change should not be a problem for anyone because PlaceholderAPI is a commonly used plugin.


However, this update will require users to re-configure their **messages.yml** file; this update will not break the file; it will just remove the color code formatting due to MiniMessage's dedicated syntax.


I have taken the liberty for users who use the default configuration for messages to directly copy and paste these new changes using this link



For users not familiar with MiniMessage or needing additional resources to convert their files, please check out the following links:

[Wiki](https://docs.advntr.dev/minimessage/format)
[Web Editor](https://webui.advntr.dev/)

## 3.1.2 - February 21st, 2024
The primary focus of this update is the very long-awaited addition of a feature I call "notes," what a note is, is a note bound to a user's account, which will allow staff to share information about a user without much hassle.


Staff members are also notified when a user with a "severe" note joins the server. This can be toggled off using a command.


You can store the note data locally or globally using a MySQL database, by default the data source is set as an SQLite database, meaning it's stored in a file and not a database! To change this, go to `settings.json` and turn `local-database` to false, then enter your database information.



If you wish to disable the notes feature entirely, turn `enabled` to `false`, but is enabled by default!



**Commands**
- `/note <username>` or `/notes <username>` - View, edit a user's notes and also add a note to a user
- `/togglenotenotice` Toggle "note notices" which allows a staff member to be notified when users with "severe" notes join the server.

**Permissions**
`punishments.notes` | Ability to use the `/notes` command.
`punishments.notes.notice` | Ability to use the `/togglenotenotice` command and also be able to see note notices.


**Other Changes**
- Changed the way that the configuration system recognizes the filler integer list. You can now place a `-` between two numbers to fill the slots between one number and another instead of needing to fill in each number individually.

**Example**
```yaml
# "Fillers" are used to essentially make menus look fancy.

fillers:
  BLACK_STAINED_GLASS_PANE: # The material of the filler
  - "0-10" # Fills in the slots from 0 to 10!
  - "12"
  - "14"
  - "16-26"
```

## 3.0.2 - January 27th, 2024
After the last patch, another NPE appeared, and I found and fixed the issue. It should not be a problem anymore.

## 3.0.1 - January 26th, 2024
I fixed a NullPointerException when the staff leaderboard attempts to cache the staff member's unique IDs.

## 3.0.0.7 - January 20th, 2024
Fixed an issue in plugin.yml which wouldn't allow the plugin to be used in older versions (1.19, etc). While the plugin can be used in older versions doesn't mean it shouldn't be! I designed this plugin for the latest version of the game only! Using older versions that are not supported would possibly mean some feature may or may not work as intended.

## 3.0.0.6 - December 27th, 2023
A new configuration value has been added to allow you to customize how punishments are filtered! Before, all punishments, even if they were revoked (unbanned, unmuted, etc.), were considered during the execution of the punishment; now, we've provided a way to filter revoked punishments when the plugin counts the punishments a user has.

Example:

```yaml
Hacking: # Unique ID for the punishment

reason: "Hacking" # Reason for the punishment. This will be displayed to the player.

forgiveness: "100d" # Forgiveness time for the punishment, once this time is over, the offense will not be counted.

# If you want no forgiveness, remove this entry from the config.

filter-revoked-punishments: false # When true, revoked punishments will not be counted towards the total, default false.

menu-item: # The item that will be displayed in the punishment menu.

    name: "&cHacking" # The name of the item in the punishment menu.

    material: "BOOK" # The material of the item in the punishment menu.

    position: 10 # The position of the item in the punishment menu.

    lore: # The lore of the item in the punishment menu.

      - " "

      - "&fViolation #1: &e7 days &c(BAN)"

      - "&fViolation #2: &e30 days &c(BAN)"

      - "&fViolation #3: &ePermanent &c(IP BAN)"

      - " "

      - "&fTotal Punishments: &e%total%"

ladder: # The ladder that this punishment is on, punishments must be in descending order.

    FIRST: # The first offense

      type: BAN # The type of punishment can be BAN, MUTE, KICK, or WARN

      duration: "7d" # The duration of the punishment, if the type is BAN or MUTE

      force-silent: true # Whether the punishment should be silent (the issuer cannot choose otherwise)

      commands: # The commands to run when the punishment is issued

        - "lp user %player% parent remove VIP" # Remove the VIP group from the player



    SECOND: # The second offense

      type: BAN

      duration: "30d"

      force-silent: true



    THIRD: # The third offense

      type: BAN

      ip: true # Whether the punishment should be an IP ban/mute

      duration: "perm"

      force-silent: true

```

## 3.0.0.5 - December 18th, 2023
* Fix NPE when opening the history menu

## 3.0.0.4 - December 17th, 2023
* Fix NPE in Staff Leaderboard Menu
* Fix display issue in Staff History Menu
* Fix Bedrock Functionality in History Menu

## 3.0.0.3 - December 10th, 2023
Update internal dependencies and fix a startup bug where if the lore is empty, it will throw an error.

## 3.0.0.2 - October 8th, 2023
Punishments 3.0 Phase 2

Once again I'm back with a MAJOR announcement regarding our beloved plugin! Phase 2 is ready to go!



Enhanced Configuration

As promised, this update provides enhanced configuration to the menu system, allowing you to configure every menu entirely.


    
Each menu is its own respective configuration file for organizational purposes. They can be found in the **menus** subfolder.



Staff Leaderboard System

We're introducing a new feature to Punishments which in short is a leaderboard system to display staff members according to their total punishments.



We think it's a fun addition for staff members curious on where they stand compared to other staff members. This obviously could be used as "competition", which is why we added an option to disable it in **settings.json**, though it is enabled by default.

#### Reload Command
We've introduced a reload command which allows you to reload your configurations ingame. The command is /punishreload.

#### Bug Fixes
* Fixed a display issue when going back or forward in history menus.
* Minor optimizations

## 3.0.0 - September 30th, 2023
After a hiatus we are back with a major update which is explained more in depth in the Negative Games Discord server, so I'll provide a rundown here:

* Rebrand to **Punishments**
* Only supporting the latest version
* Major config revamp (but still limited at the moment)
* Added testing server using BBB's system
* External configuration server to sync your configuration across multiple instances
* Added **/record**
* Added **/staffhistory**
* Overall performance improvement