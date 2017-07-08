<template>
  <div id="app">
    <div class="ui fixed inverted menu">
      <div class="ui container">
        <router-link class="header item" to="/" exact>首頁</router-link>
        <router-link class="item" to="/services">服務項目</router-link>
        <router-link class="item" to="/accountant">會計師</router-link>
        <router-link class="item" to="/#contact">聯絡我們</router-link>
      </div>
    </div>
    <router-view></router-view>
    <hr>
    <div class="footer" style="margin: 1em 0;">
      <span>Copyright © 2017 FCheng.CPA. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">

#app
  .ui.fixed.inverted.menu
    font-size .8em

  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2C221A
  font-size 1.5em

</style>
