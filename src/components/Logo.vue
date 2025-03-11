<template>
    <div class="logo">
        <div class="logo-icon">
            <el-icon size="40">
                <UserFilled />
            </el-icon>
        </div>
        <div class="logo-text">
            <span style="font-size: 5rem;">xtzg</span>
            <span style="margin-left: 6px;
    font-size: 2rem;">.top</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.logo {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 460px;

    .logo-text {
        width: 100%;
        padding-left: 22px;
        transform: translateY(-8px);
        font-family: "Pacifico-Regular";
    }
}
</style>