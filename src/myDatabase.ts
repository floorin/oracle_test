import Dexie from 'dexie';
import iNote from '@/types/iNote';

export const appDataBase = ( function() {
    const db: any = new Dexie('myDb');
    db.version(1).stores({
        notes: `++appid, bodyHtml, bodyText, color`,
        todos: `++appid, title, status, deadline`
    });
    async function putNewNote(note: iNote) {
        const id = await db.notes.put({bodyHtml:note.bodyHtml, bodyText: note.bodyText, color: note.color});
        return id;
    }
    async function getNotes() {
        const notes = await db.notes.toArray();
        return notes;
    }

    async function getToDos() {
        const todos = await db.todos.toArray();
        return todos;
    }

    return {db, putNewNote, getNotes, getToDos};
})();
