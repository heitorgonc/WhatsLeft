<template>
    <v-dialog transition="dialog-bottom-transition" max-width="700">
        <template v-slot:activator="{on, attrs}">
            <v-avatar size="40" v-bind="attrs" v-on="on" slot="icon" class="helpAvatar">
                <v-icon icon="mdi-help" color="blue darken" size="x-large">mdi-help</v-icon>
            </v-avatar>
        </template>
        <template v-slot:default="dialog">
            <router-view>
                <v-btn class="ml-10" text @click="dialog.value = false">Close</v-btn>
            </router-view>
        </template>
    </v-dialog>
</template>