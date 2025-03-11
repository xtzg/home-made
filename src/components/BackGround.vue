<template>
    <div class="background">
        <!-- <img class="bg" src="/images/preview.jpg" alt="background"> -->
        <video class="bg" src="/videos/background.mp4" autoplay muted loop></video>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
