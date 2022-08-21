<script setup lang="ts">
    defineProps({
        icon: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <i class="material-icons">{{ icon }}</i>
</template>

<style> 
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons")
</style>