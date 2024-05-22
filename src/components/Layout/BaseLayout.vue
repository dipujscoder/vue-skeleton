<script setup>
import MyFooter from './MyFooter.vue';
import MyHeader from './MyHeader.vue';


</script>

<template>
  <MyHeader />
  <slot></slot>
  <MyFooter />
</template>
