<template>
  <div class="main-wrapper">
    <AppHeader />
    <main class="main">
      <router-view/>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
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
.main-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex:1;
  display: flex;
  flex-direction: column;
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
li {
  list-style: none;
}
.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 7;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.center {
  align-items: center;
}
.just-center {
  justify-content: center;
}
.just-btwn {
  justify-content: space-between;
}

.card-item {
  width: 32%;
  border-radius: 5px;
  background-color: rgba(0,0,0,.6);
  margin-bottom: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid #333;
  padding: 1rem;
}
.card-item a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>
