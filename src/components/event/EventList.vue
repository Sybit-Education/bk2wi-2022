<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-card-group  v-if="hasEvents" deck>
      <event-card v-for="event in eventList" :key="event.id" :event="event" />
    </b-card-group>
    <div v-else>
      Leider keine Termine gefunden.
    </div>     
  </b-overlay>
</template>

<script>
import EventCard from './EventCard.vue'
import { mapActions } from 'pinia'
import { useEventStore } from '../../stores/event'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    sportartId: {
      type: [String, Array],
      default() {
        return []
      }
    },
  },
  data() {
    return {
      eventList: [],
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = true
    const store = useEventStore()
    store.loadEvents()
    this.eventList = store.getEventsBySportartId(this.sportartId)
    console.log(this.eventList)
    this.isLoading = false
  },
  computed: {
    hasEvents () {
      return this.eventList.length > 0
    }
  },
  methods: {
    ...mapActions(useEventStore, ['loadEvents'])
  }
}

</script>

<style>
</style>