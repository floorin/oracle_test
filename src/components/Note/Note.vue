<template>
    <div class="note__card" v-bind:style="{ color: fgColor, backgroundColor: bgColor, fontSize: fontSize + 'px' }" v-html="note.bodyHtml" />
</template>
<script lang="ts" src="./Note.ts" />

<style scoped>
.note{
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    margin: 8px 0;
    width: 240px;
}
</style>
