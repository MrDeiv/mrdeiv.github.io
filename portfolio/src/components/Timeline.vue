<script setup lang="ts">
    import TimelineYear from './TimelineYear.vue';
    import goals from '@/data/goals';

</script>

<template>
    <ul class="timeline" id="timeline">   
        <TimelineYear v-for="(goal, year) in goals" :year="year" :events="goal"/>
    </ul>
</template>

<style>
    .timeline {
        list-style: none;
        width: 640px;
        margin: 10px auto;
        position: relative;
        padding: 0;
    }
    .timeline:before {
        content: '';
        width: 6px;
        border: 1px solid black;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        background: black;
        z-index: -2;    
    }
    .timeline:after {
        content: '';
        clear: both;
        display: table;
    }
    
</style>
