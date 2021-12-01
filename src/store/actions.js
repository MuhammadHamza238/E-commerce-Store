import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export const getProducts = ({ commit }) => {
    Vue.axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
        })
}

export const getProduct = ({ commit }, productId) => {
    Vue.axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}

export const getJewelerys = ({commit}) => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(response => {
        commit('SET_JEWELERY', response.data);
        console.log(response.data)
    }) 
}