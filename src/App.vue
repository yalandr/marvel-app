<template>
  <AppHeader />
  <router-view/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #151515;
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
  opacity: .8;
  transition: .2s
}
a:hover {
  opacity: 1;
}
.container {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.center {
  align-items: center;
}
.just-center {
  justify-content: center;
}
</style>
