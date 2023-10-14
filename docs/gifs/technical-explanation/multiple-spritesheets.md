---
sidebar_position: 5
---

# Using multiple sprite sheets

Sometimes your GIF has a lot of frames and you need to split it into multiple sprite sheets to keep good quality. You can replace all of the properties (except `Screen`) with a `SpriteSheets` property which is a table containing multiple sprite sheets.

:::note
The sprite sheets in this example don't form a single GIF.
:::

```lua
local GIFPlayer = require(game.ServerScriptService.GIFPlayer)

// highlight-start
local sheet1 = {
	Image = "rbxassetid://5138441857",
	FPS = 2,
	FramesPerRow = 4,
	Frames = 20
}
// highlight-end

// highlight-start
local sheet2 = {
	Image = "rbxassetid://3528512681",
	FPS = 24,
	FramesPerRow = 6,
	Frames = 26
}
// highlight-end

local gif = GIFPlayer.new({
	Screen = workspace.Screen.SurfaceGui.GIF,
    // highlight-next-line
	SpriteSheets = { sheet1, sheet2 }
})

gif:Play()
```
