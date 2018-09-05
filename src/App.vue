<template>
  <div>
    <header>
      <nav class="topNavigation">
        <router-link class="link" to="/">Home</router-link>
        |
        <router-link class="link" to="/about">About</router-link>
      </nav>
    </header>
    <section id="mainContent">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style >
  h4{
    text-transform: uppercase;
    color: #145351;
  }

  .link{
    padding: 5px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  .link:hover{
    color: #145351;
    transition: all 0.5s;
  }
  .topNavigation{
    text-align: center;
    padding: 15px;
    color: #fff;
    background: rgba(0, 0, 0, 0.56);
  }

  #mainContent{
    background: #efefef;
  }
  .v-btn{
    font-weight: bold;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

</style>
