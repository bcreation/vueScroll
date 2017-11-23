<template>
    <div id="section02" class="section">
    <h1>Section 2</h1>
  </div>
</template>

<script>
export default {
  name: 'section-02',
  mounted () {
    this.$el.addEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      this.$parent.nextSection(this.$el)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#section02{
  background:#009688;
}
</style>
