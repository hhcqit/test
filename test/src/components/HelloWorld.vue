<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<h3>通过计算属性获得store中定义的状态count: {{count}}</h3>-->
    <!--<h3>通过计算属性获得store中定义的状态countAlias: {{countAlias}}</h3>-->
    <!--<h3>通过计算属性获得store中定义的状态doneTodosCount: {{doneTodosCount}}</h3>-->
    <!--<h3>doneTodos: {{doneTodos}}</h3>-->
    <!--<h3>-->
      <!--this.$store.commit('increment',10);<button @click="increment">count+=10</button>-->
      <!--<br>-->
      <!--this.$store.commit({type:'incrementObj',amount:-10}); <button @click="incrementObj({amount:-10})">count-=10</button>-->
    <!--</h3>-->
    <!--<h3>{{query}}</h3>-->
    <!--<h3>-->
      <!--{{ doneTodos }}-->
    <!--</h3>-->
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
//  computed:
//    mapState({
//    // 箭头函数可使代码更简练
//    count: state => state.count,
//
//    // 传字符串参数 'count' 等同于 `state => state.count`
//    countAlias: 'count',
//
//    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//    countPlusLocalState (state) {
//      return state.count + this.localCount
//    },
//    doneTodosCount () {
//      return this.$store.getters.doneTodosCount
//    },
//    doneTodos () {
//      return this.$store.getters.doneTodos
//    },
//    query () {
//      return this.$store.getters.getTodoById('school')
//    }
//  }),
//    {
//      // 使用对象展开运算符将 getter 混入 computed 对象中
//      ...mapGetters([
//        'doneTodosCount',
//        'doneTodos',
//        'getTodoById'
//        // ...
//      ])
//    },
//  methods:{
//    increment:function () {
//      this.$store.commit('increment',10);
//    },
//    incrementObj:function (obj) {
//        this.$store.commit({type:'incrementObj',...obj});
//    }
//  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
