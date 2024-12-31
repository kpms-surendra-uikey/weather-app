<script setup lang="ts">
import { ref } from 'vue';
import { fetchWeatherData } from './../api';
import { capitalizeFirstLetter, convertMphToKph, fahrenheitToCelsius } from './../utils';

import Weather from './Weather.vue';

const loading = ref(true);
const latitude = ref(0);
const longitude = ref(0);
const errorMessage = ref('');
const currentDate = ref('');
const temprature = ref(0);
const weatherCondition = ref('');
const weatherConditionIcon = ref('');
const locationName = ref('');

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

const tableData: TableType[] = ref([]);
const weeks: WeekType[] = ref([]);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const success = async (position) => {
  latitude.value  = position.coords.latitude;
  longitude.value = position.coords.longitude;
  fetchWeatherData(latitude.value, longitude.value).then(function (response) {
    loading.value = false;
    const data = response.data;
    
    const utcSeconds = data.current.dt;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    currentDate.value = d;
    tableData.value.push({
      humidity: data.current.humidity + ' %',
      wind_speed: convertMphToKph(data.current.wind_speed) + ' Km/hr'
    });
    temprature.value = fahrenheitToCelsius(data.current.temp);
    weatherCondition.value = capitalizeFirstLetter(data.current.weather[0].description);
    weatherConditionIcon.value = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

    data.daily.map((day, index) => {
      const d1 = new Date(0);
      d1.setUTCSeconds(day.dt);
      if( index < 4 ) {
        weeks.value.push({
          'id': index+1,
          'weatherConditionIcon': `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          'minTemprature': fahrenheitToCelsius(day.temp.min),
          'maxTemprature': fahrenheitToCelsius(day.temp.max),
          'weatherCondition': capitalizeFirstLetter(day.weather[0].description),
          'humidity': day.humidity + ' %',
          'date': index === 0 ? 'Today' : String(d1.getUTCDate()).padStart(2, "0") + ", " + months[d1.getUTCMonth()]
        })
      }
    })
  })
  .catch(function (error) {
      console.log(error);
  });
};

const error = (err) => {
  console.log(error)
};

// This will open permission popup
navigator.geolocation.getCurrentPosition(success, error);

defineProps<{ msg: string }>()

const count = ref(0);
</script>

<template>
  <div style="text-align: center;">
    <h1>{{ msg }}</h1>
    <div>
      <h5>{{ currentDate }}</h5>
    </div>
    <p>{{ errorMessage }} </p>
    <el-space>
      <Weather
        :loading="loading"
        :weatherConditionIcon="weatherConditionIcon"
        :temprature="temprature"
        :weatherCondition="weatherCondition"
        :tableData="tableData"
        :weeks="weeks"
      />
    </el-space>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
