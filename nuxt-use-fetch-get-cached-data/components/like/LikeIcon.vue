<script setup lang="ts">
const { toggle, refresh, isLiked } = await useLike();

const onLike = async () => {
  await toggle();
  await refresh();
};
</script>

<template>
  <UButton @click="onLike" class="text-2xl" color="gray">
    <UIcon
      :class="{ 'text-pink-700': isLiked }"
      name="i-heroicons-heart-solid"
    />
  </UButton>
</template>
