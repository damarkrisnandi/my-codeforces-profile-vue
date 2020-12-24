<template>
  <v-data-table
    :headers="headers"
    :items="contests"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Contests</v-toolbar-title>
      </v-toolbar>
    </template>
    <template >
      
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    <template v-slot:[`item.ratingChange`]="{ item }">
        <div v-if="item.ratingChange >= 0">
            <v-icon color="green">fa fa-angle-up</v-icon>&nbsp;
            <label style="color: green">{{ Math.abs(item.ratingChange) }}</label>
        </div>
        <div v-if="item.ratingChange < 0">
            <v-icon color="red">fa fa-angle-down</v-icon>&nbsp;
            <label style="color: red">{{ Math.abs(item.ratingChange) }}</label>
        </div>
    </template>
  </v-data-table>
</template>

<script>
import { getRating } from '../../services/index'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Contest',
          align: 'start',
          sortable: false,
          value: 'contestName',
        },
        { text: 'Rank', value: 'rank' },
        { text: 'Rating Change', value: 'ratingChange' },
        { text: 'Rating', value: 'newRating'}
      ],
      contests: []
    }),

    async mounted() {
        await this.initialize();
    },
    methods: {
      async initialize () {
        this.contests = (await getRating()).result; 
        this.contests.map(item => item.ratingChange = item.newRating - item.oldRating);
        this.contests.sort( function ( a, b ) { return b.contestId - a.contestId; } )
      },

    },
  }
</script>

<style>

</style>