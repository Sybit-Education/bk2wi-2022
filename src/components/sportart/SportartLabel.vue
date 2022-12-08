<template>
  <b-badge>{{ item?.Name }}</b-badge>
</template>

<script>
import { useSportartStore } from '@/stores/sportart'

export default {
  name: 'SportartLabel',
  props: {
    sportart: {
      type: Array,
      default() {
        return []
      }
    },
  },
  computed: {
      item() {
          const store = useSportartStore()
          return store.getSportartById(this.sportart[0])
      }
  }
}
</script>

<style>
</style>