<template>
    <v-card
        dark
    >
        <v-layout
            column
            align-center
            justify-center
        >
            <v-card-title>
                <span class="opening-balance-span pr-5">Opening Balance:</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field
                        type="number"
                        :counter="10"
                        :rules="fundsRules"
                        required
                        dark
                        v-model="funds"
                    >
                    </v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn
                    color="success"
                    text
                    :disabled="
                        noFunds ||
                        negativeFunds ||
                        fundsMustLess
                    "
                    @click="saveFunds"
                >Save
                </v-btn>
            </v-card-actions>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            fundsRules:[
                v => !!v || 'Value is required',
                v => v.length <= 10 || 'Value must be less than 10 characters',
                v => v > 0 || 'The value can be neither zero nor negative',
            ]
        }
    },
    methods:{
        saveFunds(){
            const funds = this.$store.getters.funds
            this.$http.post('savedFunds.json', funds).then(
                () => {
                    this.saveRemaining()
                    this.reloadPage()
                }
            )
        },
        saveRemaining(){
            const remaining = this.$store.getters.funds
            this.$http.put('remaining.json', remaining)
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    computed:{
        negativeFunds(){
            return this.funds <= 0
        },
        fundsMustLess(){
            return this.funds > 9999999999
        },
        noFunds(){
            return this.funds == 0
        },
        funds:{
            get(){
                return this.$store.getters.funds
            },
            set(funds){
                this.$store.commit('setFunds', funds)
            }
        }
    }
}
</script>

<style>

</style>