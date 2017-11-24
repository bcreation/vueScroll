<template>
  <div id="section03" class="section">
    <h1>Section 3</h1>
  </div>
</template>

<script>
export default {
  name: 'section-03',
  mounted () {
    this.$el.addEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      this.$parent.nextSection(event, this.$el)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#section03{
  background:#607d8b;
}
</style>
