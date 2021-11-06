<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>What's</span>
            <span class="font-weight-light">left</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn 
                text 
                to="/"
            >Home
            </v-btn>
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
                    Remaining:
                </span>
            </v-layout>
        </v-toolbar-items>
    </v-app-bar>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>