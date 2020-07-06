import {Component, Prop, Vue } from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iToDo from '../../types/iToDo';
import {CONFIG_ENV} from '../../config';
import {appDataBase} from '../../myDatabase';

@Component({components: {}})
export default class NewToDo extends Vue {
    @Prop() public onAddNewDocument!: (documentType: string) => void;
    public storeParams = getModule(params);
    public $refs: any;
    public myLocale: any;
    public myToDO: iToDo = {
        appid: 0,
        title: '',
        status: '',
        deadline: ''
    }

    constructor() {
        super();
        this.myLocale=CONFIG_ENV.myLocale;
    }

    public get optionsStatusTodDo(): string[] {
        return this.storeParams.optionsStatusToDo;
    }

    public submitDocument(){
        this.$refs.myForm.validate().then((success: boolean) => {
            if (success) {
                this.saveToDoDocument();
            }
        })
    }

    public saveToDoDocument() {
        appDataBase.putNewToDo(this.myToDO).then(presult => {
            this.onAddNewDocument('todo');
        }).catch(err =>{
            const msgErrorOnSave=err.message || 'Document could not be saved!';
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
