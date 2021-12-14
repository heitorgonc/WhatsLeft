<template>
    <v-flex xs12 md6 lg4 class="ma-2">
        <v-card rounded class="blue darken-3 white--text">
            <v-card-title>
                <v-layout align-center justify-center>
                    <span class="postit-title-description">{{earning.description}}</span>
                    <span class="postit-title-value">({{earning.value | dollarsign}})</span>
                </v-layout>
            </v-card-title>
            <v-card-actions class="postit-close">
                <v-avatar slot="icon" color="black" size="20" @click="deleteEarning">
                    <v-icon size="medium" icon="mdi-close" color="white">mdi-close</v-icon>
                </v-avatar>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-container fill height>
                <v-form ref="form">
                    <v-text-field label="Date" type="date" v-model="date"></v-text-field>
                    <v-text-field class="mb-3" label="Quantity" type="number" 
                    :counter="10" :rules="quantityRules" v-model="quantity"></v-text-field>
                    <v-divider></v-divider>
                    <v-btn class="ml-3 mt-3" text color="success" @click="confirmEarning"
                    :disabled=" quantity <= 0 || date == '' || quantityMustLess">Send profile</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['earning', 'id'],
    data() {
        return {
            date: new Date().toISOString().slice(0, 10),
            quantity: '',
            quantityRules:[
                v => !!v || 'Quantity is required',
                v => v.length <= 10 || 'Quantity must be less than 10 characters',
                v => v > 0 || 'The quantity can be neither zero nor negative',
            ]
        }
    },
    methods:{
        confirmEarning() {
            const confirmedEarning = {
                quantity: this.quantity, 
                value: this.earning.value
            }
            this.$store.dispatch('confirmEarning', confirmedEarning).then(
                () =>{
                    this.addProfileEarning()
                    this.saveRemaining()
                    this.addSavedFunds()
                    this.clear()
                }
            )
            
        },
        addProfileEarning(){
            const profileEarning = {
                description: this.earning.description,
                value: this.earning.value,
                date: this.date,
                quantity: this.quantity
            }
            this.$http.post('profileEarnings.json', profileEarning)
        },
        addSavedFunds(){
            const funds = this.funds
            this.$http.post('savedFunds.json', funds)
        },
        saveRemaining(){
            const funds= this.funds
            this.$http.put('remaining.json', funds)
        },
        clear(){
            this.date = new Date().toISOString().slice(0, 10),
            this.quantity = ''
            this.$refs.form.resetValidation()
        },
        deleteEarning(){
            this.$http.delete(`/earnings/${this.id}.json`).then(
                () =>{
                    this.reloadPage()
                }
            )
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        quantityMustLess(){
            return this.quantity.length > 10
        }
    }
}
</script>