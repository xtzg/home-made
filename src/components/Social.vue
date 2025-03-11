<template>
    <div class="social">
        <div class="Links">
            <a v-for="item in socialLinks" :key="item.name" :href="item.url" target="_blank"
                @mouseenter="socialTip = item.tip" @mouseleave="socialTip = '通过这里联系俺'">
                <img class="icon" :src="item.icon" alt="social icon" height="24">

            </a>
        </div>
        <span class="tip">{{ socialTip }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import socialLinks from '../assets/socialLinks.json';
const socialTip = ref('通过这里联系俺');
</script>

<style scoped>
.social {
    margin-top: 1rem;
    /* overflow: hidden; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 460px;
    width: 100%;
    height: 42px;
    background-color: transparent;
    border-radius: 6px;
    backdrop-filter: blur(0);
    animation: fade 0.5s;
    transition:
        background-color 0.3s,
        backdrop-filter 0.3s;

    &:hover {
        background-color: #00000040;
        backdrop-filter: blur(5px);

        .tip {
            display: block;
            /* width: 100%; */
            white-space: nowrap;
        }
    }

    .Links {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            display: inherit;

            .icon {
                margin: 0 12px;

                &:hover {
                    transform: scale(1.1);
                }

                &:active {
                    transform: scale(1);
                }
            }
        }
    }

    .tip {
        /* display: none; */
        white-space: nowrap;
        min-width: 100px;
        margin-right: 12px;
        animation: fade 0.5s;
    }
}
</style>
