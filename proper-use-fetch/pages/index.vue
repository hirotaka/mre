<script setup lang="ts">
import { useProducts } from "~/composables/useProducts";

const { products } = await useProducts();
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
