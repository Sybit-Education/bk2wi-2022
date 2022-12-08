<template>
  <router-link :to="link()">
    <div>{{ sportart.Name }}</div>
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