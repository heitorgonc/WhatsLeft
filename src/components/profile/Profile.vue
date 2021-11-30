<template>
    <v-layout column>
        <v-dialog
            v-model="dialog"
            persistent
        >
            <OpeningBalance></OpeningBalance>
            <template v-slot:activator="{ on, attrs }">
                <v-sheet
                    class="profileScreen"
                    color="rgba(0, 0, 0, 0.47)"
                    v-if="noFunds"
                >
                    <v-layout
                        align-center
                        justify-center
                        class="openingLayout"
                    >
                        <v-btn
                            class="mt-5 mb-5"
                            text
                            color="success"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >Opening Balance
                        </v-btn>
                    </v-layout>
                </v-sheet>
                <v-sheet
                    color="rgba(0, 0, 0, 0.47)"
                    v-else
                >
                    <v-layout class="pa-8" column>
                        <ProfileList></ProfileList>
                    </v-layout>
                    <ProfileSparkline></ProfileSparkline>
                </v-sheet>
            </template>
        </v-dialog>
    </v-layout>
</template>

<script>
import ProfileList from './ProfileList'
import OpeningBalance from './OpeningBalance'
import ProfileSparkline from '../templates/sparklines/ProfileSparkline.vue'

export default {
    data(){
        return{
            dialog: false,
        }
    },
    components:{
        ProfileList,
        OpeningBalance,
        ProfileSparkline
    },
    computed:{
        funds:{
            get(){
                return this.$store.getters.funds
            },
            set(funds){
                this.$store.commit('setFunds', funds)
            }
        },
        noFunds(){
            return this.funds == 0
        },
    },
}
</script>

<style>
    
</style>