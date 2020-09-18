<template>
    <div class="md:col-span-1 service-item" :class="service.bg">
        <span v-html="service.icon"></span>
        <h2 :class="service.color">{{ service.name }}</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        service: {
            type: Object,
            required: true
        }
    }
})
</script>

<style>

</style>