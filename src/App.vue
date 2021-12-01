<template>
  <v-app>
    <v-layout class="gradientScreen">
      <h1>BEM VINDO</h1>
      <router-view name="drawer"></router-view>
      <router-view name="appbar">
        <template v-slot:way>
          <router-view name="way"></router-view>
        </template>
      </router-view>
      <v-main>
        <router-view name="banner">
          <template v-slot:register>
            <router-view name="register"></router-view>
          </template>
        </router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-main>
      <router-view name="footer"></router-view>
    </v-layout>
  </v-app>
</template>

<script>
</script>

<style>
</style>