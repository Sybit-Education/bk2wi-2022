<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-card-group deck>
      <sportart-list-item
        v-for="sportart in sportartList"
        :key="sportart.id"
        :sportart="sportart"
      />
    </b-card-group>
  </b-overlay>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useSportartStore } from '../../stores/sportart'
import SportartListItem from './SportartListItem.vue'


export default {
    name: 'SportartList',
    components: { SportartListItem },
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      this.isLoading = true
      this.loadSportarts()
      this.isLoading = false
    },
    computed: {
        ...mapState(useSportartStore, ['sportartList'])
    },
    methods: {
      ...mapActions(useSportartStore, ['loadSportarts'])
    }
}
</script>

<style>
</style>