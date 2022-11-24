<template>
    <div>
        Event Details und Beschreibung für {{ eventId }}
    </div>
</template>
<script>

export default {
    props: {
        eventId: {
            type: String,
            required: true
        }
    },
}
</script>

<style>

</style>