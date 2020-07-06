<template>
<div style="padding: 5px;min-width: 50vw;" class="flex__row--center">
    <q-spinner-audio
            v-if="loadingToDo"
            color="black"
            size="3em"
    />
    <div v-else class="no-wrap q-pa-md" :class="$q.platform.is.mobile ? 'flex__column--reverse' : 'row'">
        <div style="display: flex;align-items: center;justify-content: center;">
            <q-select dense outlined v-model="newStatus" :options="optionsStatusTodDo" label="Set new status" style="min-width: 180px;" @input="setNewStatus" />
        </div>
        <q-separator vertical inset class="q-mx-lg" v-if="$q.platform.is.dektop" />
        <div class="column items-center" style="min-width: 30vw;">
            <div class="column items-center">
                <span class="text-h6">{{todo.title}}</span>
                <span class="text-subtitle2">Status: {{todo.status}}</span>
                <span class="text-subtitle2">Due date: {{todo.deadline}}</span>
            </div>
        </div>
        <q-btn icon="close" flat round dense v-close-popup class="position_btn"/>
    </div>
</div>
</template>

<script lang="ts" src="./DialogChangeStatus.ts" />

<style scoped>
    .position_btn{
        position: absolute;
        top:0px;
        right:0px;
    }
</style>
