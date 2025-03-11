<template>
    <div class="right cards">
        <div class="time">
            <div class="date">
                <span>{{ nowTime.year }} &nbsp;年 &nbsp;</span>
                <span>{{ nowTime.month }} &nbsp;月 &nbsp;</span>
                <span>{{ nowTime.day }} &nbsp;日 &nbsp;</span>
            </div>
            <div class="text">
                {{ nowTime.hour }}:{{ nowTime.minute }}:{{ nowTime.second }}
            </div>

        </div>
        <span>天气数据获取api</span>
    </div>
</template>

<script setup lang="ts">
import { getCurrentTime } from '../utils/getTime.js'
import { ref } from 'vue'
const nowTime = ref(getCurrentTime())
setInterval(() => {
    nowTime.value = getCurrentTime()
}, 1000)

</script>

<style scoped>
.right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .time {
        height: auto;
        align-items: center;
        font-size: 1.1rem;
        text-align: center;

        .text {
            display: inline-block;
            /* 让 div 根据内容调整大小 */
            height: fit-content;
            /* 高度根据内容调整 */
            min-height: min-content;
            margin-top: 25px;
            font-size: 3.25rem;
            letter-spacing: 2px;
            font-family: "UnidreamLED";
        }

        @media (min-width: 1201px) and (max-width: 1280px) {
            font-size: 1rem;
        }

        @media (min-width: 911px) and (max-width: 992px) {
            font-size: 1rem;

            .text {
                font-size: 2.75rem;
            }
        }
    }
}
</style>
