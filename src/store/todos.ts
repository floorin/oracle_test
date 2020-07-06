import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import iToDo from '../types/iToDo';

interface ParamsChangeStatus{
    appid: number;
    newStatus: string;
}
@Module({ namespaced: true, dynamic: true, store, name: 'storeToDos'})
export default class Todos extends VuexModule {
    public dataToDos: iToDo[]= [];

    @Mutation
    public SET_TODOS(dataToDos: iToDo[]) {
        this.dataToDos = [ ...dataToDos ];
    }
    @Action
    public setToDos(dataToDos: iToDo[]) {
        this.context.commit('SET_TODOS', dataToDos);
    }

    @Mutation
    public CHANGE_STATUS(params: ParamsChangeStatus) {
        const index = this.dataToDos.findIndex(todo => todo.appid === params.appid);
        this.dataToDos[index].status = params.newStatus;
    }
    @Action
    public changeStatus(params: ParamsChangeStatus) {
        this.context.commit('CHANGE_STATUS', params);
    }
}
