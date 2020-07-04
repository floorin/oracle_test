import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import iNote from '@/types/iNote';
import {CONFIG_ENV} from '@/config';

@Component({components: {}})
export default class Note extends Vue {
    @Prop({}) public readonly note!: iNote;
    public myLocale: any;
    public myNote: iNote = {
        appid: 0,
        bodyHtml: '',
        bodyText: '',
        color: CONFIG_ENV.defaultNoteColor
    }

    public get fgColor(): string{
        return 'blue';
    }

    public get bgColor(): string{
        return this.note.color;
    }

    public get fontSize(): string{
        return '10';
    }

    constructor() {
        super();
        this.myLocale=CONFIG_ENV.myLocale;
    }

}
