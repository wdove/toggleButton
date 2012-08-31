`jQuery Toggle Button Plugin` - Use custom images to show the state of the checkbox.
================================

`toggleButton` is a jQuery plugin that can be attached to an HTML input checkbox control. The behavior of the checkbox is unaffected.

## Getting Started

Include jQuery and the plugin on a page. Then call `toggleButton` on each checkbox of your choice.

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

## Options
```html
ImageWidth: width in pixel of image for the checkbox (50 by default).

ImageHeight: height in pixel of image for the checkbox (50 by default).

Use CssSprites or multiples images

CssSprites: use a unique image for each state of checkbox.

  Url: src of unique image (null by default)  
  Checked: position [x, y] of image for state checked. x, y can be defined with 'px', '%' or relative position in a table.  
  Unchecked: idem Checked for state unchecked.  
  CheckedOver: idem Checked for state checked with mouse over.  
  UncheckedOver: idem Checked for state unchecked with mouse over.  
  DisabledChecked: idem Checked for state checked with checkbox disable.  
  DisabledUnchecked: idem Checked for state unchecked with checkbox disable.
  
Multiples images: use multiples images for each state of checkbox.
CheckedImageUrl: null,
UncheckedImageUrl: null,
CheckedImageOverUrl: null,
UncheckedImageOverUrl: null,
DisabledCheckedImageUrl: null,
DisabledUncheckedImageUrl: null,
ImagesPreLoad: Pre load each images (true by default),
```
For more information on how to setup a rules and customizations, [check the documentation](http://docs.jquery.com/Plugins).

## Demo

```html

```

## License
Copyright (c) 2012 
Licensed under the MIT license.