import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import iToDo from '../types/iToDo';

@Module({ namespaced: true, dynamic: true, store, name: 'storeToDos'})
export default class Todos extends VuexModule {
    public dataToDos: iToDo[]= [];

    @Mutation
    public SET_TODOS(dataToDos: iToDo[]) {
        console.log('dataToDos=%o',dataToDos)
        this.dataToDos = [ ...dataToDos ];
    }
    @Action
    public setToDos(dataToDos: iToDo[]) {
        this.context.commit('SET_TODOS', dataToDos);
    }
}
