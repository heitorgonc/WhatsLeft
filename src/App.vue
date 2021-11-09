<template>
  <v-app>
    <Header><router-view name="way"></router-view></Header>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import {mapActions} from 'vuex'
  
  export default{
    components : {
      Header
    },
    methods:{
      ...mapActions('expenses',['initExpenses'])
    },
    created(){
      this.initExpenses()
    }
  }
</script>