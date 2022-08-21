<script setup lang="ts">
    import DarkModeIcon from '@/components/icons/DarkModeIcon.vue';
</script>

<template>
    <div class="dark-mode-switch">
        <DarkModeIcon />
        <input type="checkbox" id="color-theme-cb">
    </div>
</template>

<style>
    .dark-mode-switch {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        border: 1px solid white;
        transition: box-shadow 0.2s ease-in-out;
        cursor: pointer;
        margin: 2%;
    }
    .dark-mode-switch input {
        display: none;
    }
    .dark-mode-switch input:checked + .dark-mode-switch-icon {
        background-color: white;
    }
    .dark-mode-switch-icon {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #fff;
        transition: background-color 0.2s ease-in-out;
    }
    .dark-mode-switch input:checked + .dark-mode-switch-icon {
        background-color: #000;
    }
</style>
