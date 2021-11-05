<template>
    <div>
        <v-container>
            <EarningsRegister></EarningsRegister>
        </v-container>
        <v-container>
            <v-layout row wrap>
                <Earning v-for="earning in earnings" :key="earning.id"
                    :earnings="earnings">
                </Earning>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Earning from './Earning.vue'
import EarningsRegister from './EarningRegister.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
        Earning,
        EarningsRegister
    },
    methods:{
        ...mapGetters('earnings', ['getEarnings'])
    },
    computed:{
        earnings:{
            get(){
                return this.getEarnings()
            }
        }
    }
}
</script>

<style>
    
</style>