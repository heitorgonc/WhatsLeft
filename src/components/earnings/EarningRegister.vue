<template>
    <v-flex
        class="pr-5 pt-5"
        xs12 
        md6 
        lg4
    >
        <v-card class="black">
            <v-card-title class="headline">
                <span class="word1">
                    New
                </span>
                <span class="word2">
                    Post-it
                </span>
            </v-card-title>
            <v-card-actions class="close">
                <span @click.stop="earningCadForm = false">
                    <v-avatar
                        slot="icon"
                        color="white"
                        size="20"
                    >
                        <v-icon 
                            size="medium"
                            icon="mdi-close"
                            color="black"
                        >mdi-close
                        </v-icon>
                    </v-avatar>
                </span>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-container
                fill
                height
            >
                <v-form ref="form">
                    <v-text-field
                        type="text"
                        v-model="description"
                        :rules="descriptionRules"
                        :counter="15"
                        label="Description"
                        required
                    >
                    </v-text-field>
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
                    <v-divider></v-divider>
                    <v-btn
                        class="ml-3 mt-3"
                        color="error"
                        text
                        @click="earningCadForm = false"
                    >Cancel
                    </v-btn>
                    <v-btn
                        class="ml-3 mt-3"
                        color="primary"
                        text
                        @click="addEarning"
                        :disabled="
                            value <= 0 ||
                            description == '' || 
                            Number.isInteger(description)
                        "
                    >Create
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-flex>
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
                id: this.id++,
                description: this.description,
                value: this.value
            }
            this.earningCadForm = false
            this.$store.dispatch('addEarning', earning)
            this.clear()
        },
        clear(){
            this.description = ''
            this.value = ''
            this.$refs.form.resetValidation()
        }
    },
    computed:{
        id:{
            get(){
                return this.$store.getters.earningId
            },
            set(earningId){
                this.$store.commit('setEarningId', earningId)
            }
        },
        earningCadForm:{
            get(){
                return this.$store.getters.earningCadForm
            },
            set(earningCadForm){
                this.$store.commit('setEarningCadForm', earningCadForm)
            }
        }
    }
}
</script>
<style>
    
</style>