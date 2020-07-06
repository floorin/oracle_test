<template>
<div>
    <masonry
            :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
    >
        <div v-for="note in filteredNotes" :key="note.appid">
            <Note :note="note"/>
        </div>
    </masonry>
    <div v-if="filteredNotes.length==0" class="flex__row--center">
        <span class="text-body1">No document found<span v-if="textForSearch.length>0">, but there is a filter</span>!</span>
    </div>
</div>
</template>

<script lang="ts" src="./ListNotes.ts" />

<style scoped>

</style>
