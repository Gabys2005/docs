---
sidebar_position: 4
---

# Adding GIFs

So, Roblox doesn't accept GIFs, meaning that we need to convert them into **sprite sheets**. Sprite sheets are a collection of frames of the GIF put together into a grid.

## Converting GIFs into sprite sheets

You can use a website like https://ezgif.com/gif-to-sprite to convert a GIF to a sprite sheet.

:::tip
Try to keep the sprite sheet as square as possible for best quality. Avoid going over 100 frames in a single sprite sheet.
:::

## Editing the GIFs script

After uploading the sprite sheet to Roblox like a normal image, open the `GIFs` script that's inside of the panel part.

Each button on the panel is inside of the few lines of code between `{` and `}`. You need to copy the content from there to add more buttons. Here's what 1 button looks like:

```lua
{
    --// Panel stuff
    Name = "Example",
    ButtonColor = DefaultButtonColor,
    --// GIF Settings
    Image = "rbxassetid://3528512681",
    FPS = 24,
    FramesPerRow = 6,
    Frames = 26
};
```

Let's go through it line by line

### Name

```lua
Name = "Example",
```

is the name that will be visible on the panel.

### Button Color

```lua
ButtonColor = DefaultButtonColor,
```

is the color of the button on the panel, by default it's gray. If you want to change it, do it like so:

```lua
ButtonColor = Color3.fromRGB(R, G, B),
```

R, G and B should be numbers between 0 and 255

### Image

```lua
Image = "rbxassetid://3528512681",
```

is the **image** ID of the sprite sheet.

:::caution
The **image** ID is not the same as the **link** ID. To get the image ID, go to https://create.roblox.com/dashboard/creations?activeTab=Image, click the 3 dots on the image you want to copy and click **`Copy Asset URI`**
:::

### FPS

```lua
FPS = 24,
```

is the amount of **frames per second**, which is basically the speed of your GIF. This can be at most 60.

### Frames Per Row

```lua
FramesPerRow = 6,
```

is the amount of frames per individual row in your sprite sheet. You set that value on the GIF to sprite sheet website. By default it's 5.

### Frames

```lua
Frames = 26,
```

is the **total** amount of frames in your GIF. The GIF to sprite sheet website tells you how many frames there are in your GIF after converting it.
