<template>
  <div>
    <v-container>
      <div v-if="$store.state.menu.menu == 0">
        <Profile/>
      </div>
      <div v-if="$store.state.menu.menu == 1">
        <div class="scroll-horizontal" >
          <Rating/>  
        </div>
      </div>
      <div v-if="$store.state.menu.menu == 2">
        <Contests/>
      </div>
    </v-container>
    <BottomNav/>
  </div>
</template>

<script>
import Profile from './parts/profile'
import BottomNav from './parts/bottomNav'
import Rating from './parts/rating'
import Contests from './parts/contests'
  export default {
    name: 'HelloWorld',
    components: {
      Profile,
      BottomNav,
      Rating,
      Contests
    },
    data: () => ({
      
    }),
  }
</script>
<style>
.scroll-horizontal {
  overflow-x: auto;
}
</style>