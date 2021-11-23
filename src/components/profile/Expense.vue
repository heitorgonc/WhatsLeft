<template>
    <v-flex 
        class="pr-5 pt-5" 
        xs12 
        md6 
        lg4
    >
        <v-card 
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        <v-layout
                            align-center
                            justify-center
                        >
                            <v-avatar
                                slot="icon"
                                color="red darken-3"
                                size="22"
                                class="mr-5"
                            >
                                <v-icon 
                                    size="medium"
                                    icon="mdi-currency-usd"
                                    color="white"
                                >mdi-currency-usd
                                </v-icon>
                            </v-avatar>
                            Expense: {{profileExpense.date}}
                        </v-layout>
                        
                    </div>
                    <v-layout 
                        align-center
                        justify-center
                    >
                        <div
                            v-if="profileExpense.description"
                            class="mr-3"
                        >
                            {{profileExpense.description}}
                        </div> 
                        <div
                            v-if="profileExpense.price"
                            class="mr-3"
                        >
                            {{profileExpense.price | dollarsign}}
                        </div>
                        <div 
                            v-if="profileExpense.quantity"
                        >
                            {{profileExpense.quantity}}<small>x</small>
                        </div>
                    </v-layout>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
                <v-layout
                    align-center
                    justify-center
                >
                    <v-btn
                        class="ml-5"
                        outlined
                        rounded
                        text
                        small
                    >Edit
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="mr-5"
                        outlined
                        rounded
                        text
                        @click="deleteProfileExpense"
                        small
                    >Exclude
                    </v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>

export default {
    props: ['profileExpense', 'id'],
    methods:{
        deleteProfileExpense(){
            this.$http.delete(`/profileExpenses/${this.id}.json`).then(
                () =>{
                    this.restoreFunds()
                    this.saveRemaining()
                    this.saveFund()
                    this.reloadPage()
                }
            )
        },
        restoreFunds(){
            const funds = this.$store.getters.funds
            const price = this.profileExpense.price
            const quantity = this.profileExpense.quantity
            const restoredFund = funds + (price * quantity)
            this.$store.commit('setFunds', restoredFund)
        },
        saveFund(){
            const savedFund = this.$store.getters.funds
            this.$http.post('savedFunds.json', savedFund)
        },
        saveRemaining(){
            const savedRemaining = this.$store.getters.funds
            this.$http.put('remaining.json', savedRemaining)
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    }
}
</script>
<style>
    
</style>