import type { Meta, StoryObj } from "@storybook/vue3";

import MyComponent from "~/components/MyUseFetch.vue";

const meta = {
  title: "Example/Nuxt useFetch Story",
  component: MyComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NuxtUseFetch: Story = {
  args: {},
};
