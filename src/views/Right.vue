<template>
    <div class="right-content" :class="store.boxOpenState ? 'hidden' : ''">
        <div class="right-top">
            <el-row :gutter="24">
                <el-col :span="12">
                    <Hitokoto />
                </el-col>
                <el-col :span="12">
                    <Time />
                </el-col>
            </el-row>
        </div>
        <Links />
    </div>
</template>


<script setup lang="ts">
import Hitokoto from '../components/Hitokoto.vue';
import Time from '../components/Time.vue';
import Links from '../components/Links.vue';
import { useStore } from '../store/index';

const store = useStore();


</script>

<style scoped>
.right-content {
    width: 40%;
    height: 100%;
    margin-left: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .right-top {
        height: 165px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .el-row {
            width: 100%;
            height: 100%;
            margin: 0 !important;

            .el-col {
                &:nth-of-type(1) {
                    padding-left: 0 !important;
                }

                &:nth-of-type(2) {
                    padding-right: 0 !important;
                }
            }
        }


    }
}
</style>
