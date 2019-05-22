<template>
    <div class="border-bottom border-dark  m-3">
        <p>{{optellen}}</p>
        <p class="text-right">{{formated_date}}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import {formated_date} from "./mixins/formated_date";
    export default {
        name: "Loading",
        mixins: [formated_date],
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['optellen']),


        },
        methods: {

        },
    }
</script>
