import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

export default class VueInitializer {
  getNewLocalVue() {
    const localVue = createLocalVue();

    localVue.use(Vuex);
    return localVue;
  }
}
