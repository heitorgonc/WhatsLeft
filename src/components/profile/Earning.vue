<template>
    <v-flex 
        class="pr-5 pt-5" 
        xs12 
        md6 
        lg4
    >
        <v-card 
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        Earning: {{earning.date}}
                    </div>
                    <v-container class="mb-1">
                        <span class="text-h5" v-if="earning.description">
                            Description: {{earning.description}}
                        </span>
                    </v-container>
                    <v-container class="mb-1" v-if="earning.value">
                        <span class="text-h5">
                            Value: {{earning.value}}
                        </span>
                    </v-container>
                    <v-container class="mb-1" v-if="earning.quantity">
                        <span class="text-h5">
                            Quantity: {{earning.quantity}}
                        </span>
                    </v-container>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                Edit
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                >
                Exclude
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
// import {mapActions} from 'vuex'

export default {
    props: ['earning'],
    data() {
        return {
            quantity: 0,
            date: this.date
        }
    },
    methods:{}
}
</script>
<style>
    
</style>