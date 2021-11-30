<template>
    <v-layout
        align-center
        justify-center
    >
        <v-flex>
            <v-card class="red darken-3" width="400">
                <v-card-title>
                    <v-layout 
                        align-center
                        justify-center
                    >
                        <span class="registerTitle">New</span>
                        <span class="registerTitle2">Post-it</span>
                    </v-layout>
                </v-card-title>
                <v-card-actions class="close">
                    <v-avatar
                        slot="icon"
                        color="white"
                        size="20"
                        @click="clear"
                    >
                        <v-icon
                            size="medium"
                            icon="mdi-close"
                            color="black"
                        >mdi-close
                        </v-icon>
                    </v-avatar>
                </v-card-actions>
            </v-card>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-form ref="form">
                            <v-col cols="12">
                                <v-text-field 
                                    type="text"
                                    v-model="description" 
                                    :counter="15"
                                    :rules="descriptionRules"
                                    label="Description"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field 
                                    class="pb-3"
                                    type="number" 
                                    v-model="price"
                                    :counter="10"
                                    :rules="priceRules"
                                    label="Price"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-layout 
                        align-center
                        justify-center
                    >
                        <v-btn
                            text
                            class="mt-3 ml-3" 
                            @click="clear"
                            color="error"
                            :disabled="
                                noDescription ||
                                noPrice
                            "
                        >Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn 
                            text
                            class="mt-3 ml-3"
                            color="primary"
                            @click="addExpense"
                            :disabled="
                                price <= 0 || 
                                description == '' ||
                                priceMustLess ||
                                descriptionMustLess
                            "
                        >Create
                        </v-btn>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data(){
        return{
            description: '',
            price: '',
            descriptionRules:[
                v => !!v || 'Description is required',
                v => v.length <= 15 || 'Description must be less than 15 characters',
            ],
            priceRules:[
                v => !!v || 'Price is required',
                v => v.length <= 10 || 'Price must be less than 10 characters',
                v => v > 0 || 'The price can be neither zero nor negative',
            ]
        }
    },
    methods:{
        addExpense(){
            const expense = {
                description: this.description,
                price: this.price
            }
            this.$http.post('expenses.json', expense).then(
                () =>{
                    this.reloadPage()
                    this.clear()
                }
            )
        },
        clear(){
            this.description = ''
            this.price = ''
            this.$refs.form.resetValidation()
            this.dialog = false
        },
        reloadPage(){
            window.location.reload()
        }
    },
    computed:{
        descriptionMustLess(){
            return this.description.length > 15
        },
        priceMustLess(){
            return this.price.length > 10
        },
        noPrice(){
            return this.price.length == 0
        },
        noDescription(){
            return this.description.length == 0
        },
        dialog:{
            get(){
                return this.$store.getters.dialog
            },
            set(dialog){
                this.$store.commit('setDialog', dialog)
            }
        }
    }
}
</script>
<style>
    
</style>