<template>
  <div>
        <line-chart :chart-data="dataCollection"
        :options="{
            responsive: true, 
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: Math.max(...ratingData) <= 1900 ? 0 : 1200,
                        suggestedMax: Math.max(...ratingData) <= 1900 ? 2000 : 3900
                    }
                }]
            }
            }"
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
        let data2 = (await getRating()).result;
        let data3 = data2.slice(data2.length - 10, data2.length)
        let bgColor = [];
        data3.forEach(item => {
            const view = item.contestName;
            this.labelData.push(view);
            this.ratingData.push(item.newRating);
            bgColor.push(item.newRating >= item.oldRating ? 'green' : 'red')
        });
        this.dataCollection = {
                labels: this.labelData,
                datasets: [
                    {
                        label: `${handle} - Last 10 Contests`,
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