<template>
  <div id="app">
    <router-view name="navSection"></router-view>
    <router-view></router-view>
    <router-view name="section02"></router-view>
    <router-view name="section03"></router-view>
    <router-view name="section04"></router-view>
  </div>
</template>

<script>
export default {
  el: '#app',
  methods: {
    nextSection: function (el) {
      let id = null
      if (isNaN(el)) {
        event.preventDefault()
        const delta = event.wheelDelta.toString()
        const scrollEl = delta.indexOf('-') === 0 ? el.nextElementSibling : el.previousElementSibling
        if (scrollEl) {
          id = '#' + scrollEl.getAttribute('id')
          const prevNavLinks = document.querySelector('.nav-item.active')
          const nextLink = document.querySelector("[href*='" + id + "']")
          // Component Nav
          if (prevNavLinks && nextLink) {
            prevNavLinks.classList.remove('active')
            nextLink.parentElement.classList.add('active')
          }
          if (delta.indexOf('-') === -1) {
            el.setAttribute('style', 'transform:translateY(100vh)')
          } else {
            document.querySelector(id).setAttribute('style', 'transform:translateY(-100vh)')
          }
        }
      } else {
        id = event.target.getAttribute('href')
        const sections = document.querySelectorAll('.section')
        for (let i = 0; i < sections.length; i++) {
          if (i > el) {
            sections[i].setAttribute('style', 'transform:translateY(100vh)')
          }
          if (el !== 0) {
            document.querySelector(id).setAttribute('style', 'transform:translateY(-100vh)')
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,400");

.section{
  width:100vw;
  height: 100vh;
  color:white;
  padding:7vh 5vw;
  font-family:'Roboto', sans-serif;
  position: fixed;
  top:100vh;
  transition: all 1.5s ease-in-out;
}
}
</style>
