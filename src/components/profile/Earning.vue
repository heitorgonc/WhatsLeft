<template>
    <v-flex class="profile-postit">
        <v-card class="mx-auto" max-width="400px" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="mb-4">
                        <v-layout align-center justify-center class="profile-postit-title">
                            <v-avatar slot="icon" color="blue darken-3" size="30" class="mr-5">
                                <v-icon size="x-medium" icon="mdi-currency-usd" color="white">mdi-currency-usd</v-icon>
                            </v-avatar>
                            Earning : {{profileEarning.date}}
                        </v-layout>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center>
                        <div class="profile-postit-text">
                            <div v-if="profileEarning.description" class="profile-postit-text-item">
                                <span class="profile-postit-label">Description :</span> {{profileEarning.description}}
                            </div> 
                            <div v-if="profileEarning.value" class="profile-postit-text-item">
                                <span class="profile-postit-label">Value :</span> {{profileEarning.value | dollarsign}}
                            </div>
                            <div v-if="profileEarning.quantity" class="profile-postit-text-item">
                                <span class="profile-postit-label">Quantity :</span>{{profileEarning.quantity}}<small>x</small>
                            </div>
                        </div>
                    </v-layout>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
                <v-layout align-center justify-center>
                    <v-btn class="mr-5" outlined rounded text @click="deleteProfileEarning" small color="error">Exclude</v-btn>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['profileEarning', 'id'],
    methods:{
        deleteProfileEarning(){
            this.$http.delete(`/profileEarnings/${this.id}.json`).then(
                () => {
                    this.restoreFunds()
                    this.saveRemaining()
                    this.saveFund()
                    this.reloadPage()
                }
            )
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        },
        restoreFunds(){
            const funds = this.$store.getters.funds
            const value = this.profileEarning.value
            const quantity = this.profileEarning.quantity
            const restoredFunds = funds - (value * quantity)
            this.$store.commit('setFunds', restoredFunds)
        },
        saveRemaining(){
            const savedRemaining = this.$store.getters.funds
            this.$http.put('remaining.json', savedRemaining)
        },
        saveFund(){
            const savedFund = this.$store.getters.funds
            this.$http.post('savedFunds.json', savedFund)
        }
    }
}
</script>