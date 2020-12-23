<template>
  <div>
        <line-chart :chart-data="dataCollection"
        :options="{responsive: true, maintainAspectRatio: false}"
        ></line-chart>
        <!-- <label align="right">Recovery percentage</label>
        <h1> {{ percentage }}%</h1> -->
  </div>
</template>

<script>
import { getRating, handle } from '../../services/index'
import { Line } from 'vue-chartjs'
import LineChart from './LineChart'
import axios from 'axios'
export default {
    name: 'Rating',
    data: () => {
        return {
            dataCollection: [],
            labelData: [],
            ratingData: []
        }
    },
    extends: Line,
    components: {
        LineChart
    },
    async mounted() {
        const data2 = await getRating();
        let bgColor = [];
        data2.result.forEach(item => {
            const view = item.contestName.replace('Codeforces Round ', '').split(',')[0];
            this.labelData.push(view + (view.substr(view.length - 1, 1) !== ')' ? ')' : ''));
            this.ratingData.push(item.newRating);
            bgColor.push(item.newRating >= item.oldRating ? 'green' : 'red')
        });
        this.dataCollection = {
                labels: this.labelData,
                datasets: [
                    {
                        label: handle,
                        backgroundColor: bgColor,
                        data: this.ratingData
                    },
                ],
        }
    }

}
</script>

<style>

</style>