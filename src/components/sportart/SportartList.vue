<template>
  <div class="sportart-list"></div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useSportartStore } from '../../stores/sportart'

export default {
    name: 'SportartList',
  computed: {
    ...mapState(useSportartStore, ['eventList'])
  },
  methods: {
    ...mapActions(useSportartStore, ['loadEvents'])
  }
}
</script>

<style>
</style>