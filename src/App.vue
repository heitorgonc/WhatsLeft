<template>
  <v-app app>
    <router-view name="headerHome">
      <template v-slot:way>
        <router-view name="way"></router-view>
      </template>
      <template v-slot:app-banner>
        <router-view name="banner"></router-view>
      </template>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </router-view>
  </v-app>
</template>

<script>
</script>