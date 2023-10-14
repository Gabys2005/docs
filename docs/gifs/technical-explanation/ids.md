---
sidebar_position: 7
---

# IDs

You can optionally add an ID to each GIF to be able to get it later in another script.

```lua
GIFPlayer.new({
	ID = "123",
	...
})
```

```lua
local gif = GIFPlayer.GetById("123")
if gif then
	gif:Pause()
end
```
