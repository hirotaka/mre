<script setup lang="ts">
const route = useRoute();

const state = reactive({
  message: undefined,
});

const { refresh } = await useCommentList();

const onSubmit = async (event: any) => {
  await $fetch(`/api/products/${route.params["id"]}/comments`, {
    method: "POST",
    body: { ...event.data },
  });
  await refresh();
  state.message = undefined;
};
</script>

<template>
  <div>
    <UForm :state="state" @submit="onSubmit">
      <div class="flex">
        <UInput type="text" v-model="state.message" required class="grow" />
        <UButton type="submit" class="ml-2">Submit</UButton>
      </div>
    </UForm>
  </div>
</template>
