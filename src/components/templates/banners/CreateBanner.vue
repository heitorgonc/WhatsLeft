<template>
    <v-banner two-line class="mb-5">
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
                text
                color="blue darken-4"
                @click="changeScreen = false"
            >new post-it
            </v-btn>
        </template>
    </v-banner>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    methods:{
        ...mapMutations(['setChangeScreen'])
    },
    computed:{
        changeScreen:{
            get(){
                return this.$store.state.changeScreen
            },
            set(changeScreen){
                this.setChangeScreen(changeScreen)
            }
        }
    }
}
</script>