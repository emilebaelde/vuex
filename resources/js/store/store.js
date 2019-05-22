import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

/**
 * The Vuex Store contains all data variables in the state. Because of this the variables are accessible in th whole application.
 * The state shouldn't be changed in the components directly but should be changed through mutations. (We didn't do this)
 * The Vuex getters are comparable with the Vue computed. They are ment to format the state without changing it.
 * Mutations are methods to change the state.
 * Actions are similar to mutations, the differences being that: (Not used in this application yet)
 * - Instead of mutating the state, actions commit mutations.
 * - Actions can contain arbitrary asynchronous operations.
 * **/

const state = {
    isLoading : false,
    getal1:0,
    getal2:0,
    totaal1:0,

};
const getters = {
    optellen () {
        return state.totaal1 = Number(state.getal1) + Number(state.getal2)
    }
};
const mutations = {
    setLoadingTrue(state) {
        state.isLoading = true;
    },
    setLoadingFalse(state) {
        state.isLoading = false;
    },
    setGetal1(state, n){
        state.getal1 = n
    },
    setGetal2(state, m){
        state.getal2 = m
    }
};
const actions = {};
export default new Vuex.Store({
    state,
    mutations,
    getters,
})
