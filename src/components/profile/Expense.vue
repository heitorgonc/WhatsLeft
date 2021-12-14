<template>
    <v-flex class="profile-postit">
        <v-card class="mx-auto" max-width="400px" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="mb-4">
                        <v-layout align-center justify-center class="profile-postit-title">
                            <v-avatar slot="icon" color="red darken-3" size="30" class="mr-5">
                                <v-icon size="x-medium" icon="mdi-currency-usd" color="white">mdi-currency-usd</v-icon>
                            </v-avatar>
                            Expense : {{profileExpense.date}}
                        </v-layout>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center>
                        <div class="profile-postit-text">
                            <div v-if="profileExpense.description" class="profile-postit-text-item">
                                <span class="profile-postit-label">Description :</span> {{profileExpense.description}}
                            </div> 
                            <div v-if="profileExpense.price" class="profile-postit-text-item">
                                <span class="profile-postit-label">Price :</span> {{profileExpense.price | dollarsign}}
                            </div>
                            <div v-if="profileExpense.quantity" class="profile-postit-text-item">
                                <span class="profile-postit-label">Quantity :</span> {{profileExpense.quantity}}<small>x</small>
                            </div>
                        </div>
                    </v-layout>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
                <v-layout align-center justify-center>
                    <v-btn class="mr-5" outlined rounded text @click="deleteProfileExpense" small color="error">Exclude</v-btn>
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