<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;
</script>

<template>
  <ProductTitle :id="id" />
  <ProductDetail :id="id" />
  <NuxtLink to="/">Back</NuxtLink>
</template>
