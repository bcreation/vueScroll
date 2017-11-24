<template>
  <div id="section01" class="section">
    <h1>Section 1</h1>
  </div>
</template>

<script>
export default {
  name: 'section-01',
  mounted () {
    this.$parent.activeSection = '#' + this.$el.getAttribute('id')
    this.$el.addEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      // first section
      if (event.wheelDelta.toString().indexOf('-') === 0) {
        this.$parent.nextSection(this.$el)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#section01{
  background:#e91e63;
  top:0;
}
</style>
