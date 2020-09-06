<template>
    <div id="app">
        <div id="nav" class="flex p-5 border-b-2">
            <div class="logo w-1/4">
                <img class="w-1/2" src="./assets/images/logo.png" />
            </div>

            <div class="right-nav w-3/4 flex justify-end items-center">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <router-link class="m-3" to="/">Home</router-link>
                        <router-link class="m-3" to="/about">About</router-link>
                        <router-link class="m-3" to="/about">Shop</router-link>
                        <router-link class="m-3" to="/about">Contact</router-link>
                    </div>

                    <div class="col-span-1">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
                            Login
                        </button>

                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">


</style>
