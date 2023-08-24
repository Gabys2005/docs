---
sidebar_position: 1
---

# Basic usage

The most basic way to use the player is to call the `.new()` method with a table of parameters:

-   Screen - a texture or UI element that the GIF should be displayed on
-   Image - ID of a sprite sheet
-   FPS - frames per second, up to 60
-   FramesPerRow - the amount of frames the sprite sheet has per row
-   Frames - total number of frames on the sprite sheet

```lua
local GIFPlayer = require(game.ServerScriptService.GIFPlayer)

local gif = GIFPlayer.new({
	Screen = workspace.Screen.SurfaceGui,
	Image = "rbxassetid://3528512681",
	FPS = 24,
	FramesPerRow = 6,
	Frames = 26
})

gif:Play()
```
