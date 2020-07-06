import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import iNote from '../../types/iNote';
import Note from '@/components/Note/Note.vue';
import { scroll } from 'quasar';
const { getScrollTarget, setScrollPosition } = scroll;

@Component({components: {Note}})
export default class ListNotes extends Vue {
    @Prop({ default: [] }) public readonly notes!: iNote[];
    @Prop({ default: [] }) public readonly textForSearch!: string;
    public filter = '';

    public scrollDown(){
        const el: HTMLElement = document.getElementById('bottom_element_for_scrolling')!;
        const target = getScrollTarget(el)
        const offset = el.offsetTop
        const duration = 300;
        setScrollPosition(target, offset, duration);
    }

    public get filteredNotes(): iNote[] {
        if(this.textForSearch.length == 0 ){
            return this.notes;
        }
       else {
           return this.notes.filter(note => {
               return note.bodyText.indexOf(this.textForSearch.toLowerCase())>=0
            })
        }
    }

    public get NrOfNotes(): number{
        return this.notes.length;
    }

    @Watch('NrOfNotes')
    public onNrOfNotes(newVal: number, oldVal: number) {
        try{this.scrollDown();}
        catch (e) {
            console.log(' ');
        }
    }
}
