<template>
    <div class="home">
        <app-hero :product="featuredProduct"></app-hero>

        <section class="section">
            <div class="container">
                <div class="grid md:grid-cols-3">
                    <div class="md:col-span-1">
                        <h2>Filter By Price</h2>
                        <select name="" id="" v-model="priceSetting">
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="md:col-span-2">
                        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
                            <Product
                                v-for="product in filteredProducts"
                                :key="product.id"
                                :product="product"
                                @getproductid="getProductId"
                            >
                            </Product>
                        </div> 
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, computed } from 'vue';
import Product from '@/components/Product.vue';
import Hero from '@/components/Hero.vue';
import { StateInterface, ProductInterface } from '@/types/product/';

export default defineComponent({
    name: 'Home',
    components: {
        Product,
        'app-hero': Hero
    },

    setup() {
        const products: ProductInterface[] = [
            {
                id: 1,
                name: 'Chicken Wings',
                price: 12.69,
                image: 'prod-1.jpg',
                desc: '6 Pcs Wings + Daily Dose Cold Brew Regular Latte'
            },

            {
                id: 2,
                name: 'Product 2',
                price: 2,
                image: 'prod-2.jpg',
                desc: '6 Pcs Wings + Daily Dose Cold Brew Regular Latte'

            },

            {
                id: 3,
                name: 'Product 3',
                price: 3,
                image: 'prod-1.jpg',
                desc: '6 Pcs Wings + Daily Dose Cold Brew Regular Latte'
            },

            {
                id: 4,
                name: 'Product 4',
                price: 4,
                image: 'prod-2.jpg',
                desc: '6 Pcs Wings + Daily Dose Cold Brew Regular Latte'
            }
        ];
        
        const state = reactive<StateInterface>({
            newProduct: '2',
            products
        })

        const getProductId = (id: number): void => {
            console.log('test' + id);
        }

        const priceSetting = ref<string>('low');

        const filteredProducts = computed( () => {
            if(priceSetting.value == 'low') {
                const sortedProd: ProductInterface[] = state.products.sort((a, b) => a.price - b.price);
                return sortedProd;
            } else {
                const sortedProd: ProductInterface[] = state.products.sort((a, b) => b.price - a.price);
                return sortedProd;
            }
        })

        const featuredProduct = computed( () => {
                return state.products.find(item => item.id == 1);
        })

        const filterFromBranch = () => {
            return 'filtered from master';
        }

        return {
            ...toRefs(state),
            getProductId,
            priceSetting,
            filteredProducts,
            filterFromBranch,
            featuredProduct,
        }
    }
});
</script>
