<template>
  <div id="app">
    <h1>Vue Stack Grid</h1>
    <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" :monitor-images-loaded="true">
      <stack-item class="img-container" v-for="(item, i) in images" :key="i">
        <img :src="`https://via.placeholder.com/${item}`">
      </stack-item>
    </stack>
  </div>
</template>

<script>
import { Stack, StackItem } from '../../'

export default {
  components: { Stack, StackItem },
  data() {
    return {
      images: [
        '350x150',
        '300x500',
        '400x200',
        '200x200',
        '400x400',
        '200x200',
        '200x250',
        '500x500',
        '300x250',
        '400x200',
        '200x300',
        '300x300',
        '500x200',
        '300x300',
        '250x250',
        '300x500',
        '200x200',
        '400x400',
        '200x200',
        '200x250',
        '500x500',
        '300x250',
        '400x200',
        '200x300',
        '350x150',
        '300x500',
        '400x200',
        '200x200',
        '350x150',
        '300x500',
        '400x200',
        '200x200',
        '400x400',
        '300x250',
        '400x200',
        '200x300',
        '300x300',
        '500x200',
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
  overflow: hidden;
  margin: 0;
  object-fit: fill;
  cursor: pointer;
}

.img-container img {
  display: block;
  margin: 0;
  min-width: 100%;
}

.img-container figcaption {
  margin: 3px 0;
  text-align: center;
}
</style>
