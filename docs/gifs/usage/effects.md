---
sidebar_position: 6
---

# Effects

You can use the `Effect` property to tell the module how to show / hide GIFs. Currently only a `Fade` effect is available.

The `Fade` effect has `Time` and `Blocking` fields

-   `Time` tells the module how long it should take to fade between 2 GIFs (in seconds)
-   `Blocking` will yield the code while the GIF is fading out, if set to `true`

```lua
local GIFPlayer = require(game.ServerScriptService.GIFPlayer)

local gif = GIFPlayer.new({
	Screen = workspace.Screen.SurfaceGui,
	Image = "rbxassetid://3528512681",
	FPS = 24,
	FramesPerRow = 6,
	Frames = 26,
    // highlight-start
	Effect = {
		Name = "Fade",
		-- It'll take 0.25 seconds to fade between GIFs
		Time = 0.25,
		-- When this setting is set to true,
		-- the code will yield when destroying a GIF
		Blocking = false
	}
    // highlight-end
})

gif:Play()
```

:::tip
You can use `Name = "None"` to disable an effect as well
:::
