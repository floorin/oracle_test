<template>
    <masonry
            :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
            :gutter="{default: '30px', 700: '15px'}"
    >
        <div v-for="note in notes" :key="note.appid">
            <Note :note="note" />
        </div>
    </masonry>
</template>

<script lang="ts" src="./ListNotes.ts" />

<style scoped>

</style>
