<template>
    <v-container fluid class="bannerregister">
        <v-banner dark>
            <template v-slot:actions>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-layout align-center>
                            <div class="bannerregister-avatar">
                                <v-avatar slot="icon" class="bannerregister-avatar-background" size="40">
                                    <v-icon icon="mdi-folder-plus-outline" color="white">mdi-folder-plus-outline</v-icon>
                                </v-avatar>
                            </div>
                            <span class="bannerregister-text">Do you want to create a new post-it ?</span>
                            <v-card rounded flat class="bannerregister-btn" color="transparent" v-bind="attrs" v-on="on">
                                <v-layout justify-center align-center>
                                    <span class="bannerregister-btn-text">click here</span>
                                </v-layout>
                            </v-card>
                        </v-layout>
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