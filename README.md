`jQuery Toggle Button Plugin` - Use custom images to show the state of the checkbox.
================================

`toggleButton` is a jQuery plugin that can be attached to an HTML input checkbox control. The behavior of the checkbox is unaffected.
The inspiration for this plugin comes from the component Ajax Control Toolkit http://www.asp.net/ajaxLibrary/AjaxControlToolkitSampleSite/ToggleButton/ToggleButton.aspx

## Getting Started

Include jQuery and the plugin in the page, then call `toggleButton` on each checkbox of your choice.

Usage with a single image ('Css Sprites' technique see: http://css-tricks.com/css-sprites/):

```html
<input type="checkbox" />

<script src="jquery.js"></script>
<script src="toggleButton.js"></script>
<script>
$("input:checkbox").toggleButton({
  ImageWidth: 47,
  ImageHeight: 45,
  CssSprites: {
      Url: "http://your_image.png",
      Checked: [0, 1],
      Unchecked: [0, 0],
      CheckedOver: [1, 1],
      UncheckedOver: [1, 0],
      DisabledChecked: [2, 1],
      DisabledUnchecked: [2, 0]
  }
});
</script>
```

The arrays Checked, Unchecked, ... are the relative positions of each icon in the single reference image.

Or with multiple images

```html
<input type="checkbox" />

<script src="jquery.js"></script>
<script src="toggleButton.js"></script>
<script>
$("input:checkbox").toggleButton({
  ImageWidth: 47,
  ImageHeight: 45,
  CheckedImageUrl: 'http://.../image_checked.png',
  UncheckedImageUrl: 'http://.../image_unchecked.png',
  CheckedImageOverUrl: 'http://.../image_checked_over.png',
  UncheckedImageOverUrl: 'http://.../image_unchecked_over.png',
  DisabledCheckedImageUrl: 'http://.../image_checked_disabled.png',
  DisabledUncheckedImageUrl: 'http://.../image_unchecked_disabled.png',
  ImagesPreLoad: true,
});
</script>
```

## Options
```html
ImageWidth: 50 by default.
ImageHeight: 50 by default.
The height and width of the image
```

Use one image base with "CssSprites" or multiples images.

### CssSprites

Use a unique image for each state of checkbox. The unique image is composed by an array of equals size.

```html
  CssSprites.Url: src of unique image (null by default)  
  CssSprites.Checked: position [x, y] of image for state checked. x, y can be defined with 'px', '%' or relative position in a table.  
  CssSprites.Unchecked: idem Checked for state unchecked.  
  CssSprites.CheckedOver: idem Checked for state checked with mouse over.  
  CssSprites.UncheckedOver: idem Checked for state unchecked with mouse over.  
  CssSprites.DisabledChecked: idem Checked for state checked with checkbox disable.  
  CssSprites.DisabledUnchecked: idem Checked for state unchecked with checkbox disable.
```

### Multiples images

Use multiples images for each state of checkbox.

```html
CheckedImageUrl: the URL of the image to show when the toggle button is in the checked state (null: default)
UncheckedImageUrl: the URL of the image to show when the toggle button is in the unchecked state (null: default)
CheckedImageOverUrl: the URL of the image to show when the toggle button is in the checked state and the mouse is over the button (null: default)
UncheckedImageOverUrl: the URL of the image to show when the toggle button is in the unchecked state and the mouse is over the button (null: default)
DisabledCheckedImageUrl: the URL of the image to show when the toggle button is disabled and in the checked state (null: default)
DisabledUncheckedImageUrl: the URL of the image to show when the toggle button is disabled and in the unchecked state (null: default)
ImagesPreLoad: Pre load each images (true by default),
```

For more information on how to setup a rules and customizations, [check the documentation](http://docs.jquery.com/Plugins).

## Demos

### Css Sprites
See with this Css Sprites: http://img840.imageshack.us/img840/962/doves.png.
This image `doves.png` is composed by 6 icons in a table 3 cols x 2 rows with the same (important) size (47x45 px).
1 for each state of checkbox (unchecked, checked, unchecked over, cheked over, unchecked disabled, checked disabled.
To use plugin give the url of your image and give the position in the table for each state.

```html
$(":checked").toggleButton({
    ImageWidth: 47,
    ImageHeight: 45,
    CssSprites: {
        Url: "http://img840.imageshack.us/img840/962/doves.png",
        Checked: [0, 1],
        Unchecked: [0, 0],
        CheckedOver: [1, 1],
        UncheckedOver: [1, 0],
        DisabledChecked: [2, 1],
        DisabledUnchecked: [2, 0]
    }
});
```

see it in action http://jsfiddle.net/dove/mtGME/

### Multiples images
Each image is loaded separately. To avoid flickering images, they are preloaded when initializing the plugin.

```html
$(":checked").toggleButton({
    ImageWidth: 47,
    ImageHeight: 45,
    CheckedImageUrl: 'http://img687.imageshack.us/img687/5514/dovechecked.png',
    UncheckedImageUrl: 'http://img560.imageshack.us/img560/269/doveuncheckedover.png',
    CheckedImageOverUrl: 'http://img88.imageshack.us/img88/5411/dovecheckedover.png',
    UncheckedImageOverUrl: 'http://img16.imageshack.us/img16/5226/doveunchecked.png',
    DisabledCheckedImageUrl: 'http://img822.imageshack.us/img822/4539/dovecheckeddisabled.png',
    DisabledUncheckedImageUrl: 'http://img16.imageshack.us/img16/5226/doveunchecked.png',
    ImagesPreLoad: true
});
```

see it in action http://jsfiddle.net/dove/2mFaw/

## License
Copyright (c) 2012 
Licensed under the MIT license.