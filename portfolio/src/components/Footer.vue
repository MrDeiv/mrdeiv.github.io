<script setup lang="ts">    
    import DarkModeSwitch from '@/components/DarkModeSwitch.vue';
</script>

<template>
    <div class="footer-container">
        <div class="footer-credits">
            Built by MrDeiv in VueJS
        </div>
        <!-- <DarkModeSwitch /> -->
    </div>
</template>

<style>
    .footer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        font-family: OpenSans;
        color: white;
        padding: 0.5em;
    }

    .footer-credits {
        font-size: 1rem;
        font-weight: normal;
    }
</style>