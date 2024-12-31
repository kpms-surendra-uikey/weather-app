<script setup lang="ts">
defineProps<{ 
    weatherConditionIcon: string,
    minTemprature: number,
    maxTemprature: number,
    weatherCondition: string,
    humidity: string,
    date: string
}>();
</script>

<template>
    <div
        style="width: 100px; margin: 2px; background-color: aliceblue;"
    >
        <p style="padding-top: 15px">{{ date }}</p>
        <el-tooltip :content="weatherCondition" placement="bottom" effect="light">
            <el-icon :size="40">
                <el-image :src="weatherConditionIcon" fit="cover" />
            </el-icon>
        </el-tooltip>
        <p>Humidity</p>
        <p style="padding-bottom: 15px">{{ humidity }}</p>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
