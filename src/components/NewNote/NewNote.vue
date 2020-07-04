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
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          }
          ]
      ]"
            />
        </div>

        <div class="row flex__row--center q-pa-lg">
            <q-btn color="black" label="Save" @click="saveNewNote" />
        </div>
    </div>
</template>

<script lang="ts" src="./NewNote.ts" />

<style scoped>

</style>

