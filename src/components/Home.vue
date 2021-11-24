<template>
    <div>
        <v-layout
            justify-center
            align-center
            column
        >
            <ul>
                <li class="outdoor1 mb-4">
                    No Balance ? in <router-link to="/profile/" class="link">profile</router-link> add your opening balance
                </li>
                <li class="outdoor1 mb-4">
                    <router-link to="/earnigs/" class="link">Earnigs</router-link> or <router-link to="/expenses/" class="link">expenses</router-link> post-its are forms that, when confirmed, change your funds
                </li>
                <li class="outdoor1 ">
                    You can find your balance history in your <router-link to="/profile/" class="link">profile</router-link>
                </li>
            </ul>
        </v-layout>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>