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
        <!-- Example row of columns --> 
          <div class="column">
            <h2>審計服務</h2>
            <p>經濟環境瞬息萬變，產業結構及投資環境亦不斷在改變，企業所面臨的風險相對提高。為了在此高度競爭的環境中，提供客戶更有效、全面性的服務</p>
            <p><router-link class="ui basic button" to="/services">了解服務 »</router-link></p>
          </div>  
          <div class="column">
            <h2>稅務服務</h2>
            <p>稅務法令具複雜且多變的性質，稍不留意，便可能因法令的修正或新增而重大影響企業未來的發展</p>
            <p><router-link class="ui basic button" to="/services">了解服務 »</router-link></p>
         </div>
          <div class="column">
            <h2>工商登記</h2>
            <p>工商登記為創業之第一步，現行法律下公司組織設立雖無資本額限制，但仍然需要出具會計師資本額查核簽證報告書，股東會及董事會會議舉行更是公司爾後少不了的法定程序</p>
            <p><router-link class="ui basic button" to="/services">了解服務 »</router-link></p>
          </div>
      </div>
    </div>

    <div class="fc-info">
      <h1 class="ui center aligned header">會計師介紹</h1>
      <div class="ui stackable grid container">
        <div class="five wide column">
          <img class="ui centered small circular image" src="../assets/fc.jpg">
          <div class="ui center aligned header">陳志成</div>
        </div>
        <div class="left aligned eleven wide column">
          <div class="ui list">
            <div class="item" style="padding: 1em;">
              <span>專長</span>：會計學 / 成本管理會計 / 記帳相關法規 / 租稅申報實務
            </div>
            <div class="item" style="padding: 1em;">
              <span>經歷</span>：現任知名輔考機構講師 / 現任大學外聘講師 / 現任會計稅務書籍主編 / 曾任勞工局就業輔導-會計實務應用班講師 / 曾任資誠聯合會計師事務所(審計組) / 曾任建利會計師事務所(稅務組)
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h1 class="ui center aligned header"> 聯絡我們</h1>
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
  .five.wide.column
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

</style>
