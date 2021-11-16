<template>
    <v-app-bar app>
        <v-toolbar-title 
            id="logo" 
            class="headline text-uppercase mr-4"
        >
            <v-btn 
                plain 
                to="/"
                x-large
            >
                <span>What's</span>
                <span class="font-weight-light">left</span>
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn 
                text 
                to="/earnings"
            >Earnings
            </v-btn>
            <v-btn 
                text 
                to="/expenses"
            >Expenses
            </v-btn>
            <v-btn 
                text
                to="/profile"
            >Profile
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Remaining: {{funds}}
                </span>
            </v-layout>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <slot></slot>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>

export default {
    computed:{
        funds(){
            return this.$store.getters.funds
        }
    }
}
</script>
<style>
    
</style>