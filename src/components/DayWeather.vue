<script setup lang="ts">
interface TableType {
  humidity: string
  wind_speed: string
}

defineProps<{ 
    weatherConditionIcon: string,
    temprature: number,
    weatherCondition: string,
    tableData: TableType[]
}>();

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>

<template>
    <div style="width: 40%;">
        <div style="display: inline-flex;">
          <el-icon :size="90">
            <el-image :src="weatherConditionIcon" fit="cover" />
          </el-icon>
          <h2>{{ temprature }}°C</h2>
        </div>
        <h2>{{ weatherCondition }}</h2>
        <el-table :data="tableData" style="text-align: center;">
          <el-table-column align="center" label="Humidity" prop="humidity" />
          <el-table-column align="center" label="Wind Speed" prop="wind_speed" />
        </el-table>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
