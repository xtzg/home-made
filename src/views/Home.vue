<template>
    <div class="home-container">
        <div class="content-box">
            <Left v-show="store.isMobile ? !store.mobileMenuState : 'true'" />
            <Right v-show="store.isMobile ? store.mobileMenuState : !store.boxOpenState" />
            <BoxHidden v-show="store.boxOpenState" />
            <Icon class="menu-icon cards" size="26" v-show="store.isMobile"
                @click="store.mobileMenuState = !store.mobileMenuState">
                <Menu />
            </Icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import Left from './Left.vue'
import Right from './Right.vue'
import BoxHidden from '../components/BoxHidden.vue'
import { useStore } from '../store/index.js'
import { Menu } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { onMounted, onUnmounted } from 'vue'

const store = useStore();

onMounted(() => {
    store.initWindowListener()
})
onUnmounted(() => {
    window.removeEventListener('resize', store.checkMobileWidth)
})
</script>

<style scoped>
.home-container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 0.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 0;

    .content-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0 0.75vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .menu-icon {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 88%;
            left: calc(50% - 28px);
            width: 56px;
            height: 34px;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 6px;
            transition: transform 0.3s;
            animation: fade 0.5s;

            @media (min-width: 720px) {
                display: none;
            }
        }
    }

}
</style>
