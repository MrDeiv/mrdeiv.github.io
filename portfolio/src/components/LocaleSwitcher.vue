<script setup lang="ts">
    const langs = ["en", "it"]
</script>

<template>  
  <div class="locale-changer">
    <select v-model="$i18n.locale" class="changer">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<style>
    .changer {
        font-size: 1rem;
        background-color: black;
        color: white;
        font-family: OpenSans;
        border: 1px solid white;
    }
</style>