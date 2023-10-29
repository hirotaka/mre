<script setup lang="ts">
const { data, pagination } = await useProductList();
const { hasNext, hasPrev, next, prev } = pagination;
</script>

<template>
  <div>
    <UButton v-if="hasPrev" @click="prev" color="gray">&lt; Prev</UButton>
    <UButton
      v-if="hasNext"
      color="gray"
      @click="next"
      :class="{ 'ml-2': hasPrev }"
    >
      Next &gt;
    </UButton>
    <ul v-if="data?.products" class="mt-6">
      <li v-for="product in data.products">
        <ULink
          :to="`/products/${product.id}`"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >{{ product.title }}</ULink
        >
      </li>
    </ul>
  </div>
</template>
