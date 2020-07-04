<template>
    <div>
        <div class="row">
            <q-input
                    class="col-10"
                    outlined
                    label="Title"
                    v-model="myToDO.title"
                    lazy-rules
                    dense
                    :input-style="{ fontFamily: 'Nunito Sans',fontWeight: 'bolder' }"
                    :rules="[ val => !val || val.length <=200  || 'Maxim 200 caractere']"
            />
        </div>

        <div class="row">
            <q-select dense outlined v-model="myToDO.status" :options="optionsStatusTodDo" label="Status" />
        </div>

        <div class="row">
            <div style="min-width: 200px;padding-top: 15px;">
                <q-input outlined v-model="myToDO.deadline" dense mask="##.##.####"
                         label="Deadline"
                         :input-style="{ fontFamily: 'Nunito Sans',fontWeight: 'bolder' }"
                >
                    <q-popup-proxy ref="qDateProxy0" transition-show="scale" transition-hide="scale">
                        <q-date v-model="myToDO.deadline" mask="DD.MM.YYYY"  @input="() => $refs.qDateProxy0.hide()" :locale="myLocale" />
                    </q-popup-proxy>
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer"></q-icon>
                    </template>
                </q-input>
            </div>
        </div>

        <div class="row flex__row--center q-pa-lg">
            <q-btn color="black" label="Save" />
        </div>
    </div>
</template>

<script lang="ts" src="./NewToDo.ts" />

<style scoped>

</style>

