<template>
  <v-app>
    <router-view name="drawer"></router-view>
    <router-view name="appbar">
      <template v-slot:way>
        <router-view name="way"></router-view>
      </template>
    </router-view>
    <router-view name="banner"></router-view>
    <main>
      <v-container 
        fluid
        class="containerScreen"
      >
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
</script>