import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '@/store/params';
import ListToDos from '@/components/ListToDos/ListToDos.vue';
import ListNotes from '@/components/ListNotes/ListNotes.vue';
import {CONFIG_ENV} from '@/config';
import iToDo from '@/types/iToDo';
import iNote from '@/types/iNote';

@Component({components: {ListToDos, ListNotes}})
export default class MainPage extends Vue {
    @Prop({ default: [] }) public readonly todos!: iToDo[];
    @Prop({ default: [] }) public readonly notes!: iNote[];
    public storeParams = getModule(params);
    public myLocale: any;
    public tabDocuments = 'ToDos';

    constructor() {
        super();
        this.myLocale=CONFIG_ENV.myLocale;
    }

    public get optionsStatusTodDo(): string[] {
        return this.storeParams.optionsStatusToDo;
    }
}
