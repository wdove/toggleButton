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

For more information on how to setup a rules and customizations, [check the documentation](http://docs.jquery.com/Plugins).

## Contributing

## License
Copyright (c) 2012 
Licensed under the MIT license.