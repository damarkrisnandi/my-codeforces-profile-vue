<template>
  <v-bottom-navigation
    fixed
    :value="value"
    color="primary"
  >
    <v-btn @click="clickHome">
      <span>Home</span>

      <v-icon>fa-home</v-icon>
    </v-btn>

    <v-btn @click="clickRating">
      <span>Rating</span>

      <v-icon>fa-star</v-icon>
    </v-btn>

    <v-btn @click="clickContest">
      <span>Contests</span>

      <v-icon>fa-trophy</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
      name: 'BottomNav',
      data: () => ({ value: 0 }),
      methods: {
          clickHome() {
            this.$store.dispatch('menu/changeMenu', {
                menu: 0    
            });
          },
          clickRating() {
              this.$store.dispatch('menu/changeMenu', {
                menu: 1    
            });
          },
          clickContest() {
              this.$store.dispatch('menu/changeMenu', {
                menu: 2    
            });
          }
      }
  }
</script>

<style>
</style>