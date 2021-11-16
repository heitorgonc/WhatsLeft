<template>
    <v-banner
        app
        single-line
        color="red"
        class="mb-10"
    >
        <v-avatar
            slot="icon"
            color="red darken-4"
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
                @click="expenseCadForm = true"
            >new post-it
            </v-btn>
        </template>
    </v-banner>
</template>

<script>

export default {
    computed:{
        expenseCadForm:{
            get(){
                return this.$store.getters.expenseCadForm
            },
            set(expenseCadForm){
                this.$store.commit('setExpenseCadForm', expenseCadForm)
            }
        }
    }
}
</script>