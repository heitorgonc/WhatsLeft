<template>
    <v-navigation-drawer
        app
        temporary
        class="drawer"
        v-model="drawer"
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
                    <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item 
                    to="/profile"
                >
                    <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item 
                    to="/earnings"
                >
                    <v-list-item-icon><v-icon>mdi-currency-usd</v-icon></v-list-item-icon>
                    <v-list-item-title>Earnings</v-list-item-title>
                </v-list-item>
                <v-list-item 
                    to="/expenses"
                >
                    <v-list-item-icon><v-icon>mdi-currency-usd-off</v-icon></v-list-item-icon>
                    <v-list-item-title>Expenses</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed:{
        drawer:{
            get(){
                return this.$store.getters.drawer
            },
            set(drawer){
                this.$store.commit('setDrawer', drawer)
            }
        },
        group:{
            get(){
                return this.$store.getters.group
            },
            set(group){
                this.$store.commit('setGroup', group)
            }
        }
    }
}
</script>

<style>
    
</style>