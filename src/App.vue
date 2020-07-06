<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <MainPage :todos="myToDos" :notes="myNotes" />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
                label-position="top"
                external-label
                color="purple"
                icon="keyboard_arrow_left"
                direction="left"
                type="button"
                padding="xs"
                class="q-btn–fab-huge"
        >
          <q-fab-action padding="14px" external-label label-position="top" color="primary" @click="openNewNote" icon="description" label="new Note" />
          <q-fab-action padding="14px" external-label label-position="top" color="orange" @click="openNewToDo" icon="alarm" label="new ToDo" />
        </q-fab>
      </q-page-sticky>
    </q-page-container>

    <q-dialog v-model="isVisibleDialogNewDocument" position="bottom" >
      <q-card style="min-width: 70vw;"
              v-bind:class="{ 'min-height__80': $q.platform.is.mobile, 'min-height__60': $q.platform.is.desktop }">
        <q-card-section class="row items-center q-pb-none">
          <div class="row">
            <q-btn color="black" dense :label="'Save '+titleDialogNewDocument" @click.prevent="submitDocument" />
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <component v-bind:is="currentDocumentComponent" :onAddNewDocument="addedNewDocument" ref="form"></component>
        </q-card-section>
      </q-card>

    </q-dialog>
  </q-layout>
</template>

<script lang="ts" src="./app.ts" />

<style>
  .q-btn–fab-huge{
    width:65px;
    height:55px;
  }
</style>
