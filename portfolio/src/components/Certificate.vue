<script setup lang="ts">
    defineProps({
        certificate: {
            type: Object,
            required: true,
        }
    })

    function redirect(url: string) {
        window.open(url, '_blank');
    }
</script>

<template>
    <div class="certificate">
        <h3>{{certificate.title}}</h3>
        <p>{{certificate.date}}</p>
        <button v-if="certificate.url" class="cert-btn" @click="redirect(certificate.url)">Verifica</button>
    </div>
</template>

<style>
    .certificate {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 1rem;
        margin: 1rem;
        cursor: pointer;
        width: 30%;
    }

    .certificate:hover {
        background-color: #f5f5f5;
    }

    .cert-btn {
        border: 1px solid black;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
        font-size: inherit;
    }

    .cert-btn:hover {
        background-color: black;
        color: white
    }
</style>