<template>
<div style="height: calc(100vh - 220px)">
    <masonry
            :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
    >
        <div v-for="note in filteredNotes" :key="note.appid">
            <Note :note="note"/>
        </div>
    </masonry>
    <div v-if="notes.length==0 ">
        To create a new document, use the purple button on the bottom right!
    </div>
    <div v-if="notes.length>0 && textForSearch.length>0 && filteredNotes.length==0" class="flex__row--center">
        <span class="text-body1">No documents for this filter!</span>
    </div>
    <div id="bottom_element_for_scrolling"></div>
</div>
</template>

<script lang="ts" src="./ListNotes.ts" />

<style scoped>

</style>
