import { Component, Vue } from 'vue-property-decorator';
import NewToDo from '@/components/NewToDo/NewToDo.vue';
import NewNote from '@/components/NewNote/NewNote.vue';
import MainPage from '@/components/MainPage/MainPage.vue';
import notes from '@/store/notes';
import todos from '@/store/todos';
import iNote from '@/types/iNote';
import iToDo from '@/types/iToDo';
import {getModule} from 'vuex-module-decorators';
import {appDataBase} from '@/myDatabase';

@Component({components: {MainPage,NewToDo,NewNote}})
export default class App extends Vue {
    public isVisibleDialogNewDocument = false;
    public loadingData =true;
    public titleDialogNewDocument = '';
    public currentDocumentComponent = '';
    public storeNotes = getModule(notes);
    public storeTodos = getModule(todos);

    public openNewNote(){
        this.titleDialogNewDocument = 'New Note';
        this.currentDocumentComponent = 'NewNote';
        this.isVisibleDialogNewDocument = true;
    }

    public openNewToDo(){
        this.titleDialogNewDocument = 'New ToDo';
        this.currentDocumentComponent = 'NewToDo';
        this.isVisibleDialogNewDocument = true;
    }

    public get myNotes(): iNote[] {
        return this.storeNotes.dataNotes;
    }

    public get myToDos(): iToDo[] {
        return this.storeTodos.dataToDos;
    }

    public addedNewDocument(){
        this.isVisibleDialogNewDocument = false;
        this.currentDocumentComponent = '';
    }

    public loadDataFromDB(){
        const vueInst = this;
        const updateStoreWithToDosFromDB = new Promise(
            (resolve, reject) => {
                appDataBase.getToDos().then(presult=>{
                    console.log('%cupdateStoreWithToDosFromDB from app.ts with presult=%o', "color: red;font-size:16px;", presult)
                    if(presult.length>0) {vueInst.storeTodos.setToDos(presult);}
                    resolve('success');
                })
            });

        const updateStoreWithNotesFromDB = new Promise(
            (resolve, reject) => {
                appDataBase.getNotes().then(presult=>{
                    console.log('%cupdateStoreWithNotesFromDB from app.ts with presult=%o', "color: red;font-size:16px;", presult)
                        if(presult.length>0) {vueInst.storeNotes.setNotes(presult);}
                        resolve('success');
                })
            });
        Promise.all([updateStoreWithToDosFromDB, updateStoreWithNotesFromDB])
            .then(result => {
                console.log('Promise.all cu succes!');
                vueInst.loadingData = false;
            })
            .catch(error => console.log(`Error in executing loadDataFromDB ${error}`))
    }

    public created(){
        this.loadDataFromDB();
    }

}
