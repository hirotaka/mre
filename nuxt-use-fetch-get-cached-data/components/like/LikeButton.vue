<script setup lang="ts">
// TODO: improve this line
await new Promise((resolve) => setTimeout(resolve, 10));

const { toggle, refresh, isLiked } = await useLike();

const color = computed(() => (isLiked.value ? "gray" : "primary"));

const onLike = async () => {
  await toggle();
  await refresh();
};
</script>

<template>
  <UButton :color="color" block @click="onLike">
    <template v-if="isLiked">Delete product from Liked</template>
    <template v-else>Add product to Liked</template>
  </UButton>
</template>
