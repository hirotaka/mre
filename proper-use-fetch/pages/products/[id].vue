<script setup lang="ts">
import { useProduct } from "~/composables/useProduct";

const route = useRoute();
const id = route.params.id as string;
const { product, fetchProduct } = await useProduct(id);

const onClick = async () => {
  await fetchProduct();
};
</script>

<template>
  <div v-if="product">
    <button @click="onClick">Refresh</button>
    <ProductTitle :id="id" />
    <ProductDetail :id="id" />
  </div>
  <NuxtLink to="/">Back</NuxtLink>
</template>
