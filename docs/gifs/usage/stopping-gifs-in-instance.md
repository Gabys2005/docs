---
sidebar_position: 4
---

# Stopping all GIFs in an Instance

You can use the `.DestroyAllGifsIn()` function to destroy all gifs in the specified instance.

```lua
local GIFPlayer = require(game.ServerScriptService.GIFPlayer)

// highlight-next-line
GIFPlayer.DestroyAllGifsIn(workspace.Prop)
```
