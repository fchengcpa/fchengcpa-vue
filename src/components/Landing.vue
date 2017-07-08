<template>
  <div class="landing">

    <div class="masthead">
      <div class="container">
        <div style="padding-top: 10em; font-size: 1.5em;">
          <div class="ui center aligned header">賦誠會計師事務所</div>
          <p>勤以致富，待人以誠</p>
          <a class="large ui brown button" href="#services">了解更多</a>
        </div>
      </div>
    </div>

    <div class="services">
      <h1 class="ui center aligned header" name="services" id="services">服務項目</h1>
      <div class="ui stackable three column grid container">
        <div class="column">
          <h2>審計服務</h2>
          <div class="ui list">
            <div class="item">審計簽證</div>
            <div class="item">公開發行及上市(櫃)專案輔導與規劃</div>
            <div class="item">公司治理諮詢服務</div>
          </div>
          <router-link class="ui basic button" to="/services">了解服務 »</router-link>
        </div>
        <div class="column">
          <h2>稅務服務</h2>
          <div class="ui list">
            <div class="item">公司稅與間接稅(營業稅、所得稅等)</div>
            <div class="item">稅務行政救濟服務</div>
          </div>
          <router-link class="ui basic button" to="/services">了解服務 »</router-link>
        </div>
        <div class="column">
          <h2>工商登記</h2>
          <div class="ui list">
            <div class="item">設立登記、變更登記</div>
            <div class="item">出進口廠商登記</div>
            <div class="item">勞健保投保單位成立</div>
            <div class="item">國內商標申請</div>
          </div>
          <router-link class="ui basic button" to="/services">了解服務 »</router-link>
        </div>
      </div>
    </div>

    <div class="fc-info">
      <h1 class="ui center aligned header">會計師介紹</h1>
      <div class="ui stackable grid container">
        <div class="seven wide column">
          <img class="ui centered small circular image" src="../assets/fc.jpg">
          <div class="ui center aligned header">陳志成</div>
        </div>
        <div class="left aligned nine wide column">
          <div class="ui list">
            <div class="item">現任經濟部中小企業處榮譽會計師</div>
            <div class="item">現任知名輔考機構講師</div>
            <div class="item">現任大學外聘講師</div>
            <div class="item">現任會計稅務書籍主編</div>
            <div class="item">曾任勞工局就業輔導-會計實務應用班講師</div>
            <div class="item">曾任資誠聯合會計師事務所(審計組)</div>
            <div class="item">曾任建利會計師事務所(稅務組)</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h1 class="ui center aligned header" id="contact">聯絡我們</h1>
      <div class="large ui brown button" v-on:click="openCrisp">不用等，線上即時詢問！</div>
      <div class="ui left aligned container">
        <div class="ui list">
          <div class="item">
            <i class="fax icon"></i> (07) 213-5530
          </div>
          <div class="item">
            <i class="volume control phone icon"></i> (07) 581-0573
          </div>
          <div class="item">
            <a href="mailto:fcheng.cpa@gmail.com"><i class="mail outline icon"></i> fcheng.cpa@gmail.com</a>
          </div>
          <div class="item">
            <i class="marker icon"></i> 高雄市楠梓區久昌街135巷14弄8號
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>{{ msg }}</h1> -->

  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openCrisp: function () {
      $crisp.push(['do', 'chat:open'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.masthead
  background-image url("../assets/cover.jpeg")
  background-size cover
  background-repeat no-repeat
  height 1024px

.container
  margin 0em 0

.services
  margin-bottom 2em
  .header
    padding 1em 0

.fc-info
  .wide.column
    .header
      margin 0
  background #E1BB98
  span
    font-weight bold
  .header
    padding 1em 0

.contact
  margin-bottom 2em
  .list
    max-width 450px
    margin 0 auto
  .header
    padding 1em 0
  a
    color #B46B2A
  .button
    margin 0em 0 3em 0

</style>
