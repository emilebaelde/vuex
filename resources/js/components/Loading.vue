<template>
    <div class="border-bottom border-dark m-3">
        <div class="mb-3">
        <button class="btn btn-primary" @click="loading">start</button>
        <button class="btn btn-primary" @click="stopLoading">stop</button>
            <p>{{$store.state.totaal1}}</p>
            <p>{{totaal1}}</p>
        </div>
        <div class="my-5" v-if="$store.state.isLoading === true">

            <div class="d-flex flex-column align-items-center my-5">
                <i class="text-secondary fas fa-spinner fa-6x fa-pulse"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "Loading",
        data() {
            return {
                totaal1:10
            }
        },
        computed: {},
        methods: {
            ...mapMutations([' setLoadingTrue', 'setLoadingFalse']),
            loading(){
                console.log(this.$store.state.isLoading);
                this.$store.commit('setLoadingTrue');
                console.log(this.$store.state.isLoading);
            },
            stopLoading(){
                console.log('stop');
                this.$store.commit('setLoadingFalse');
            }
        },
    }
</script>
