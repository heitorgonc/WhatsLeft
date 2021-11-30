<template>
    <v-card
        class="mx-auto text-center mb-8"
        color="transparent"
        dark
        max-width="800"
    >
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .35)">
                <v-sparkline
                    auto-draw
                    line-width="3"
                    :value="value"
                    color="white darken"
                    height="150"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    methods:{
        loadSavedFunds(){
            return this.$store.dispatch('loadSavedFunds')
        }
    },
    computed:{
        value(){
            return this.$store.getters.savedFunds
        }
    },
    created() {
        this.loadSavedFunds()
    },
}
</script>

<style>

</style>