import { defineStore } from "pinia";
import sportartService from '../services/sportart.service'

export const useSportartStore = defineStore({
  id: "sportart",
  state: () => ({
    list: [],
  }),
  getters: {
    getSportartById: (state) => {
      return (id) =>
        state.list.find((item) => item.id === id);
    }
  },
  actions: {
    loadSportarts() {
      if (!this.list || this.list.length === 0) {
        this.list = sportartService.getList()
      }
    }
  }
});
