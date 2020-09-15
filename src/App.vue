<template>
    <div id="app">
        <section id="hero" class="section  p-0">
            <div class="grid grid-cols-3 h-screen">
                <div class="col-span-1 p-10">
                    <img src="./assets/images/logo.png" alt="logo" class="md:max-w-xs md:w-1/2" />
                </div>

                <div class="col-span-2 p-10 bg-gray-900 h-full">
                    <div class="menuBtn">
                        <button class="px-2 py-4 flex justify-between text-white">
                            <svg class="w-6 h-6 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="hero-product grid grid-cols-2 h-full items-center gap-10 md:-ml-64">
                        <div class="cols-span-1">
                            <img src="./assets/images/slides/chicken-wings.png" alt="" />
                        </div>

                        <div class="col-span-1">
                            <div class="relative border-b-2 pb-5">
                                <div class="price border text-white inline-block p-2 mb-2">$12.69</div>
                                <h2 class="text-5xl text-white leading-tight font-bold">
                                    Chicken Wings
                                </h2>

                                <h4 class="text-white leading-10">6 Pcs Wings + Daily Dose Cold Brew Regular Latte</h4>
                            </div>

                            <button class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 inline-flex items-center mt-10 uppercase">
                                <span>Order Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <router-view/>
    </div>
</template>

<style lang="scss">

</style>
