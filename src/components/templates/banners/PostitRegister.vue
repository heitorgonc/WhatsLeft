<template>
    <v-banner single-line>
        <v-avatar
            slot="icon"
            color="grey darken-2"
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
            <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        color="grey lighten-1"
                        class="mr-5"
                        text
                        v-bind="attrs"
                        v-on="on"
                    >New Post-it
                    </v-btn>
                </template>
                <slot name="register"></slot>
            </v-dialog>
        </template>
    </v-banner>
</template>

<script>

export default {
    computed:{
        dialog:{
            get(){
                return this.$store.getters.earningsDialog
            },
            set(dialog){
                this.$store.commit('setEarningsDialog', dialog)
            }
        }
    }
}
</script>