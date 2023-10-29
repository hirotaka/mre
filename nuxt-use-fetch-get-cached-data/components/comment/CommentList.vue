<script setup lang="ts">
const { data } = await useCommentList();
</script>

<template>
  <div>
    <h2 class="text-3xl">Comments</h2>
    <template v-if="data?.comments && data.comments.length">
      <ul class="p-2">
        <li v-for="comment in data.comments">
          {{ comment.message }}
        </li>
      </ul>
    </template>
    <template v-else>
      <p class="p-2">No comments</p>
    </template>
    <CommentForm />
  </div>
</template>
