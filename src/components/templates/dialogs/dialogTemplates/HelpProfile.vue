<template>
    <div>
        <v-card>
            <v-card-title>
                <v-layout align-center justify-center>HELP</v-layout>
            </v-card-title>
            <v-card-text>
                <ul class="help-ul">
                    <li class="help-li pb-4">In profile we have all the records of the confirmed post-its</li>
                    <li class="help-li pb-4">Deleting the post-it record undoes your changes</li>
                    <li class="help-li">The graph shows the user's remaining balance records</li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <slot></slot>
            </v-card-actions>
        </v-card>
    </div>
</template>