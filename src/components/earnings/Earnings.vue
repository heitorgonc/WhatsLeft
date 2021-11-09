<template>
        <v-container
            fluid
            v-if="changeScreen"
        >
            <CreateBanner></CreateBanner>
            <v-layout 
                row 
                wrap
                class="ma-5"
            >
                <Earning 
                    v-for="earning in earnings" 
                    :key="earning.id"
                    :earning="earning"
                >
                </Earning>
            </v-layout>
        </v-container>
        <v-card 
            v-else
        >
            <v-container class="mt-5">
                <EarningsRegister></EarningsRegister>
            </v-container>
        </v-card>
</template>

<script>
import Earning from './Earning.vue'
import EarningsRegister from './EarningRegister.vue'
import CreateBanner from  '../templates/banners/CreateBanner.vue'

export default {
    components:{
        Earning,
        EarningsRegister,
        CreateBanner
    },
    computed:{
        earnings(){
            return this.$store.state.earnings.earnings
        },
        changeScreen(){
            return this.$store.state.changeScreen
        }
    }
}
</script>

<style>
    
</style>