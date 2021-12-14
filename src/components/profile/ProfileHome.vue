<template>
    <v-layout column>
        <v-card color="transparent">
            <v-container fluid>
                <v-layout justify-end>
                    <router-view></router-view>
                </v-layout>
            </v-container>
            <ProfileSparkline></ProfileSparkline>
        </v-card>
        <v-layout class="pa-2" column>
            <ProfileList></ProfileList>
        </v-layout>
    </v-layout>
</template>
<script>
import ProfileList from './ProfileList.vue'
import ProfileSparkline from '../templates/sparklines/ProfileSparkline.vue'

export default{
    components:{
        ProfileList,
        ProfileSparkline,
    }
}
</script>