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
                    <div class="text-overline mb-4">Expense: {{profileExpense.date}}</div>
                    <v-container class="mb-1" v-if="profileExpense.description">
                        <span class="text-h5">Description: {{profileExpense.description}}</span>
                    </v-container>
                    <v-container class="mb-1" v-if="profileExpense.price">
                        <span class="text-h5">Price: {{profileExpense.price}}</span>
                    </v-container>
                    <v-container class="mb-1" v-if="profileExpense.quantity">
                        <span class="text-h5">Quantity: {{profileExpense.quantity}}</span>
                    </v-container>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >Edit
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                >Exclude
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>

export default {
    props: ['profileExpense'],
    methods:{}
}
</script>
<style>
    
</style>