<template>
    <v-layout      
            row 
            wrap
            class="ma-5"
        >
            <Earning 
                v-for="(earning, id) in earnings" 
                :key="id"
                :earning="earning"
                :id="id"
            >
            </Earning>
        </v-layout>
</template>

<script>
import Earning from './Earning.vue'

export default {
    components:{
        Earning
    },
    computed:{
        earnings(){
            return this.$store.getters.earnings
        }
    }
}
</script>

<style>
    
</style>