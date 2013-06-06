# Documentation

## Demo

[http://wdove.github.com/toggleButton/](http://wdove.github.com/toggleButton/)

## Usage

```html
<input type="checkbox" />

<script src="jquery.js"></script>
<script src="toggleButton.js"></script>
<script>
$(":checkbox").toggleButton({
  ImageWidth: 47,
  ImageHeight: 45,
  Url: "http://your_image.png",
  Checked: [0, 1],
  Unchecked: [0, 0],
  CheckedOver: [1, 1],
  UncheckedOver: [1, 0],
  CheckedDisabled: [2, 1],
  UncheckedDisabled: [2, 0]  
});
</script>
```

## Options
```html
ImageWidth: 50 by default.
ImageHeight: 50 by default.
The height and width of the image
```

Use one image base with 'Css Sprites' technique see: http://css-tricks.com/css-sprites/ . Use an unique image for each state of checkbox like this

![Doves.png](http://wdove.github.com/toggleButton/images/Doves.png)

The unique image is composed by an array of equals size.

![Doves2.png](http://wdove.github.com/toggleButton/images/Doves_Grid.png)

```html
Coordinates:

+--> X
|
v
 Y
```

```html
  Url: src of unique image (null by default)  
  Checked: position [x, y] of image for state checked. x, y can be defined with 'px', '%' or relative position in a table.  
  Unchecked: idem Checked for state unchecked.  
  CheckedOver: idem Checked for state checked with mouse over.  
  UncheckedOver: idem Checked for state unchecked with mouse over.  
  DisabledChecked: idem Checked for state checked with checkbox disable.  
  DisabledUnchecked: idem Checked for state unchecked with checkbox disable.
```

## License
Copyright (c) 2012 Licensed under the MIT license.toggleButton
============

ToggleButton enables the use of custom images to show the state of the CheckBox.
