import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iToDo from '../../types/iToDo';
import {CONFIG_ENV} from '../../config';

@Component({components: {}})
export default class ListToDos extends Vue {
    @Prop({ default: [] }) public readonly todos!: iToDo[];
    public storeParams = getModule(params);
    public filter = '';
    public loadingData= false;
    public myLocale: any;
    public visibleColumns: string[] = [ 'title', 'status', 'deadline'];
    public  columns: any = [
        { name: 'appid', label: '', field: 'appid', align: 'center',  classes: 'bg-grey-1', style: 'max-width: 30px',headerStyle: 'max-width: 30px' },
        { name: 'title', label: 'Task', field: 'title', align: 'left', sortable: true, classes: 'bg-grey-1'},
        { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true , classes: 'bg-grey-1' },
        { name: 'deadline', label: 'Due data', field: 'deadline', align: 'left', sortable: true }
    ];

    constructor() {
        super();
        this.myLocale=CONFIG_ENV.myLocale;
    }

    public get optionsStatusTodDo(): string[] {
        return this.storeParams.optionsStatusToDo;
    }
}
