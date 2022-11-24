<template>
  <b-container>
    <h1>Event Details: {{ eventId }}</h1>
    <event-detail :event-id="eventId"></event-detail>
  </b-container>
</template>

<script>
import EventDetail from '@/components/event/EventDetail.vue'

export default {
    props: {
        eventId: {
            type: String,
            required: true
        }
    },
    components: { EventDetail }

}
</script>

<style>

</style>