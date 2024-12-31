<script setup lang="ts">
import WeatherDetails from "./WeatherDetails.vue";
interface WeekType {
  id: number,
  weatherConditionIcon: string,
  minTemprature: number,
  maxTemprature: number,
  weatherCondition: string,
  humidity: string,
  date: string
};

const props = defineProps<{ 
    weeks: TableType[]
}>();

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}

const labels = props.weeks.map(day => day.date);
const tempData = props.weeks.map(day => day.minTemprature);

import MyChart from "./MyChart.vue";
</script>

<template>
    <div>
      <el-row style="height: 20vh; justify-content: center;">
        <MyChart :labels="labels" :tempData="tempData" />
      </el-row>
      <el-row style="display: flex;">
        <div
          v-for="(day, i) in weeks"
          :key="i"
        >
          <WeatherDetails
            :id="day.i"
            :weatherConditionIcon="day.weatherConditionIcon"
            :minTemprature="day.minTemprature"
            :maxTemprature="day.maxTemprature"
            :weatherCondition="day.weatherCondition"
            :humidity="day.humidity"
            :date="day.date"
          />
        </div>
      </el-row>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
