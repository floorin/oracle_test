import {Component, Prop, Vue } from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import todos from '../../store/todos';
import iToDo from '../../types/iToDo';
import {CONFIG_ENV} from '../../config';
import {appDataBase} from '../../myDatabase';

@Component({components: {}})
export default class DialogChangeStatus extends Vue {
    @Prop({ default: [] }) public readonly todo!: iToDo;
    @Prop() public onUpdatedStatus!: () => void;
    public loadingToDo = true;
    public newStatus = '';
    public storeParams = getModule(params);
    public storeToDos = getModule(todos);

    public get optionsStatusTodDo(): string[] {
        return this.storeParams.optionsStatusToDo.filter(option=>{ return option != this.todo.status; });
    }

    public setNewStatus(pNewStatusValue: string){
        console.log('set pNewStatusValue=%o',pNewStatusValue)
        appDataBase.changeStatusToDo(this.todo.appid,pNewStatusValue).then(presult=>{
            console.log('appDataBase.changeStatusToDo with presult=%o',presult)
            this.storeToDos.changeStatus({appid: this.todo.appid, newStatus: pNewStatusValue});
        })
    }

    /**
     * just for simulate nicely loading data
     */
    public created(){
        setTimeout(() => { this.loadingToDo = false; }, 500);
        console.log('created DialogChangeStatus with todo=%o',this.todo)
    }

}
