import Dexie from 'dexie';
import iNote from './types/iNote';
import iToDo from './types/iToDo';

export const appDataBase = ( function() {
    const db: any = new Dexie('myDb');
    db.version(1).stores({
        notes: `++appid, bodyHtml, bodyText, color`,
        todos: `++appid, title, status, deadline`
    });
    async function putNewToDo(todo: iToDo) {
        const id = await db.todos.put({title:todo.title, status: todo.status, deadline: todo.deadline});
        return id;
    }
    async function putNewNote(note: iNote) {
        const id = await db.notes.put({bodyHtml:note.bodyHtml, bodyText: note.bodyText, color: note.color});
        return id;
    }
    async function getNotes() {
        const notes = await db.notes.orderBy('appid').toArray();
        const list: iNote[] = [];
        notes.forEach((item: iNote) => {
            console.log('cycle notes for item=%o',item)
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
            console.log('cycle todos for item=%o',item)
            list.push({
                appid: item.appid,
                title: item.title,
                status: item.status,
                deadline: item.deadline
            })
        });
        return list;
    }

    return {db, putNewToDo, putNewNote, getNotes, getToDos};
})();
