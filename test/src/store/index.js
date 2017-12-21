import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// const store = new Vuex.Store({
//   state:{/**状态**/
//     count:0,
//     todos:[{name:'school',done:true},{name:'home',done:false},{name:'company',done:true}]
//   },
//   getters:{/**相当于计算属性**/
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     },
//     doneTodosCount: (state, getters) => {
//       return getters.doneTodos.length
//     },
//     getTodoById: (state) => (name) => {
//       return state.todos.find(todo => todo.name === name)
//     }
//   },
//   mutations:{*更改store中状态的唯一方法，非常类似于事件，需要用store.commit调用方法*
//       increment(state,n){/**可以传入额外的参数(载荷,可以为对象)，调用方法store.commit(type,n)*/
//         if(n){
//           state.count+=n;
//         }else{
//           state.count++
//         }
//       },
//     incrementObj(state,obj){/**可以传入额外的参数(载荷,可以为对象)，调用方法store.commit(type,n)*/
//       state.count += obj.amount;
//     }
//   },
//   // actions:{
//   //   increment (context) {
//   //     context.commit('increment')
//   //   }
//   // }
//   actions: {
//     incrementAsync ({ commit }) {
//       setTimeout(() => {
//         commit('increment')
//       }, 1000)
//     }
//   }
// });
const store = new Vuex.Store({
  
})
export default store
// store.commit('increment'); //同步操作
// //Action 通过 store.dispatch 方法触发：
store.dispatch('incrementAsync') //异步操作
