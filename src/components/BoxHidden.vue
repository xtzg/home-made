<template>
    <div class="box cards" :class="store.boxOpenState ? '' : 'hidden'">
        <div class="top">
            <setting-two class="setting" theme="outline" size="26" fill="#ffffff" />
            <close-one class="close" @click="store.boxOpenState = false" theme="outline" size="26" fill="#ffffff" />
        </div>
        <div class="content">

            <div class="time-capsule">
                <div class="title">
                    <hourglass theme="outline" size="26" fill="#ffffff" style="margin-right:10px" />
                    时间胶囊
                </div>
                <div class="all-capsule" v-for="(item, index) in set" :key="item">
                    <div class="item-title"
                        style="display:flex;flex-direction:row;align-items:space-between;justify-content:space-between;margin-bottom:10px">
                        <span class="percentage">本{{ setText[index + 1] }}已经度过 {{ time.countDiff(item).pass }} {{
                            setText[index] }}</span>
                        <span class="remaining">剩余 {{ time.countDiff(item).remain }} {{ setText[index] }}</span>
                    </div>
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="time.countDiff(item).percentage"
                        class="progress-bar" />
                </div>
            </div>
            <div class="more-content">
                更多内容
            </div>
        </div>

    </div>
</template>

<script setup>
import { useStore } from '../store/index.js'
import { CloseOne, SettingTwo, Hourglass } from '@icon-park/vue-next';
import { getTimeCapsule } from '../utils/getTime.js'
import { ref } from 'vue'
const time = ref(getTimeCapsule())
setInterval(() => {
    time.value = getTimeCapsule()
}, 60000)
const store = useStore()

const set = ['minute', 'hour', 'day', 'month']
const setText = ['分钟', '小时', '天', '月', '年']


</script>

<style scoped>
.box {
    flex: 1 0 0%;
    margin-left: 0.75rem;
    height: 65%;
    max-width: 40%;
    position: relative;
    animation: fade 0.5s;

    .top {
        position: absolute;
        top: 10px;
        right: 18px;
        display: flex;
        align-items: center;
        gap: 15px;

        .close:hover {
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            transform: scale(1.2);
        }

        .setting:hover {
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            transform: scale(1.2);
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 30px;
        width: 100%;
        height: 100%;

        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0.2rem 0 1.5rem;
            font-size: 1.1rem;
        }
    }
}
</style>
