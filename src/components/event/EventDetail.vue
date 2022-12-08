<template>
  <div>
    Event Details und Beschreibung für:
    {{ event?.Titel }}
    <b-card overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Fußball"
    sub-title="Uhrzeit?">
    <b-card-text>
      Infos über das Spiel
    </b-card-text>
  </b-card>
</br>
  <b-card overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Handball"
    sub-title="Uhrzeit?">
    <b-card-text>
      Infos über das Spiel
    </b-card-text>
  </b-card>
</br>
  <b-card overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Turnen"
    sub-title="Uhrzeit?">
    <b-card-text>
      Infos über das Spiel
    </b-card-text>
  </b-card>
</br>
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