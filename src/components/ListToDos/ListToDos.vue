<template>
    <div>
        <q-table v-if="$q.platform.is.mobile"
                dense
                grid
                :rows-per-page-options="[0]"
                hide-bottom
                :data="filteredToDos"
                :columns="columns"
                :visible-columns="visibleColumns"
                row-key="appid"
                :loading="loadingData"
        >

            <template v-slot:top >
                <q-toggle v-model="all" label="Show all" @input="showAll" />
                <q-toggle v-model="onlyCompleted" label="Show only completed" @input="showOnlyCompleted" />
                <q-toggle v-model="onlyPending" label="Show only pending"  @input="showOnlyPending" />
            </template>

            <template v-slot:item="props" >
                <div
                        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                >
                    <q-card flat bordered>
                        <q-card-section>
                            <div class="text-h6"><q-btn flat color="white" icon="folder_open" size="xs" class="text-blue" style="font-size: 0.8rem;" @click="openDialogChangeStatus(props.row)" />{{ props.row.title }}</div>
                            <div class="text-subtitle2">Status: {{ props.row.status }}</div>
                            <div class="text-subtitle2">Due data: {{ props.row.deadline }}</div>
                        </q-card-section>
                    </q-card>
                </div>
            </template>
        </q-table>
        <q-table
                v-else
                dense
                style="height: 70vh"
                :rows-per-page-options="[0]"
                hide-bottom
                :data="filteredToDos"
                :columns="columns"
                :visible-columns="visibleColumns"
                row-key="appid"
                :loading="loadingData"
        >

            <template v-slot:top >
                <q-toggle v-model="all" label="Show all" @input="showAll" />
                <q-toggle v-model="onlyCompleted" label="Show only completed" @input="showOnlyCompleted" />
                <q-toggle v-model="onlyPending" label="Show only pending"  @input="showOnlyPending" />
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="appid" :props="props">
                        <q-btn flat color="white" icon="folder_open" size="xs" class="text-blue cursor-pointer" style="font-size: 0.8rem;">
                            <q-menu
                                    transition-show="scale"
                                    transition-hide="scale"
                            >
                                <DialogChangeStatus :todo="props.row" />
                            </q-menu>
                        </q-btn>
                    </q-td>
                    <q-td key="title" :props="props">
                        {{ props.row.title }}
                    </q-td>
                    <q-td key="status" :props="props">
                        {{ props.row.status }}
                    </q-td>
                    <q-td key="deadline" :props="props">
                        {{ props.row.deadline }}
                    </q-td>
                </q-tr>
            </template>
        </q-table>

        <q-dialog v-model="visibleDialogChangeStatus" position="left">
            <q-card style="width: 90vw">
                <DialogChangeStatus :todo="selectedToDo" />
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="ts" src="./ListToDos.ts" />

<style scoped>

</style>
