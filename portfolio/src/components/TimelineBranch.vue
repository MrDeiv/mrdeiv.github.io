<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    })
</script>

<template>
    <li class="branch"> 
        <div class="content"> 
            <h3>{{title}}</h3>
            <p>{{description}}</p>
        </div>
    </li>
</template>

<style>
    .timeline .branch {
        background: white;
        position: relative;
        border: 1px solid black;
        padding: 10px;
        width: 275px;
        float: left;
        margin: 15px 23px 15px 0;
    }
    .timeline .branch:after {
        content: '';
        width: 20px;
        height: 20px;
        background: #fff;
        border: 2px solid black;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        position: absolute;
        top: 5px;
        left: 308px;
    }
    .timeline .branch .content {
        font-size: 14px;
        position: relative;
    }
    .timeline .branch .content:after, .timeline .branch .content:before {
        content: '';
        border: 10px solid transparent;
        border-left-color: #fff;
        position: absolute;
        top: 0;
        left: 284px;
    }
    .timeline .branch .content:before {
        border-left-color: black;
        left: 285px;
    }
    .timeline .branch .content h3 {
        margin: 0;
    }
    .timeline .branch .content p {
        margin: 0 0 5px;
    }
    .timeline .branch:nth-child(2n+1) {
        float: right;
        margin: 15px 0 15px 25px;
    }
    .timeline .branch:nth-child(2n+1):after {
        left: auto;
        right: 307px;
    }
    .timeline .branch:nth-child(2n+1) .content:after, .timeline .branch:nth-child(2n+1) .content:before {
        border-left-color: transparent;
        border-right-color: #fff;
        left: auto;
        right: 284px;
    }
    .timeline .branch:nth-child(2n+1) .content:before {
    border-right-color: black;
    right: 285px;
    }
</style>

