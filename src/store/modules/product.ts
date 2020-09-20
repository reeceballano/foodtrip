interface Product {
    id: number;
    name: string;
    desc: string;
    image: string;
}

interface State {
    products: Product;
}

// STATE
const state = {
    products: []
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_PRODUCTS(state: State, products: Product) {
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