<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view  name="way"></router-view>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import {mapActions} from 'vuex'
  
  export default{
    components:{Header},
    methods:{
      ...mapActions('expenses',['initExpenses'])
    },
    created(){
      this.initExpenses()
    }
  }
</script>