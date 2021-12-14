<template>
        <v-app-bar 
            app
            color="white"
            elevate-on-scroll
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title 
                class="headline text-uppercase mr-4 homebar-logo"
            >
                <v-card
                    color="transparent"
                    flat
                >
                    <router-link 
                        to="/" 
                        class="homebar-link"
                    >
                        <span class="homebar-logo-text">What's</span>
                        <span class="homebar-logo-text1">left</span>
                    </router-link>
                </v-card>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout><slot name="way"></slot></v-layout>
            <v-spacer></v-spacer>
            <v-layout align-center class="homebar-funds-label">
                <span class="text-uppercase grey--text text--darken-2">
                    <span class="homebar-funds-text">
                        Remaining:
                    </span>
                    <span class="homebar-funds-text1">
                        {{funds | dollarsign}}
                    </span>
                </span>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
</template>

<script>
export default {
    methods:{
        loadRemaining(){
            this.$store.dispatch('loadRemaining')
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        drawer:{
            get(){
                return this.$store.getters.drawer
            },
            set(drawer){
                this.$store.commit('setDrawer', drawer)
            }
        },
    },
    created(){
        this.loadRemaining()
    }
}
</script>