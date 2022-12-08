import { defineStore } from "pinia";
import sportartService from '../services/sportart.service'

export const useSportartStore = defineStore({
  id: "sportart",
  state: () => ({
    sportartList: [],
  }),
  getters: {
    getSportartById: (state) => {
      return (id) =>
        state.sportartList.find((item) => item.id === id);
    }
  },
  actions: {
    loadSportarts() {
      if (!this.sportartList || this.sportartList.length === 0) {
        this.sportartList = sportartService.getList()
      }
    }
  }
});
