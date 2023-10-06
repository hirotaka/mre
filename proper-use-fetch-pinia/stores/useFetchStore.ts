import { defineStore } from "pinia";

interface State {
  fetched: { key: string; data: any }[];
}

export const useFetchStore = defineStore("user", {
  state: (): State => {
    return {
      fetched: [],
    };
  },
  getters: {
    get: (state): any => {
      return (key: string) => state.fetched.find((item) => item.key === key);
    },
  },
  actions: {
    set(key: string, data: any) {
      this.fetched.push({ key, data });
    },
  },
});
