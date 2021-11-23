<template>
    <v-layout
        justify-center
        align-center
    >
        <v-flex>
            <v-card class="blue darken-3">
                <v-card-title class="headline">
                    <v-layout 
                        align-center 
                        justify-center
                    >
                        <span class="word1">New</span>
                        <span class="word2">Post-it</span>
                    </v-layout>
                </v-card-title>
                <v-card-actions class="close">
                    <v-avatar
                        slot="icon"
                        color="black"
                        size="20"
                        @click="clear"
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
                <v-card-text>
                    <v-container>
                        <v-form ref="form">
                            <v-col cols="12">
                                <v-text-field
                                    type="text"
                                    v-model="description"
                                    :rules="descriptionRules"
                                    :counter="15"
                                    label="Description"
                                    required
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field 
                                    class="pb-3"
                                    type="number" 
                                    v-model="value"
                                    :counter="10"
                                    :rules="valueRules"
                                    label="Value"
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
                            class="ml-3 mt-3"
                            color="error"
                            text
                            @click="clear"
                            :disabled="
                                noDescription ||
                                noValue
                            "
                        >Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="ml-3 mt-3"
                            color="primary"
                            text
                            @click="addEarning"
                            :disabled="
                                value <= 0 ||
                                description == '' ||
                                valueMustLess ||
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
            value: '',
            descriptionRules:[
                v => !!v || 'Description is required',
                v => v.length <= 15 || 'Description must be less than 15 characters',
            ],
            valueRules:[
                v => !!v || 'Value is required',
                v => v.length <= 10 || 'Value must be less than 10 characters',
                v => v > 0 || 'The value can be neither zero nor negative',
            ]
        }
    },
    methods:{
        addEarning(){
            const earning = {
                description: this.description,
                value: this.value
            }
            this.$http.post('earnings.json', earning).then(
                () =>{
                    this.reloadPage()
                    this.clear()
                }
            )
        },
        clear(){
            this.description = ''
            this.value = ''
            this.$refs.form.resetValidation()
            this.dialog = false
        },
        reloadPage(){
            window.location.reload()
        }
    },
    computed:{
        valueMustLess(){
            return this.value.length > 10
        },
        descriptionMustLess(){
            return this.description.length > 15
        },
        noValue(){
            return this.value.length == 0
        },
        noDescription(){
            return this.description.length == 0
        },
        dialog:{
            get(){
                return this.$store.getters.earningsDialog
            },
            set(dialog){
                this.$store.commit('setEarningsDialog', dialog)
            }
        }
    },
}
</script>

<style>
    
</style>