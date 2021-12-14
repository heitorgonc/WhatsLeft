<template>
    <v-layout class="pa-8" column align-center justify-center>
        <template>
            <v-carousel v-model="modelearnings" rounded hide-delimiter-background :show-arrows="false">
                <v-carousel-item v-for="(earning, id) in earnings" :key="id">
                    <v-row class="fill-height" align="center" justify="center">
                        <Earning :earning="earning" :id="id"></Earning>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </template>
    </v-layout>
</template>

<script>
import Earning from './Earning.vue'

export default {
    data(){
        return{
            modelearnings: 0,
            array: this.$store.getters.earnings
        }
    },
    components:{
        Earning
    },
    methods:{
        loadEarnings(){
            this.$store.dispatch('loadEarnings')
        }
    },
    computed:{
        earnings(){
            return this.$store.getters.earnings
        }
    },
    created() {
        this.loadEarnings()
    },
}
</script>