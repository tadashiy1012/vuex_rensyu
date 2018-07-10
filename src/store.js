import Vue from 'vue';
import Vuex from 'vuex';
import {ADD_TODO_ITEM,
  SWITCH_TODO_DONE, REMOVE_TODO_ITEM
} from './mutation-types';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todoItems: [
      {id:0, text: 'hoge', done: false},
      {id:1, text: 'fuga', done: false}
    ]
  },
  mutations: {
    [ADD_TODO_ITEM](state, payload) {
      const newItem = payload.newItem;
      const newId = state.todoItems[state.todoItems.length - 1].id + 1;
      newItem.id = newId;
      console.log(newItem);
      state.todoItems = [...state.todoItems, newItem];
    },
    [SWITCH_TODO_DONE] (state, payload) {
      const tgt = this.state.todoItems.find(elm => elm.id === payload.tgtId);
      tgt.done = !tgt.done;
    },
    [REMOVE_TODO_ITEM] (state, payload) {
      console.log(payload);
      const filtered = state.todoItems.filter((elm) => elm.id !== payload.tgtId);
      console.log(filtered);
      state.todoItems = filtered;
    }
  },
  getters: {
    countTodoNumber: state => {
      return state.todoItems.length;
    },
    getTodoItems: state => {
      return state.todoItems.concat();
    },
    getTodoItem: (state) => (id) => {
      return state.todoItems.find(todo => todo.id === id);
    },
    getDoneItem: (state) => {
      return state.todoItems.filter((elm, idx, self) => elm.done);
    }
  },
  actions: {
    addTodoItem({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit(ADD_TODO_ITEM, payload);
        resolve(true);
      });
    },
    switchTodoDone({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit(SWITCH_TODO_DONE, payload);
        resolve(true);
      });
    },
    clearDoneTodoItem({ commit }, payload) {
      return new Promise((resolve, reject) => {
        const task = function(tgtId) {
          return new Promise((rslv, rjct) => {
            commit(REMOVE_TODO_ITEM, {tgtId});
            rslv(true);
          });
        };
        const taskAry = payload.tgtIds.map((elm) => task(elm));
        console.log(taskAry);
        Promise.all(taskAry).then((resp) => {
          console.log(resp);
          resolve([true, resp]);
        });
      });
    }
  }
});

export default store;