<template>
    <v-banner
        app
        single-line
        color="primary"
        class="mb-10"
    >
        <v-avatar
            slot="icon"
            color="light-blue darken-4"
            size="40"
        >
            <v-icon 
                icon="mdi-folder-plus-outline"
                color="white"
            >mdi-folder-plus-outline
            </v-icon>
        </v-avatar>
        <span class="bannerText">Do you want to create a new post-it ?</span>
        <template v-slot:actions>
            <v-btn
                class="mr-5"
                text
                color="white"
                @click="earningCadForm = true"
            >new post-it
            </v-btn>
        </template>
    </v-banner>
</template>

<script>

export default {
    computed:{
        earningCadForm:{
            get(){
                return this.$store.getters.earningCadForm
            },
            set(earningCadForm){
                this.$store.commit('setEarningCadForm', earningCadForm)
            }
        }
    }
}
</script>