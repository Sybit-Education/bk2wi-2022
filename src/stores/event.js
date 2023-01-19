import { defineStore } from "pinia";
import eventService from '../services/event.service'

export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    eventList: [],
  }),
  getters: {
    getEventById: (state) => {
      return (eventId) =>
        state.eventList.find((event) => event.id === eventId);
    },
    getEventsBySportartId: (state) => {
      return (sportartId) =>
        state.eventList.filter((event) => event.Sportart[0] === sportartId );
    },
  },
  actions: {
    loadEvents() {
      if (!this.eventList || this.eventList.length === 0) {
        this.eventList = eventService.getList()
      }
    }
  }
});
