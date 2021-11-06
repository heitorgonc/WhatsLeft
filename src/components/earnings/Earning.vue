<template>
    <v-flex class="pr-5 pt-5" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{earning.description}} <small>(Value: {{earning.value}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container 
                fill 
                height>
                <v-text-field 
                    label="Date" 
                    type="date" 
                    v-model="date">
                </v-text-field>
                <v-text-field 
                    label="Quantity" 
                    type="number" 
                    v-model.number="quantity">
                </v-text-field>
                <v-btn 
                    class="green darken-3 white--text"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="confirmEarning">
                    Confirm
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: ['earning'],
    data() {
        return {
            quantity: 0,
            date: this.date
        }
    },
    methods:{
        confirmEarning() {
            const earning = {
                earningId: this.earning.id,
                earningValue: this.earning.value,
                date: this.date,
                quantity: this.quantity
            }
            console.log(earning)
            this.quantity = 0
        }
    }
}
</script>
<style>
    
</style>