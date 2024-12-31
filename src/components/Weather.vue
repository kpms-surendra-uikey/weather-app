<script setup lang="ts">
import DayWiseWeather from "./DayWiseWeather.vue";
import WeekWiseWeather from "./WeekWiseWeather.vue";
import DayWeather from "./DayWeather.vue";

interface TableType {
  humidity: string
  wind_speed: string
};

interface WeekType {
  id: number,
  weatherConditionIcon: string,
  minTemprature: number,
  maxTemprature: number,
  weatherCondition: string,
  humidity: string,
  date: string
};


defineProps<{ 
    weatherConditionIcon: string,
    temprature: number,
    weatherCondition: string,
    tableData: TableType[],
    loading: boolean,
    weeks: WeekType[]
}>();
</script>

<template>
    <el-card  v-loading="loading" style="height: 60vh; width: 800px;">
      <div style="display: flex; justify-content: space-between; align-items: center; height: 50vh;">
        <DayWeather
          :weatherConditionIcon="weatherConditionIcon"
          :temprature="temprature"
          :weatherCondition="weatherCondition"
          :tableData="tableData"
        />
        <WeekWiseWeather :weeks="weeks" />
      </div>
    </el-card>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
