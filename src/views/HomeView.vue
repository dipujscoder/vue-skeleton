<script setup>
import MyLayout from '@/components/Layout/BaseLayout.vue';
import axios from 'axios';
import { onMounted } from 'vue';


onMounted(() => {
  async function getData() {
    const countriesData = await axios.get('/v1/metadata/countries?page=1&limit=20');

    console.log("countriesData", countriesData.data)


  }


  getData();


})






</script>

<template>
  <main>
    <MyLayout>
      <section>1</section>
      <section>2</section>
    </MyLayout>

  </main>
</template>
