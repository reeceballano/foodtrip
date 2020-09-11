<template>
    <div class="product">
        <section class="section">
            {{ params }}
        </section>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const params = useRoute();

        return {
            params
        }
    }
}
</script>

<style>

</style>