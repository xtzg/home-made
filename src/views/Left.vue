<template>
    <div class="left-content">
        <Logo />
        <Message />
        <Social />
    </div>
</template>

<script setup lang="ts">
import Logo from '../components/Logo.vue';
import Message from '../components/Message.vue';
import Social from '../components/Social.vue';
</script>

<style scoped>
.left-content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 60px;
    gap: 10px;
    max-width: 460px;

    @media (max-width: 720px) {
        width: 100%;
        margin-right: 0;
    }
}
</style>