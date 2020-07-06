import {store} from './index';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import iNote from '../types/iNote';

@Module({ namespaced: true, dynamic: true, store, name: 'storeNotes'})
export default class Notes extends VuexModule {
    public dataNotes: iNote[]= [];

    @Mutation
    public SET_NOTES(dataNotes: iNote[]) {
        this.dataNotes = [ ...dataNotes ];
    }
    @Action
    public setNotes(dataNotes: iNote[]) {
        this.context.commit('SET_NOTES', dataNotes);
    }

    @Mutation
    public DELETE_NOTE(appid: number) {
        const index = this.dataNotes.findIndex(note => note.appid === appid);
        this.dataNotes.splice(index,1) ;
    }
    @Action
    public deleteNote(appid: number) {
        this.context.commit('DELETE_NOTE', appid);
    }
}
