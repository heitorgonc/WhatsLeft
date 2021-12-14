<template>
    <v-layout column>
        <v-dialog
            v-model="dialog"
            persistent
        >
            <OpeningBalance></OpeningBalance>
            <template v-slot:activator="{ on, attrs }">
                <v-sheet 
                    color="rgba(0, 0, 0, 0.47)"
                    v-if="noFunds"
                >
                    <v-layout
                        align-center
                        justify-center
                        class="profileopening-background"
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
                    <ProfileHome></ProfileHome>
                </v-sheet>
            </template>
        </v-dialog>
    </v-layout>
</template>

<script>
import OpeningBalance from './OpeningBalance'
import ProfileHome from './ProfileHome'

export default {
    data(){
        return{
            dialog: false,
        }
    },
    components:{
        OpeningBalance,
        ProfileHome
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
            return this.$store.getters.funds == 0
        },
    },
}
</script>