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
.flex-start {
  align-items: flex-start;
}
.just-center {
  justify-content: center;
}
.just-btwn {
  justify-content: space-between;
}

.card-item {
  width: 24%;
  border-radius: 5px;
  background-color: rgba(0,0,0,.6);
  margin-bottom: 1rem;
  backdrop-filter: blur(6px);
  border: 1px solid #333;
  text-align: center;
}
.card-item a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
}
.card-item-img {
  width: 90%;
  max-width: 100px;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

/*==== BUTTON ============*/
.btn {
  padding: 0.5rem 1rem;
  min-width: 5rem;
  border-radius: 4px;
  color: #fff;
  background-color: #1F69B1;
  border: none;
  font-weight: 700;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition: .2s;
}
.btn:hover {
  background-color: #09529c;
}

/*==== CARDS ============*/
.card-title {
    margin-bottom: 1rem;
}
.card-content {
    margin-bottom: 1rem;
}
.card-content-img {
    border-radius: 5px;
    width: 35%;
    height: auto;
}
.card-content-text {
    width: 60%;
}
.card-content-text p,
.card-content-text h3 {
    margin-bottom: 1rem;
}
.card-content-text p {
  font-size: 14px;
  color: #ddd;
  line-height: 1.6;
}
.card-content-text .card-item {
  font-size: 13px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0;
}
.card-content-text .card-item a {
  padding: 0.5rem;
}
</style>
