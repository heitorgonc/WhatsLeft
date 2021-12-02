<template>
    <v-banner
        single-line
        align-center
    >
        <router-link
            class="way-link"
            to="/"
        >Home
        </router-link>
        <v-icon 
            small
            class="way-divider"
            icon="mdi-arrow-right"
            color="black"
        >mdi-arrow-right
        </v-icon>
        <router-link
            class="way-link way-active"
            to="/expenses"
        >Expenses
        </router-link>
    </v-banner>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>