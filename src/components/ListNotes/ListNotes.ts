import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import params from '../../store/params';
import iNote from '../../types/iNote';
import Note from '@/components/Note/Note.vue';

@Component({components: {Note}})
export default class ListNotes extends Vue {
    @Prop({ default: [] }) public readonly notes!: iNote[];
    public storeParams = getModule(params);
    public $els: any;
    public filter = '';
    public loadingData= false;

    constructor() {
        super();
    }

}
