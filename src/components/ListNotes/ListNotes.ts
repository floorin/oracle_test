import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iNote from '../../types/iNote';
import Note from '@/components/Note/Note.vue';

@Component({components: {Note}})
export default class ListNotes extends Vue {
    @Prop({ default: [] }) public readonly notes!: iNote[];
    @Prop({ default: [] }) public readonly textForSearch!: string;
    public storeParams = getModule(params);
    public $els: any;
    public filter = '';
    public loadingData= false;

    constructor() {
        super();
    }

    public get filteredNotes(): iNote[] {
        if(this.textForSearch.length == 0 ){
            return this.notes;
        }
       else {
           return this.notes.filter(note => {
               return note.bodyText.indexOf(this.textForSearch.toLowerCase())>=0
            })
        }
    }

    public deleteNote(appid: number){
        console.log('deleteNote appid=%o',appid)
    }

}
