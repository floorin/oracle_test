<template>
    <div>
        <q-table
                dense
                :rows-per-page-options="[0]"
                hide-bottom
                :data="todos"
                :columns="columns"
                :visible-columns="visibleColumns"
                row-key="appid"
                :filter="filter"
                :loading="loadingData"
        >

            <template v-slot:top >
                <q-space />
                <q-input dense debounce="300" color="primary" v-model="filter">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>

            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="appid" :props="props">
                        <q-icon name="folder_open" class="text-blue cursor-pointer" style="font-size: 1.5rem;" @click="openWorkOnDocument(props.row)" />
                    </q-td>
                    <q-td key="title" :props="props">
                        {{ props.row.title }}
                    </q-td>
                    <q-td key="status" :props="props">
                        {{props.row.status }}
                    </q-td>
                    <q-td key="deadline" :props="props">
                        {{ props.row.deadline }}
                    </q-td>
                </q-tr>
            </template>
        </q-table>
    </div>
</template>

<script lang="ts" src="./ListToDos.ts" />

<style scoped>

</style>
