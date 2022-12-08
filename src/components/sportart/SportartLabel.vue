<template>
  <b-badge>{{ item?.Name }}</b-badge>
</template>

<script>
import { useSportartStore } from '@/stores/sportart'

export default {
  name: 'SportartLabel',
  props: {
    sportart: {
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
          return store.getSportartById(this.sportart[0])
        } else {
          return store.getSportartById(this.sportart)
        }
      }
  }
}
</script>

<style>
</style>