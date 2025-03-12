<template>
    <div class="message cards" @click="handleClick">
        <div class="content"
            style="display: flex;flex-direction: row; align-items: center; justify-content: space-between;">
            <Icon size="26" style="transform:translateY(-10px) ;">
                <QuoteLeft />
            </Icon>
            <div class="text"
                style="margin:0.75rem 1rem;line-height:2rem;margin-top: auto;transition:opacity 0.2s;display: flex;flex-direction: column ;align-items: flex-start;justify-content: flex-start;">
                <p>{{ store.boxOpenState ? message.first : "你好！" }}</p>
                <p>{{ store.boxOpenState ? message.second : "欢迎光临" }}</p>
            </div>
            <Icon size="26" style="transform: translateY(10px);">
                <QuoteRight />
            </Icon>
        </div>
    </div>
</template>


<script setup lang="ts">
import { QuoteLeft, QuoteRight } from '@vicons/fa';
import { Icon } from '@vicons/utils'
import { useStore } from '../store/index'
import { ElMessage } from 'element-plus'

const store = useStore()

const message = {
    "first": "恭喜你",
    "second": "发现隐藏盒子"
}
const handleMobileClick = () => {
    ElMessage({
        message: '移动端暂未开放隐藏盒子功能',
        type: 'warning',
        showClose: true,
    })
}
const handleClick = () => {
    if (store.isMobile) {
        handleMobileClick()
        return
    }
    else {
        store.boxOpenState = !store.boxOpenState;
        if (store.boxOpenState) {
            ElMessage({
                message: '隐藏盒子',
                type: 'success',
                showClose: true,
            })
        } else {
            ElMessage({
                message: '回到主页',
                type: 'success',
                showClose: true,
            })
        }
    }
}
</script>

<style scoped>
.message {
    width: 100%;
    padding: 1rem;
    margin-top: 3.5rem;
    max-width: 460px;
    animation: fade .5s;
}
</style>
