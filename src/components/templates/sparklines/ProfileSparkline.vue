<template>
    <v-card class="mx-auto text-center mb-8 profile-sparkline-card" dark max-width="68vw">
        <v-card-title>
            <v-layout align-center justify-center class="profile-sparkline-card-title">
                <span class="sparkline-span pr-2">Remaining :</span>
                <span class="sparkline-span" elevation>{{ funds| dollarsign}}</span>
            </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .75)" rounded>
                <v-sparkline auto-draw line-width="3" :value="savedFunds" height="150"
                stroke-linecap="round" smooth :padding='25' :gradient='gradient'  color="white">
                    <template v-slot:label="item">${{ item.value }}</template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-layout align-center justify-center>
                <v-btn class="ma-1 sparkline-btn" text color='warning' @click="clearSparkline">Clear</v-btn>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            gradient: ['#287574','#22d950', '#0c4b3d']
        }
    },
    methods:{
        loadSavedFunds(){
            return this.$store.dispatch('loadSavedFunds')
        },
        clearSparkline(){
            return this.$http.put(`savedFunds.json`, this.funds).then(
                () => {
                    this.addSavedFunds()
                    this.addSavedFunds()
                    this.reloadPage()
                }
            )
        },
        addSavedFunds(){
            const funds = this.funds
            this.$http.post('savedFunds.json', funds)
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    computed:{
        savedFunds(){
            return this.$store.getters.savedFunds
        },
        funds(){
            return this.$store.getters.funds
        }
    },
    created() {
        this.loadSavedFunds()
    }
}
</script>