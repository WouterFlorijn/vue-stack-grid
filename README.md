# vue-stack-grid

Vue components for stack grid/waterfall/Pinterest type layouts. Inspired by https://github.com/tsuyoshiwada/react-stack-grid

## Demo

Coming soon. Please see https://github.com/tsuyoshiwada/react-stack-grid for an indication.

## Installation

NPM:

```
npm install --save vue-stack-grid
```

## Usage

### Basic

```vue
<template>
  <div>
    <div class="row column">
      <stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
        <stack-item v-for="(item, i) in items" :key="i">
          {{ item.someContent }}
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
  import { Stack, StackItem } from 'vue-stack-grid';

  export default {
    components: { Stack, StackItem }
  }
</script>

```

### With animation

For animation, simply add `style="transition: left 300ms, top 300ms"` to the `stack-item`s.

### With images

If images appear anywhere in the stack items, apply the `monitor-images-loaded` prop to the `stack`.

## Props

### Stack

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `column-min-width` | Number | Yes | | The minimum width of columns. If the columns do not fit into the container anymore, the number of columns is reduced. |
| `gutter-width` | Number | No | `0` | The space between columns in pixels. |
| `gutter-height` | Number | No | `0` | The space between items in the same column. |
| `monitor-images-loaded` | Boolean | No | `false` | If true, reflow once all images are loaded using [vue-images-loaded](https://github.com/David-Desmaisons/Vue.ImagesLoaded). This is recommended if any of the stack items contain images, as the images might not be loaded yet when the initial positions and sizes are computed. |

Note that `gutter-width` and `gutter-height` can also be replaced by adding margin/padding to the stack items.

## Future plans

 - Add events.
 - Handle adding/removing items.
 - Add build system.
 - Add demo.
 - Maybe include animation props (although this can be acomplished using style/class props).

