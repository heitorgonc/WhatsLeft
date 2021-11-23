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
            <v-layout 
                justify-center 
                align-center 
                column
            >
                <v-banner 
                    class=" text-overline mt-3"
                    single-line
                >
                    <v-avatar
                        slot="icon"
                        color="light-blue darken-3"
                        size="22"
                    >
                        <v-icon 
                            size="medium"
                            icon="mdi-currency-usd"
                            color="white"
                        >mdi-currency-usd
                        </v-icon>
                    </v-avatar>
                    
                    <span v-if="profileEarning.date">{{profileEarning.date}}</span>
                </v-banner>
                <v-divider ></v-divider>
                <span
                    v-if="profileEarning.description"
                    class="profileEarningTitle"
                >{{profileEarning.description}}
                </span>
                <span
                    v-if="profileEarning.value"
                >
                    <span class="profileEarningLabel">Value:</span> 
                    {{profileEarning.value | dollarsign}}
                </span>
                <span
                    v-if="profileEarning.quantity"
                >
                    <span class="profileEarningLabel">Quantity:</span>
                    {{profileEarning.quantity}}
                </span>
                <span
                    v-if="profileEarning.value"
                >
                    <span class="profileEarningLabel">Total:</span>
                    {{profileEarning.quantity * profileEarning.value}}
                </span>
            </v-layout>
            <v-divider class="pb-2"></v-divider>
            <v-card-actions>
                <v-btn
                    class="ml-5"
                    outlined
                    rounded
                    text
                >
                Edit
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    class="mr-5"
                    outlined
                    rounded
                    text
                    @click="deleteProfileEarning"
                >
                Exclude
                </v-btn>
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

<style>
    
</style>