<template>
  <b-card-group deck>
    <event-card v-for="event in eventList" :key="event.id" :event="event" />
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
  mounted () {
    this.loadEvents()
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