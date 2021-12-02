<template>
    <v-container fluid class="postit-register-banner">
        <v-banner dark>
            <template v-slot:actions>
                <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-layout align-center class="postit-register-layout">
                            <div class="avatar">
                                <v-avatar
                                    slot="icon"
                                    class="postit-register-avatar"
                                    size="40"
                                >
                                    <v-icon 
                                        icon="mdi-folder-plus-outline"
                                        color="white"
                                    >mdi-folder-plus-outline
                                    </v-icon>
                                </v-avatar>
                            </div>
                            <span class="postit-register-span2">Do you want to create a new post-it ?</span>
                        </v-layout>
                        <v-card
                            class="postit-register-card"
                            elevation-1
                            color="rgba(0, 0, 0, 0.459)"
                            v-bind="attrs"
                            v-on="on"
                        > 
                            <v-layout justify-center align-center>
                                <span class="postit-register-card-text">click here</span>
                            </v-layout>
                        </v-card>
                    </template>
                    <slot name="register"></slot>
                </v-dialog>
            </template>
        </v-banner>
    </v-container>
</template>

<script>

export default {
    computed:{
        dialog:{
            get(){
                return this.$store.getters.dialog
            },
            set(dialog){
                this.$store.commit('setDialog', dialog)
            }
        }
    }
}
</script>