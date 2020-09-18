<template>
    <section id="hero" class="section p-0">
        <div class="grid md:grid-cols-3 md:h-screen">
            <div class="col-span-1 p-10">
                <img src="../assets/images/logo.png" alt="logo" class="md:max-w-xs md:w-1/2" />
            </div>

            <div class="col-span-2 p-10 bg-gray-900 md:h-full">
                <div class="menuBtn">
                    <button class="px-2 py-4 flex justify-between text-white">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div class="hero-product md:grid grid-cols-2 md:h-full items-center gap-10 md:-ml-64">
                    <div class="cols-span-1">
                        <img :src="require(`../assets/images/products/${product.image}`)" alt="" />
                    </div>

                    <div class="col-span-1">
                        <div class="relative border-b border-gray-800 pb-5">
                            <div class="price border text-white inline-block p-2 mb-2">${{ product.price }}</div>
                            <h2 class="text-5xl text-white leading-tight font-bold">
                                {{ product.name }}
                            </h2>

                            <h4 class="text-white leading-10">{{ product.desc }}</h4>
                        </div>

                        <button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 inline-flex items-center mt-10 uppercase">
                            <span>Order Now</span>
                        </button>

                        <div class="rounded-full h-16 w-16 flex items-center justify-center bg-transparent border text-white absolute right-0 mr-10">
                            <svg width="24" height="24" fill="#fff" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        product: {
            type: Object,
            required: true
        }
    }
})
</script>

<style>

</style>