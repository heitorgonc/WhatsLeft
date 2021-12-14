<template>
    <div>
        <v-card>
            <v-card-title>
                <v-layout
                    align-center
                    justify-center
                >
                    HELP
                </v-layout>
            </v-card-title>
            <v-card-text>
                <ul class="help-ul">
                    <li class="help-li pb-4">
                        To make the registration of accounts to be won less repetitive we have Post-its
                    </li>
                    <li class="help-li pb-4">
                        The post-its will register the balance change in the profile when confirmed
                    </li>
                    <li class="help-li">
                        Each time a post-it is confirmed, a record with its data is inserted into the profile
                    </li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <slot></slot>
            </v-card-actions>
        </v-card>
    </div>
</template>