<template>
    <v-card class="overflow-hidden">
        <v-app-bar 
            app
            absolute
            color="white"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
                <v-layout>
                    <slot name="way"></slot>
                </v-layout>
                <v-spacer></v-spacer>
                <v-layout align-center>
                    <span class="text-uppercase grey--text text--darken-2">
                        Remaining: <span class="headerFunds">{{funds}}</span>
                    </span>
                </v-layout>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
            >
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                        v-model="group"
                        active-class="light-blue--text text--accent-4"
                    >
                        <v-list-item to="/">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/profile">
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/earnings">
                            <v-list-item-icon>
                                <v-icon>mdi-currency-usd</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Earnings</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/expenses">
                            <v-list-item-icon>
                                <v-icon>mdi-currency-usd-off</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Expenses</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-sheet
                id="scrolling-techniques-7"
                class="overflow-y-auto"
                max-height="100vh"
                max-width="100vw"
            >
                <v-main>
                    <slot name="app-banner"></slot>
                    <v-container 
                        fluid
                        class="containerScreen"
                    >
                        <slot name="main"></slot>
                    </v-container>
                    
                </v-main>
            </v-sheet>
    </v-card>
</template>

<script>

export default {
    data() {
        return {
            drawer: false,
            group: null
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        }
    }
}
</script>
<style>
    
</style>