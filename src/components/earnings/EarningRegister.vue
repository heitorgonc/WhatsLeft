<template>
    <v-form ref="form">
        <v-text-field 
            v-model="description"
            :rules="descriptionRules"
            :counter="15"
            label="Description"
            required
        >
        </v-text-field>
        <v-text-field 
            type="number" 
            v-model="value"
            :counter="10"
            :rules="valueRules"
            label="Value"
            required
        >
        </v-text-field>
        <v-btn 
            outlined 
            rounded 
            text
            class="mt-5 ml-5 mb-5" 
            @click="addEarning"
            :disabled="value <= 0 || description == ''"
        >Create Earning
        </v-btn>
    </v-form>
</template>

<script>
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'

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
        ...mapActions('earnings', {addEarningAction: 'addEarning'}),
        ...mapMutations('earnings', ['setId']),
        addEarning(){
            const earning = {
                id: this.id++,
                description: this.description,
                value: this.value
            }
            this.addEarningAction(earning)
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
                return this.$store.state.earnings.id
            },
            set(id){
                this.setId(id)
            }
        },
    }
}
</script>
<style>
    
</style>