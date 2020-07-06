<template>
    <div>
        <q-form
                class="q-gutter-md"
                ref="myForm"
        >
        <div class="row">
            <q-input
                    class="col-10"
                    outlined
                    label="Title"
                    v-model="myToDO.title"
                    maxlength="100"
                    lazy-rules
                    dense
                    :input-style="{ fontFamily: 'Nunito Sans',fontWeight: 'bolder' }"
                    :rules="[ val => val && val.length > 0 || 'Fill in task title!']"
            />
        </div>

        <div class="row">
            <q-select dense outlined
                      v-model="myToDO.status"
                      :options="optionsStatusTodDo"
                      label="Status"
                      style="min-width: 220px;"
                      :rules="[ val => val && val.length > 0 || 'Select status!']"
            />
        </div>

        <div class="row">
            <div style="min-width: 200px;padding-top: 15px;">
                <q-input outlined v-model="myToDO.deadline" dense mask="##.##.####"
                         label="Deadline"
                         :input-style="{ fontFamily: 'Nunito Sans',fontWeight: 'bolder' }"
                         :rules="[ val => val && val.length > 0 || 'Select a deadline!']"
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
        </q-form>
    </div>
</template>

<script lang="ts" src="./NewToDo.ts" />

<style scoped>
    .div__save{
        display: flex;
        justify-content: flex-end;
        width:100%;
        padding-right: 15px;
    }
</style>
