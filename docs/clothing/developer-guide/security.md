---
sidebar_position: 3
---

# Security settings

There are 3 security settings that you can configure to prevent exploiters from abusing the panel: `MaxOutfitsPerUser`, `AllowedTeams`, `MaxDistanceFromPanel`. You can change them by opening the `Settings` script that's in the main `ClothingPanel` folder.

## MaxOutfitsPerUser

This setting controls how many outfits a single user can have saved at once. For example, if this setting's value is `5`, then a player can only save 5 outfits before being asked to delete one of them to save more.

## AllowedTeams

This setting controls which in-game teams are allowed to use the panel. Each team's name needs to be in separate quotes and separated by a comma. For example, if you want to only allow the `Participants` and `Staff` teams to use the panels, then the setting would look like this:

```lua
AllowedTeams = { "Participants", "Staff" },
```

If this setting is empty (`{}`), then everyone will be allowed to use the panels

## MaxDistanceFromPanel

This setting controls how far away a player can be from a panel when using it. For example, if this setting is set to `40`, then a player needs to be within a 40 stud radius of the panel to use it. This setting ensures that for example only people in the backstage can use it.

<iframe src="https://www.youtube-nocookie.com/embed/WSZjemAQiPk?si=Q_8ESLbQxLoc_nr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
