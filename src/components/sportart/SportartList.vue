<template>
    <b-card-group deck>
      <b-overlay :show="isLoading" rounded="sm">
        <sportart-list-item v-for="sportart in sportartList" :key="sportart.id" :sportart="sportart" />
      </b-overlay>
    </b-card-group>
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