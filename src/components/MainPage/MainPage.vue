<template>
    <div>
        <div class="q-gutter-y-md" style="width:100%;">
            <q-tabs
                    v-model="tabDocuments"
                    class="bg-black text-white shadow-2"
            >
                <q-tab name="ToDos" icon="alarm" label="ToDos">
                    <q-badge color="red" floating>{{todos.length}}</q-badge>
                </q-tab>
                <q-tab name="Notes" icon="description" label="Notes">
                    <q-badge color="red" floating>{{notes.length}}</q-badge>
                </q-tab>
            </q-tabs>

            <q-tab-panels v-model="tabDocuments" animated>
                <q-tab-panel name="ToDos">
                    <ListToDos :todos="todos" />
                </q-tab-panel>

                <q-tab-panel name="Notes">
                  <ListNotes :notes="notes"/>
                </q-tab-panel>
            </q-tab-panels>
        </div>
    </div>
</template>

<script lang="ts" src="./MainPage.ts" />

<style scoped>

</style>
