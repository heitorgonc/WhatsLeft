<template>
    <v-flex 
        class="pr-5 pt-5" 
        xs12 
        md6 
        lg4
    >
        <v-card 
            rounded
            class="blue darken-3 white--text"
        >
            <v-card-title>
                <v-layout 
                    align-center 
                    justify-center
                >
                    <span class="postit-description">{{earning.description}}</span>
                    <span class="postit-value">({{earning.value | dollarsign}})</span>
                </v-layout>
            </v-card-title>
            <v-card-actions class="postit-close">
                
                <v-avatar
                    @click="deleteEarning"
                    slot="icon"
                    color="black"
                    size="20"
                >
                    <v-icon 
                        size="medium"
                        icon="mdi-close"
                        color="white"
                    >mdi-close
                    </v-icon>
                </v-avatar>
                
            </v-card-actions>
        </v-card>
        <v-card>
            <v-container 
                fill 
                height
            >
                <v-form ref="form">
                    <v-text-field
                        label="Date"
                        type="date" 
                        v-model="date"
                    >
                    </v-text-field>
                    <v-text-field 
                        class="pb-3"
                        label="Quantity" 
                        type="number"
                        :counter="10"
                        :rules="quantityRules"
                        v-model="quantity"
                    >
                    </v-text-field>
                    <v-divider></v-divider>
                    <v-btn 
                        class="ml-3 mt-3"
                        text
                        color="success"
                        :disabled="
                            quantity <= 0 || 
                            date == '' ||
                            quantityMustLess
                        "
                        @click="confirmEarning"
                    >Confirm
                    </v-btn>
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
                    this.saveFunds()
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
        saveFunds(){
            const savedFund = this.funds
            this.$http.post('savedFunds.json', savedFund)
        },
        saveRemaining(){
            const savedRemaining = this.funds
            this.$http.put('remaining.json', savedRemaining)
        },
        clear(){
            this.date = new Date().toISOString().slice(0, 10),
            this.quantity = ''
            this.$refs.form.resetValidation()
        },
        deleteEarning(){
            this.$http.delete(`/earnings/${this.id}.json`).then(
                
            )
        },
        
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
<style>
    
</style>