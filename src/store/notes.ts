import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import iNote from '@/types/iNote';

@Module({ namespaced: true, dynamic: true, store, name: 'storeNotes'})
export default class Notes extends VuexModule {
    public dataNotes: iNote[]= [];

    @Mutation
    public SET_NOTES(dataNotes: iNote[]) {
        console.log('dataNotes=%o',dataNotes)
        this.dataNotes = Object.assign({}, dataNotes);
    }
    @Action
    public setNotes(dataNotes: iNote[]) {
        this.context.commit('SET_NOTES', dataNotes);
    }
}
