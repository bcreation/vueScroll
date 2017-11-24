<template>
  <nav id='navSection' class='nav-bar'> 
    <ul class='nav-menu'>
      <li v-for='(section, key) in sections' class='nav-item' :class="section.link === sectionActive ? 'active' : ''">
        <a :href='section.link' v-on:click='activeLink($event, key)' class='nav-link'>{{ section.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navSection',
  data () {
    return {
      sections: [
        {
          name: 'home',
          link: '#section01'
        },
        {
          name: 'works',
          link: '#section02'
        },
        {
          name: 'skills',
          link: '#section03'
        },
        {
          name: 'contact',
          link: '#section04'
        }
      ]
    }
  },
  props: ['sectionActive'],
  methods: {
    activeLink (event, key) {
      this.$parent.nextSection(event, key)
      this.$parent.activeSection = this.sections[key].link
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
#navSection{
    position: fixed;
    z-index: 10000;
    top:0;
    left: 0;
    right: 0;
    background-color: white;
    height:25px;
    display:flex;
    flex-direction: row;
    background:none;
    padding:5px;
    font-family: 'Roboto', sans-serif;
    .nav-menu{
      padding-left:10px;
      width:100%;
      display:flex;
      align-items: center;
      .nav-item{
        &.active{
          .nav-link:after{
            transform: scaleX(1);
          }
        }
        list-style: none;
        min-width:100px;
        .nav-link{
          position: relative;
          &:after{
            left:0;
            content: " ";
            position: absolute;
            bottom: -2px;
            height: 1px;
            transform: scaleX(0);
            background:white;
            transition: all 0.8s 1s;
            width:100%;
          }
          transition: all 0.8s 1s;
          text-decoration: none;
          color:white;
          text-transform: uppercase;
          font-size:12px;
        }
      }
    }
  }
</style>
