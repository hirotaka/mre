<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;
</script>

<template>
  <div>
    <button>Refresh</button>
    <ProductTitle :id="id" />
    <ProductDetail :id="id" />
  </div>
  <NuxtLink to="/">Back</NuxtLink>
</template>
