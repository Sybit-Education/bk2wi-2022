<template>
  <b-card class="my-3">
    <h3>{{ event.Titel }}</h3>
    <p>Datum: {{ event.Datum }}</p>
  </b-card>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
