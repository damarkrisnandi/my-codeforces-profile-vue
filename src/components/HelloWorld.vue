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
    </v-container>
    <BottomNav/>
  </div>
</template>

<script>
import Profile from './parts/profile'
import BottomNav from './parts/bottomNav'
import Rating from './parts/rating'
  export default {
    name: 'HelloWorld',
    components: {
      Profile,
      BottomNav,
      Rating
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