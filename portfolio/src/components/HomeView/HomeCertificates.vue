<script setup lang="ts">
    import Certificate from '@/components/Certificate.vue';
    import certs from '@/data/certificates';
</script>

<template>
    <section id="certificates">
        <h1>{{$t("message.certificates_title")}}</h1>
        <div class="cert-list">
            <Certificate v-for="certificate in certs" :certificate="certificate"/>
        </div>
    </section>
</template>

<style>
    .cert-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
    }
</style>