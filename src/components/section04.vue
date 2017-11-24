<template>
  <div id="section04" class="section">
    <h1>Section 4</h1>
  </div>
</template>

<script>
export default {
  name: 'section-04',
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
#section04{
  background:#7c6082;
}
</style>
