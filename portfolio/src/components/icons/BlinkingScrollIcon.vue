<script setup lang="ts">
    import MaterialIcon from './MaterialIcon.vue';
</script>

<template>
    <MaterialIcon icon="expand_more" class="blink"/>
</template>

<style>
    .blink {
        animation: blink 2s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>