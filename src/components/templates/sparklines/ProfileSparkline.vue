<template>
    <v-card
        class="mx-auto text-center"
        color="transparent"
        dark
        max-width="600"
    >
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .15)">
                <v-sparkline
                    auto-draw
                    line-width="3"
                    :value="value"
                    color="grey lighten-1"
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
    computed:{
        value:{
            get(){
                return this.$store.getters.savedFunds
            }
        }
    }

}
</script>

<style>

</style>