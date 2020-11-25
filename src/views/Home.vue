<template>
    <div class="home">
        <app-hero :product="featuredProduct"></app-hero>

        <section class="section py-0">
            <div class="grid md:grid-cols-3">
                <app-service-item 
                    v-for="service in services" 
                    :key="service.id"
                    :service="service">
                </app-service-item>
            </div>
        </section>

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
import ServiceItem from '@/components/ServiceItem.vue';
import { StateInterface, ProductInterface } from '@/types/product/';
import { ServiceInterface } from '@/types/service';

export default defineComponent({
    name: 'Home',
    components: {
        Product,
        'app-hero': Hero,
        'app-service-item': ServiceItem
    },

    setup() {
        const products: ProductInterface[] = [
            {
                id: 1,
                name: 'Chicken Wings',
                price: 12.69,
                image: 'chicken-wings.png',
                desc: '6 Pcs Wings + Daily Dose Cold Brew Regular Latte'
            },

            {
                id: 2,
                name: 'Sushi All Day',
                price: 10.00,
                image: 'sushi.png',
                desc: '5 Pcs Sushi + Daily Dose Cold Brew Regular Latte'

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
            console.log('id: ' + id);
        }

        const priceSetting = ref<string>('low');

        const services = reactive<ServiceInterface[]>([
            {
                id: 1,
                name: 'Select',
                bg: 'bg-gray-100',
                icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>',
                color: 'text-gray-800'
            },

            {
                id: 2,
                name: 'Pay',
                bg: ' bg-gray-800',
                icon: '<svg width="24" fill="#fff" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>',
                color: 'text-white'
            },

            {
                id: 3,
                name: 'Deliver',
                bg: 'bg-gray-800',
                icon: '<svg width="24" fill="#fff" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>',
                color: 'text-white'
            }
        ]);

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
            return state.products.find(item => item.id == 1 );
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
            services
        }
    }
});
</script>
