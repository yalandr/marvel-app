<template>
  <header class="header">
    <div class="container flex center just-center">
        <img src="../assets/logo.png" alt="Logo" class="header-logo">
    </div>
    <nav class="navigation container flex center just-center">
        <router-link to="/">Characters</router-link> |
        <router-link to="/comics">Comics</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header {
    background-color: #101010;
    color: #fff;
    padding: 1rem;
}
.header-logo {
    width: 12rem;
    height: auto;
    display: block;
}
.navigation {
    margin-top: 0.5rem;
    padding: 0.2rem 1rem;
    background-color: #000;
    border-radius: 4px;
}
.navigation a {
    margin: .2rem .5rem;
}
</style>