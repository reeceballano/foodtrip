<template>
  <div class="home">
      <div class="container">
        <div class="grid md:grid-cols-3">
            <div class="md:col-span-1">
                <h2>Filter</h2>
            </div>
            <div class="md:col-span-2">
                <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
                    <Product
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                        @getproductid="getProductId"
                    >
                    </Product>
                </div> 
            </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Product from '@/components/Product.vue';
import { StateInterface, ProductInterface } from '@/types/product/';

export default defineComponent({
    name: 'Home',
    components: {
        Product,
    },

    setup() {
        const products: ProductInterface[] = [
            {
                id: 1,
                name: 'Product 1',
                price: 2,
                image: 'prod-1.jpg'
            },

            {
                id: 2,
                name: 'Product 2',
                price: 2,
                image: 'prod-2.jpg'
            },

            {
                id: 3,
                name: 'Product 3',
                price: 3,
                image: 'prod-1.jpg'
            },

            {
                id: 4,
                name: 'Product 4',
                price: 4,
                image: 'prod-2.jpg'
            },

            {
                id: 5,
                name: 'Product 5',
                price: 5,
                image: 'prod-1.jpg'
            },

            {
                id: 6,
                name: 'Product 6',
                price: 4,
                image: 'prod-2.jpg'
            }
        ];
        
        const state = reactive<StateInterface>({
            newProduct: '2',
            products
        });

        const getProductId = (id: number): void => {
            console.log('test' + id);
        }

        return {
            ...toRefs(state),
            getProductId
        }
    }
});
</script>
