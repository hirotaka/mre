<script setup lang="ts">
type Props = {
  id: string;
};
const props = defineProps<Props>();
const { data: product } = useProduct(props.id);
</script>

<template>
  <div v-if="product">
    <div>{{ product.description }}</div>
    <img :src="product.thumbnail" />
  </div>
</template>
