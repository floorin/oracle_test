import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {appDataBase} from '../../myDatabase';
import iNote from '../../types/iNote';
import {getModule} from 'vuex-module-decorators';
import { Notify } from 'quasar';
import {CONFIG_ENV} from '../../config';
import notes from '../../store/notes';

@Component({components: {}})
export default class Note extends Vue {
    @Prop({}) public readonly note!: iNote;
    public storeNotes = getModule(notes);

    public get fgColor(): string{
        return 'blue';
    }

    public get bgColor(): string{
        return this.note.color;
    }

    public get fontSize(): string{
        return CONFIG_ENV.defaultNoteFontSize;
    }

    public removeNote(){
        appDataBase.deleteNote(this.note.appid).then(presult=>{
            if(presult){
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    type: 'positive',
                    message: 'Document deleted!',
                    position: 'top',
                    timeout: 1000,
                });
                this.storeNotes.deleteNote(this.note.appid);
            }
        })
    }



}
