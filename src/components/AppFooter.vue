<template>
  <footer class="footer">
    <div class="container flex center just-btwn">
        <img src="../assets/logo.png" alt="Logo" class="footer-logo">
        <a href="https://developer.marvel.com/" class="footer-link" target="_blank">
            Official Marvel Comics API
        </a>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style>
.footer {
    width: 100%;
    padding: 1rem 0;
    background-color: #080808;
    color: #999
}
.footer-logo {
    display: block;
    width: 6rem;
    height: auto;
}
.footer-link {
    font-size: 14px;
}
</style>