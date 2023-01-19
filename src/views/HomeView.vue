<template>
  <b-container>
    <h1>Willkommen bei RegioSports</h1>

    <sportart-list />
  </b-container>
</template>
<script>
import SportartList from "@/components/sportart/SportartList.vue"
export default {
  name: "HomeView",
  components: {SportartList }
}
</script>

