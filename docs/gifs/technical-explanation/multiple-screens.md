---
sidebar_position: 4
---

# Playing the same GIF on multiple screens

You can replace the `Screen` property with `Screens`, which is a table of UI elements / textures, to show the same GIF on multiple screens.

```lua
local GIFPlayer = require(game.ServerScriptService.GIFPlayer)

// highlight-start
local screens = {
    workspace.NormalScreen1.SurfaceGui,
    workspace.MeshScreen1.Texture
}
// highlight-end

local gif = GIFPlayer.new({
    // highlight-next-line
	Screens = screens,
	Image = "rbxassetid://3528512681",
	FPS = 24,
	FramesPerRow = 6,
	Frames = 26
})

gif:Play()
```
