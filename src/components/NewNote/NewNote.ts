import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iNote from '../../types/iNote';
import {CONFIG_ENV} from '../../config';
import {appDataBase} from '../../myDatabase';

@Component({components: {}})
export default class NewNote extends Vue {
    @Prop() public onAddNewDocument!: (is_todo_OR_is_note :string) => void;
    public storeParams = getModule(params);
    public myLocale: any;
    public myNote: iNote = {
        appid: 0,
        bodyHtml: '',
        bodyText: '',
        color: CONFIG_ENV.defaultNoteColor
    }

    constructor() {
        super();
        this.myLocale=CONFIG_ENV.myLocale;
    }

    public SetBgColor(pcolor: string){
        this.myNote.color = pcolor;
    }

    public saveNewNote(){
        appDataBase.putNewNote(this.myNote).then(presult => {
            console.log('presult=%o',presult)
            this.onAddNewDocument('note');
        });
    }
}
