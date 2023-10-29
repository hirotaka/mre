<script setup lang="ts">
const { data } = await useProduct();

const router = useRouter();

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div v-if="data?.product" class="max-w-lg mt-8 px-6 mx-auto">
    <h1 class="text-4xl">
      {{ data.product.title }}
      <LikeIcon />
    </h1>
    <UButton @click="goBack" color="gray" class="mt-6">Back</UButton>
    <ProductDetail class="mt-6" />
    <LikeButton class="mt-6" />
    <CommentList class="mt-6" />
  </div>
</template>
