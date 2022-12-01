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
    }
  },
  actions: {
    loadEvents() {
      if (!this.eventList || this.eventList.length === 0) {
        console.log("Load events ...")
        this.eventList = eventService.getList()
      }
    }
  }
});
