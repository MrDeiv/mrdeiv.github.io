<script setup lang="ts">
    import BlinkingScrollIcon from '../icons/BlinkingScrollIcon.vue';
    import LocaleSwitcher from '../LocaleSwitcher.vue';
    
    function scroll() {
        //scroll to about section
        const about = document.getElementById('about');
        if (about) {
            about.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<template>
    <div class="hero-container">
        <div class="hero-text">
            <h1>{{$t("message.welcome")}}</h1>
            <p class="lang-choose">{{$t("message.prefer")}}</p>
            <LocaleSwitcher />
        </div>
        <div class="scroll">
            <BlinkingScrollIcon class="scroll-icon" @click="scroll"/>
        </div>
    </div>
</template>

<style>
    .hero-container {
        display: flex;
        background-image: linear-gradient(rgb(0,0,0,0),rgba(0, 0, 0, 0.768)), url('@/assets/images/home-hero-bg.jpg');
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100%;
        justify-content: center;
        flex-direction: column;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 3rem;
        font-weight: bold;
        text-shadow: 0 0 10px #000;
        width: 100%;
        height: 100%;
    }

    .lang-choose {
        font-size: 1.5rem;
        font-weight: normal;
        margin-top: 1rem;
    }

    .lang {
        cursor: pointer;
        text-decoration: underline;
    }

    .scroll {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .scroll-icon {
        font-size: 3rem;
        color: white;
        cursor: pointer;
    }
</style>