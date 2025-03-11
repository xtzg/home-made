<template>
  <BackGround />
  <Home />
  <Footer />
</template>

<script setup lang="ts">
import Home from './views/Home.vue'
import BackGround from './components/BackGround.vue'
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';
import Footer from './components/Footer.vue';
onMounted(() => {
  ElMessage({
    message: '偷猪怪的主页',
    type: 'info',
    duration: 100000,
    customClass: 'custom-message',
  })
})
</script>

<style scoped></style>
