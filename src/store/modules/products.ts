interface Product {
    id: number;
    name: string;
    desc: string;
    image: string;
}

interface State {
    product: Product;
    products: Product[];
}

// STATE
const state: State = {
    product: { id: 3, name: 'Product 3', desc: 'Product 3 desc', image:' chicken-wings.png' },
    products: [
        { id: 1, name: 'Product 1', desc: 'Product 1 desc', image:'chicken-wings.png' },
        { id: 2, name: 'Product 2', desc: 'Product 2 desc', image:'chicken-wings.png' },
    ]
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_PRODUCTS(state: State, products: Product[]) {
        state.products = products;
    }
}

// ACTIONS
const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}