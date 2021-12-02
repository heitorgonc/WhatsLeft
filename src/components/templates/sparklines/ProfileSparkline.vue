<template>
    <v-card
        class="mx-auto text-center mb-8 profile-sparkline-card"
        dark
        max-width="800"
    >
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .35)">
                <v-sparkline
                    class="profile-sparkline"
                    auto-draw
                    line-width="3"
                    :value="value"
                    color="white darken"
                    height="150"
                    stroke-linecap="round"
                    smooth
                    :padding='15'
                >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-layout align-center justify-center>
                <v-btn 
                    class="ma-1" 
                    text color='warning' 
                    @click="clearSparkline"
                >Clear
                </v-btn>
            </v-layout>
            
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    methods:{
        loadSavedFunds(){
            return this.$store.dispatch('loadSavedFunds')
        },
        clearSparkline(){
            const funds = this.funds
            this.$http.put('savedFunds.json', funds).then(
                () => {
                    this.reloadPage()
                }
            )
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    computed:{
        value(){
            return this.$store.getters.savedFunds
        },
        funds(){
            return this.$store.getters.funds
        }
    },
    created() {
        this.loadSavedFunds()
    },
}
</script>

<style>

</style>