import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

@Module({ namespaced: true, dynamic: true, store, name: 'storeParams'})
export default class Params extends VuexModule {
    public optionsStatusToDo: string[]= ['pending', 'working', 'completed' ];
}
