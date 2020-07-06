import {Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iToDo from '../../types/iToDo';
import DialogChangeStatus from '../DialogChangeStatus/DialogChangeStatus.vue';

@Component({components: {DialogChangeStatus}})
export default class ListToDos extends Vue {
    @Prop({ default: [] }) public readonly todos!: iToDo[];
    @Prop({ default: [] }) public readonly textForSearch!: string;
    public storeParams = getModule(params);
    public $refs: any;
    public pagination: any =  {
        rowsPerPage: 0
    };
    public all = true;
    public onlyCompleted = false;
    public onlyPending = false;
    public visibleDialogChangeStatus = false;
    public selectedToDo: iToDo;
    public visibleColumns: string[] = [ 'appid', 'title', 'status', 'deadline'];
    public  columns: any = [
        { name: 'appid', label: '', field: 'appid', align: 'center',  classes: 'bg-grey-1', style: 'max-width: 30px',headerStyle: 'max-width: 30px' },
        { name: 'title', label: 'Task', field: 'title', align: 'left', sortable: true, classes: 'bg-grey-1'},
        { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true , classes: 'bg-grey-1' },
        { name: 'deadline', label: 'Due date', field: 'deadline', align: 'left', sortable: true, classes: 'bg-grey-1' }
    ];

    constructor() {
        super();
        this.selectedToDo={
            appid: 0,
            title: '',
            status: '',
            deadline: ''
        }
    }

    public get optionsStatusTodDo(): string[] {
        return this.storeParams.optionsStatusToDo;
    }

    public get filteredToDos(): iToDo[]{
        let filteredToDos = [ ...this.todos];
        if(this.textForSearch.length !== 0 ){
            filteredToDos = this.todos.filter(todo => {
                return todo.title.toLowerCase().indexOf(this.textForSearch.toLowerCase())>=0
            })
        }
        return filteredToDos.filter(todos=>{
               const statusFiltered = (this.onlyCompleted?'completed':'') || (this.onlyPending?'pending':'');
               return (statusFiltered?todos.status==statusFiltered:true);
        })
    }

    public showAll(clickedShowAll: boolean){
        if(clickedShowAll){
            this.onlyPending=false;
            this.onlyCompleted=false;
        }
    }

    public showOnlyCompleted(clickedShowCompleted: boolean){
        if(clickedShowCompleted){
            this.all=false;
            this.onlyPending=false;
        }
    }

    public showOnlyPending(clickedShowPending: boolean){
        if(clickedShowPending){
            this.all=false;
            this.onlyCompleted=false;
        }
    }

    public openDialogChangeStatus(todo: iToDo){
        this.selectedToDo = todo;
        this.visibleDialogChangeStatus = true;
    }

    public get NrOfToDos(): number{
        return this.todos.length;
    }

   @Watch('NrOfToDos')
    public onNrOfToDosChanged(newVal: number, oldVal: number) {
        try{this.$refs.table.scrollTo(newVal-2);}
        catch (e) {
            console.log(' ');
        }
    }
}
