<template>
    <div>
        <v-container
            fluid
        >
            <v-layout 
                row
                wrap
            >
                <Earning
                    v-for="profileEarning in profileEarnings" 
                    :key="profileEarning.id"
                    :profileEarning="profileEarning"
                ></Earning>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import Earning from './Earning'

export default {
    components:{
        Earning
    },
    computed:{
        profileEarnings:{
            get(){
                return this.$store.getters.profileEarnings
            }
        }
    }
}
</script>

<style>
    
</style>