<template>
    <v-layout column>
        <v-dialog
            v-model="dialog"
            persistent
        >
            <v-card
                dark
            >
                <v-layout
                    column
                    align-center
                    justify-center
                >
                    <v-card-title>
                        <span class="word1 pr-5">Opening Balance:</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field
                                type="number"
                                v-model="funds"
                                :counter="10"
                                :rules="fundsRules"
                                required
                                dark
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="success"
                            text
                            :disabled="
                                noFunds ||
                                negativeFunds ||
                                fundsMustLess
                            "
                            @click="saveFunds"
                        >Save
                        </v-btn>
                    </v-card-actions>
                </v-layout>
            </v-card>
            <template v-slot:activator="{ on, attrs }">
                <v-container>
                    <v-btn
                        block
                        dark
                        v-bind="attrs"
                        v-on="on"
                        v-if="noFunds"
                    >
                        Opening Balance
                    </v-btn>
                </v-container>
                <v-container
                    fluid
                    class="pa-8"
                >
                    <v-layout 
                        align-center
                        justify-center
                        class="mb-10"
                    >
                        <span class="outdoor1 pr-5">Remaining :</span>
                        <span class="word1">{{funds | dollarsign}}</span>
                    </v-layout>
                    <ProfileSparkline></ProfileSparkline>
                    <v-container
                    class="pa-5"
                >
                    <v-layout 
                        row
                        wrap
                    >
                        <Earning
                            v-for="(profileEarning, id) in profileEarnings" 
                            :key="id"
                            :profileEarning="profileEarning"
                            :id="id"
                        ></Earning>
                    </v-layout>
                    <v-layout 
                        row
                        wrap
                    >
                        <Expense
                            v-for="(profileExpense, id) in profileExpenses" 
                            :key="id"
                            :profileExpense="profileExpense"
                            :id="id"
                        ></Expense>
                    </v-layout>
                </v-container>
                </v-container>
                <v-divider></v-divider>
                
            </template>
        </v-dialog>
    </v-layout>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'
import ProfileSparkline from '../templates/sparklines/ProfileSparkline.vue'

export default {
    data(){
        return{
            dialog: false,
            value: this.funds,
            fundsRules:[
                v => !!v || 'Value is required',
                v => v.length <= 10 || 'Value must be less than 10 characters',
                v => v > 0 || 'The value can be neither zero nor negative',
            ]
        }
    },
    components:{
        Earning,
        Expense,
        ProfileSparkline
    },
    methods:{
        loadSavedFunds(){
            this.$store.dispatch('loadSavedFunds')
        },
        loadProfileEarnings(){
            this.$store.dispatch('loadProfileEarnings')
        },
        loadProfileExpeses(){
            this.$store.dispatch('loadProfileExpenses')
        },
        saveFunds(){
            const funds = this.$store.getters.funds
            this.$http.post('savedFunds.json', funds).then(
                () => {
                    this.saveRemaining()
                    this.reloadPage()
                }
            )
        },
        saveRemaining(){
            const remaining = this.$store.getters.funds
            this.$http.put('remaining.json', remaining)
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    computed:{
        profileEarnings:{
            get(){
                return this.$store.getters.profileEarnings
            }
        },
        profileExpenses:{
            get(){
                return this.$store.getters.profileExpenses
            }
        },
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
        negativeFunds(){
            return this.funds <= 0
        },
        fundsMustLess(){
            return this.funds > 9999999999
        },
    },
    created() {
        this.loadSavedFunds()
        this.loadProfileEarnings()
        this.loadProfileExpeses()
    }
}
</script>

<style>
    
</style>