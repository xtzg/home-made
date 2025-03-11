<template>
    <div class="home-container">
        <div class="content-box">
            <Left />
            <Right v-show="!store.boxOpenState" />
            <BoxHidden v-show="store.boxOpenState" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Left from './Left.vue'
import Right from './Right.vue'
import BoxHidden from '../components/BoxHidden.vue'
import { useStore } from '../store/index.js'

const store = useStore();

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

    }

}
</style>
