<template>
    <q-card flat bordered class="note" v-bind:style="{ color: fgColor, backgroundColor: bgColor, fontSize: fontSize }" >
        <q-card-section>
            <div class="row no-wrap">
                <div class="col" v-html="note.bodyHtml">
                </div>

                <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="more_vert" class="position_btn">
                        <q-menu cover auto-close>
                            <q-list>
                                <q-item clickable @click="removeNote">
                                    <q-item-section>Remove Note</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>
<script lang="ts" src="./Note.ts" />

<style scoped>
    .note{
        border-radius: 4px;
        padding: 5px;
        margin: 10px;
    }
    .position_btn{
       position: absolute;
        top:-5px;
        right:-10px;
    }
</style>
