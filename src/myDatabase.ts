import Dexie from 'dexie';
import iNote from './types/iNote';
import iToDo from './types/iToDo';

export const appDataBase = (() => {
    const db: any = new Dexie('myDb');
    db.version(1).stores({
        notes: `++appid, bodyHtml, bodyText, color`,
        todos: `++appid, title, status, deadline`
    });
    async function putNewToDo(todo: iToDo) {
        const id = await db.todos.put({title: todo.title, status: todo.status, deadline: todo.deadline});
        return id;
    }
    async function putNewNote(note: iNote) {
        note.bodyText = note.bodyHtml.replace(/<[^>]+>/g, '');
        const id = await db.notes.put({bodyHtml: note.bodyHtml, bodyText: note.bodyText.toLowerCase(), color: note.color});
        return id;
    }
    async function getNotes() {
        const notes = await db.notes.orderBy('appid').toArray();
        const list: iNote[] = [];
        notes.forEach((item: iNote) => {
            list.push({
                appid: item.appid,
                bodyHtml: item.bodyHtml,
                bodyText: item.bodyText,
                color: item.color
            })
        });
        return list;
    }

    async function getToDos() {
        const todos = await db.todos.orderBy('appid').toArray();
        const list: iToDo[] = [];
        todos.forEach((item: iToDo) => {
            list.push({
                appid: item.appid,
                title: item.title,
                status: item.status,
                deadline: item.deadline
            })
        });
        return list;
    }

    async function deleteNote(pappid: number) {
        const deleteCount = await db.notes
            .where('appid').equals(pappid)
            .delete();
        return deleteCount;
    }

    async function changeStatusToDo(pappid: number,newStatus: string) {
        const updatedCount = await db.todos
            .where('appid').equals(pappid)
            .modify({status: newStatus});
        return updatedCount;
    }

    return {db, putNewToDo, changeStatusToDo, getToDos, putNewNote, getNotes, deleteNote};
})();
