import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import { RootContainer } from './components';

{
  console.log('ready!!');
  Vue.use(Vuex);
  new Vue({
    el: '#root',
    store: store,
    components: { RootContainer },
    template: '<RootContainer />'
  });
}