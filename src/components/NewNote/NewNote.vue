<template>
    <div>
        <q-editor
                width="100vw"
                min-height="20rem"
                ref="editor_ref"
                placeholder="Write here your text"
                v-model="myNote.bodyHtml"
                @paste.native="evt => pasteCapture(evt)"
                flat
                :content-style="{ backgroundColor: myNote.color}"
                toolbar-text-color="white"
                toolbar-toggle-color="yellow-8"
                toolbar-bg="primary"
                :toolbar="[
                            ['bold', 'italic', 'underline'],
                            ['bgColor'],
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
                    <q-item clickable @click="SetBgColor('yellow')">
                        <q-item-section side>
                            <q-icon name="bookmark" style="color: yellow;"/>
                        </q-item-section>
                        <q-item-section>yellow</q-item-section>
                    </q-item>
                    <q-item clickable @click="SetBgColor('#66ccff')">
                        <q-item-section side>
                            <q-icon name="bookmark" style="color: #66ccff;"/>
                        </q-item-section>
                        <q-item-section>blue</q-item-section>
                    </q-item>
                    <q-item clickable @click="SetBgColor('#99ff66')">
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
</template>

<script lang="ts" src="./NewNote.ts" />

<style scoped>
.div__save{
    display: flex;
    justify-content: flex-end;
    width:100%;
}
</style>

