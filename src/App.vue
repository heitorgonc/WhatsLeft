<template>
  <v-app>
    <v-layout class="containerScreen">
      <router-view name="drawer"></router-view>
      <router-view name="appbar">
        <template v-slot:way>
          <router-view name="way"></router-view>
        </template>
      </router-view>
      <v-main>
        <v-container fluid>
          <router-view name="banner"></router-view>
        </v-container>
        <v-container 
          fluid
        >
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-main>
      <router-view name="footer"></router-view>
    </v-layout>
  </v-app>
</template>

<script>
</script>

<style>

  @keyframes slide-in{
    from { transform: translateY(-30px); opacity: 0; }
    to {transform: translateY(0px); opacity: 1; }
  }

  @keyframes slide-out {
    from { transform: translateY(0px); opacity: 1; }
    to {transform: translateY(-30px); opacity: 0; }
  }

  .slide-enter-active{
    animation: slide-in 0.3s ease;
  }
  .slide-leave-active{
    animation: slide-out 0.3s ease;
  }
</style>