<template>
    <div class=" m-3">
        <input v-model="getal1" @change="number1" type="number">
        <input v-model="getal2" @change="number2" type="number">
        <p class="text-right">{{formated_date}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
    import {formated_date} from "./mixins/formated_date";
    export default {
        name: "Loading",
        mixins: [formated_date],
        data() {
            return {
                getal1:0,
                getal2:0,
            }
        },
        computed: {
            ...mapGetters(['optellen'])
        },

        methods: {
            ...mapMutations(['setGetal1', 'setGetal2']),
            number1(){
                this.$store.commit('setGetal1', this.getal1)
            },
            number2(){
                this.$store.commit('setGetal2', this.getal2)
            }
        },
    }
</script>
