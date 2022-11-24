
<template>
  <div>
    Event Details und Beschreibung für:
    {{ event?.Titel }}
  </div>
</template>
<script>

export default {
  props: {
    event: {
      type: Object,
      required: false,
      default: null
    }
  },

}
</script>

<style>
</style>