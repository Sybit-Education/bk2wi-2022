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
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = true
    this.loadEvents()
    this.isLoading = false
  },
  computed: {
    ...mapState(useEventStore, ['eventList'])
  },
  methods: {
    ...mapActions(useEventStore, ['loadEvents'])
  }
}
</script>

<style>
</style>