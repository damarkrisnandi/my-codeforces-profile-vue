<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      :src="avatar"
    ></v-img>

    <v-card-title>{{handle}}</v-card-title>
    <v-card-subtitle>{{name}}</v-card-subtitle>

    <v-card-text>
      <v-chip 
        :color="chipColor"
        :text-color="chipText"
      >{{rank}}</v-chip>
      &nbsp;
      <v-chip
      :color="chipColor"
      outlined
      >
      Rating: 
      {{rating}}
      </v-chip>
      &nbsp;
      <v-chip
      :color="changeColor"
      outlined
      >
      <v-icon v-if="ratingChange >= 0">fa fa-angle-up</v-icon>
      <v-icon v-if="ratingChange < 0">fa fa-angle-down</v-icon> 
      {{ Math.abs(ratingChange) }}
      </v-chip>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :href="`https://codeforces.com/profile/${handle}`"
      >
        Go To my profile
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { getUser, getRating } from '../../services/index'
export default {
    name: 'ProfileCard',
    data: () => {
        return {
            handle: '',
            name: '',
            rank: '',
            avatar: '',
            chipColor: '',
            chipText: '',
            rating: 0,
            ratingChange: 0,
            changeColor: 'green'
        }
    },
    async mounted() {
        const data = await getUser();
        const ratingData = (await getRating()).result;
        const lastRating = ratingData[ratingData.length - 1];
        this.handle = data.result[0].handle;
        this.name = data.result[0].firstName + ' ' + data.result[0].lastName;
        this.rank = data.result[0].rank;
        this.avatar = data.result[0].titlePhoto;
        this.rating = data.result[0].rating;
        this.ratingChange = lastRating.newRating - lastRating.oldRating;
        this.setColorRank();
        this.setColorChange();

    },
    methods: {
        setColorRank() {
            let color = '';
            let text = '';
            switch (this.rank) {
                case 'newbie':
                    color = '#808080';
                    text = 'white'
                    break;
                case 'pupil':
                    color = '#88CC22'; 
                    text = 'black'
                    break;
                case 'apprentice':
                    color = '008000'; 
                    text = 'black'
                    break;
                case 'specialist':
                    color = '03A89E'; 
                    text = 'black'
                    break;
                default:
                    break;
            }
            console.log(color)
            this.chipColor = color;
            this.chipText = text;
        },
        setColorChange() {
            if (this.ratingChange >= 0) {
                this.changeColor = 'green';
            } else {
                this.changeColor = 'red'
            }
        }
    }
}
</script>

<style>

</style>