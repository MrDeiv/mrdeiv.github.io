<script setup lang="ts">
    import TimelineBranch from '@/components/TimelineBranch.vue';

    defineProps({
        year: {
            type: String,
            required: true
        },
        events: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <li class="time">
        <div class="content">
            {{year}}
        </div>
    </li>
    <TimelineBranch v-for="event in events" :title="event.title" :description="event.description" />
</template>

<style>
    .timeline .time {
        float: left;
        width: 100%;
        text-align: center;
        margin: 15px 0;
    }
    .timeline .time .content {
        background: #fff;
        border: 3px solid black;
        padding: 3px 10px;
        font-size: 12px;
        color: #ccc;
        width: 50px;
        display: inline-block;
        text-align: center;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
        border-radius: 20px;
        z-index: 2;
        color: black;
    }
    .timeline .time:first-child {
        margin-top: 0;
    }
    .timeline .time:last-child {
        margin-bottom: 0;
    }
</style>