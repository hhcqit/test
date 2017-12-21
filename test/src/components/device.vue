<template>
  <div>
    <p>{{msg}}</p>
    <!--<p>-->
      <!--使用绑定value和input方法 <input :value="message" @input="updateMessage">-->
    <!--</p>-->
    <p>
      使用setter方法 <input type="text" v-model="message2">
      <br>
      一旦使用setter绑定同一个state会使绑定value和input方法的输入有误
    </p>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    name: 'device',
    data () {
      return {
        msg: 'Welcome to device page'
      }
    },
    computed:{
      message2: {
        get () {
          return this.$store.state.obj.message
        },
        set (value) {
          this.$store.commit('updateMessage',value)
        }
      },
      ...mapState({
        message: state => state.obj.meesage,

      })
    },
    methods:{
     updateMessage (e) {
       this.$store.commit('updateMessage', e.target.value)
     }
    }
  }
</script>

<style>

</style>
