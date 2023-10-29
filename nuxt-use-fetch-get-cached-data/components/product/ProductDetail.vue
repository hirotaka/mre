<script setup lang="ts">
const { data } = await useProduct();
</script>

<template>
  <div v-if="data?.product">
    <p>{{ data.product.description }}</p>
    <img width="300" :src="data.product.thumbnail" class="pt-2" />
  </div>
</template>
