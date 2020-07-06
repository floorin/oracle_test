import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import iNote from '../../types/iNote';
import {CONFIG_ENV} from '../../config';
import {appDataBase} from '../../myDatabase';

@Component({components: {}})
export default class NewNote extends Vue {
    @Prop() public onAddNewDocument!: (documentType: string) => void;
    public $refs: any;
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

    public pasteCapture(evt: any) {
        let text = '';
        let onPasteStripFormattingIEPaste = true;
        const clipboardData = (window as any).clipboardData;
        evt.preventDefault()
        if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
            text = evt.originalEvent.clipboardData.getData('text/plain')
            this.$refs.editor_ref.runCmd('insertText', text)
        }
        else if (evt.clipboardData && evt.clipboardData.getData) {
            text = evt.clipboardData.getData('text/plain')
            this.$refs.editor_ref.runCmd('insertText', text)
        }
        else if ( clipboardData && clipboardData.getData) {
            if (!onPasteStripFormattingIEPaste) {
                onPasteStripFormattingIEPaste = true
                this.$refs.editor_ref.runCmd('ms-pasteTextOnly', text)
            }
            onPasteStripFormattingIEPaste = false
        }
    }

    public submitDocument(){
        if(this.myNote.bodyHtml.length==0){
            this.$q.notify({
                color: 'red',
                textColor: 'white',
                type: 'positive',
                message: 'Empty document could not be saved!',
                position: 'top',
                timeout: 3000,
            });
        }else {
            appDataBase.putNewNote(this.myNote).then(presult => {
                this.onAddNewDocument('note');
            }).catch(err => {
                const msgErrorOnSave = err.message || 'Document could not be saved!';
                this.$q.notify({
                    color: 'red',
                    textColor: 'white',
                    type: 'positive',
                    message: msgErrorOnSave,
                    position: 'top',
                    timeout: 3000,
                });
            });
        }
    }
}
