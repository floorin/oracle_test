import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '@/store/params';
import iToDo from '@/types/iToDo';
import {CONFIG_ENV} from '@/config';

@Component({components: {}})
export default class NewToDo extends Vue {
    public storeParams = getModule(params);
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
}
