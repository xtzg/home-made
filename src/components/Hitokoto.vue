<template>
    <div class="weather cards" @click="getHitokotoData">
        <div class="content">
            <span class="text">
                {{ hitokoto.hitokoto }}
            </span>
            <span class="form">
                -「&nbsp;{{ hitokoto.from }}&nbsp;」
            </span>
        </div>

    </div>
</template>

<script setup>
import getHitokoto from '../api/index.js';
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { debounce } from 'lodash';
const errorMessage = {
    'hitokoto': '这里应该显示一句话',
    'from': '无名'
}
const hitokoto = ref({
    hitokoto: '',
    from: '',
});

const getHitokotoData = async () => {
    try {
        const res = await getHitokoto()
        hitokoto.value.hitokoto = res.hitokoto
        hitokoto.value.from = res.from
        return hitokoto
    } catch (error) {
        ElMessage.error('获取名言失败')
        hitokoto.value.hitokoto = errorMessage.hitokoto
        hitokoto.value.from = errorMessage.from
    }
};

// 创建一个防抖化的获取数据函数
const debouncedGetHitokoto = debounce(getHitokotoData, 10000);

onMounted(() => {
    getHitokotoData() // 初始加载时立即获取数据
});
</script>

<style scoped>
.weather {
    width: 100%;
    height: 100%;
    padding: 20px;
    animation: fade 0.5s;

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .text {
            font-size: 1.1rem;
        }

        .form {
            font-weight: bold;
            align-self: flex-end;
            margin-top: 10px;
            font-size: 1.1rem
        }
    }
}
</style>
