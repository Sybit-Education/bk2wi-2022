<template>
  <div class="event-list">
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>  
</template>

<script>
import EventCard from './EventCard.vue'
import eventService from '../../services/event.service'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      events: []
    }
  },  
  mounted () {
    this.loadEvents()
  },
  methods: {
    async loadEvents () {
      this.events = await eventService.getList()
    },    
  }  
}
</script>

<style>

</style>