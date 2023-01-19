<template>
  <router-link :to="link()">
    <b-card>{{ sportart.Name }}</b-card>
  </router-link>
</template>

<script>
export default {
  name: 'Sportartitem',
  props: {
    sportart: {
      type: Object,
      required: true,
    },
  },
  methods: {
    link() {
      return "/sport/" + this.sportart.id;
    }
  }
}
</script>

<style>
</style>