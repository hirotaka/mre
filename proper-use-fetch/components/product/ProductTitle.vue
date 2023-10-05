<script setup lang="ts">
type Props = {
  id: string;
};

const props = defineProps<Props>();
const { product } = await useProduct(props.id);
</script>

<template>
  <h1 v-if="product">{{ product?.title }}</h1>
</template>
