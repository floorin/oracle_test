<template>
    <div>
        <div class="row flex__row--center">
            <q-editor
                    width="100%"
                    v-model="myNote.bodyHtml"
                    flat
                    :content-style="{ backgroundColor: myNote.color,width:'70vw' }"
                    toolbar-text-color="white"
                    toolbar-toggle-color="yellow-8"
                    toolbar-bg="primary"
                    :toolbar="[
                        ['bgColor'],
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          }
          ]
      ]"
       >
            <template v-slot:bgColor>
                <q-btn-dropdown
                        dense no-caps
                        ref="token"
                        no-wrap
                        unelevated
                        color="white"
                        text-color="primary"
                        label="BgColor"
                        size="sm"
                >
                    <q-list dense>
                        <q-item tag="yellow" clickable @click="SetBgColor('yellow')">
                            <q-item-section side>
                                <q-icon name="bookmark" style="color: yellow;"/>
                            </q-item-section>
                            <q-item-section>yellow</q-item-section>
                        </q-item>
                        <q-item tag="blue" clickable @click="SetBgColor('#66ccff')">
                            <q-item-section side>
                                <q-icon name="bookmark" style="color: #66ccff;"/>
                            </q-item-section>
                            <q-item-section>blue</q-item-section>
                        </q-item>
                        <q-item tag="green" clickable @click="SetBgColor('#99ff66')">
                            <q-item-section side>
                                <q-icon name="bookmark" style="color: #99ff66;"/>
                            </q-item-section>
                            <q-item-section>purple</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </template>
            </q-editor>
        </div>

        <div class="row flex__row--center q-pa-lg">
            <q-btn color="black" label="Save" @click="saveNewNote" />
        </div>
    </div>
</template>

<script lang="ts" src="./NewNote.ts" />

<style scoped>

</style>

