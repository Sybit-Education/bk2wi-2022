<template>
  <b-card-group deck>
    <b-overlay :show="isLoading" rounded="sm">
      <event-card v-for="event in eventList" :key="event.id" :event="event" />
    </b-overlay>
  </b-card-group>
</template>

<script>
import EventCard from './EventCard.vue'
import { mapState, mapActions } from 'pinia'
import { useEventStore } from '../../stores/event'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    sportart: {
      type: [String, Array],
      default() {
        return []
      }
    },
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = true
     const store = useEventStore()
    store.loadEvents()
    this.eventList = store.getEventsBysportart(this.sportart)
    this.isLoading = false
  },

  methods: {
    ...mapActions(useEventStore, ['loadEvents'])
  }
}

</script>

<style>
</style>