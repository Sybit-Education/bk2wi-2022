<template>
  <b-badge>{{ item?.Name }}</b-badge>
</template>

<script>
import { useSportartStore } from '@/stores/sportart'

export default {
  name: 'SportartLabel',
  props: {
    sportartId: {
      type: [String, Array],
      default() {
        return []
      }
    },
  },
  computed: {
      item() {
        const store = useSportartStore()
        if (Array.isArray(this.sportart)) {
          return store.getSportartById(this.sportartId[0])
        } else {
          return store.getSportartById(this.sportartId)
        }
      }
  }
}
</script>

<style>
</style>