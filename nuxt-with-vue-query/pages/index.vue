<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

const fetcher = async () =>
  await fetch("https://dummyjson.com/products").then((response) =>
    response.json(),
  );
const {
  data: { products },
} = useQuery({
  queryKey: ["products"],
  queryFn: fetcher,
});
</script>

<template>
  <div>
    <h1>Products</h1>
    <ul v-if="products">
      <li v-for="product in products">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
