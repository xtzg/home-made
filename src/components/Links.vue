<template>
    <div class="links">
        <div class="line">
            <Icon>
                <IosLink />
            </Icon>
            <span class="title">网站列表</span>
        </div>
        <Swiper v-if="stateLinks.length > 0" :modules="[Pagination, Mousewheel]" :slidesPerView="1" :spaceBetween="40"
            :pagination="{
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'div',
            }" :mousewheel="true" class="links-swiper">
            <SwiperSlide v-for="site in stateLinksList" :key="site as any">
                <el-row class="link-all" :gutter="20">
                    <el-col v-for="(item, index) in site" :span="8" :key="item">
                        <div class="item cards" @click="fetchUrl(item.link)"
                            :style="index < 3 ? 'margin-bottom: 20px;' : 'null'"
                            style="height: 100px;display: flex;align-items: center;justify-content: center;">
                            <Icon size="26">
                                <component :is="siteIcon[item.icon as keyof typeof siteIcon]" />
                            </Icon>
                            <span class="name text-hidden">{{ item.name }}</span>
                        </div>
                    </el-col>
                </el-row>
            </SwiperSlide>
            <div class="swiper-pagination"></div>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { IosLink } from '@vicons/ionicons4'
import { Blog, Cloud, CompactDisc, Compass, Book, Fire, LaptopCode } from '@vicons/fa'
import { Icon } from '@vicons/utils'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Mousewheel } from "swiper/modules";
import stateLinks from '../assets/stateLinks.json'
import { computed } from 'vue'
import axios from 'axios';
import 'swiper/css'
import 'swiper/css/pagination'
import { ElMessage } from 'element-plus';
const siteIcon = {
    Blog,
    Cloud,
    CompactDisc,
    Compass,
    Book,
    Fire,
    LaptopCode,
};

const stateLinksList = computed(() => {
    const result = [];
    for (let i = 0; i < stateLinks.length; i += 6) {
        const subArr = stateLinks.slice(i, i + 6);
        result.push(subArr);
    }
    return result;
});

const fetchUrl = (url: string): void => {
    try {
        new URL(url); // 验证 URL 是否有效
        window.location.href = url;
    } catch (e) {
        ElMessage({
            message: "访问无效，可能网址失效了",
            type: 'error'
        })
    }
}
</script>

<style scoped>
.item:hover {
    transform: scale(1.02);
    background: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
}

.links {
    .line {
        margin: 2rem 0.25rem 1rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        animation: fade 0.5s;

        .title {
            margin-left: 8px;
            font-size: 1.15rem;
            text-shadow: 0 0 5px #00000050;
        }
    }

    .swiper {
        left: -10px;
        width: calc(100% + 20px);
        padding: 5px 10px 0;
        z-index: 0;

        .swiper-slide {
            width: 100% !important;
            height: auto !important;
            box-sizing: border-box !important;
        }

        .swiper-pagination {
            margin-top: 12px !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;

            .swiper-pagination-bullet {
                background-color: #fff !important;
                width: 20px !important;
                height: 4px !important;
                margin: 0 4px !important;
                border-radius: 4px !important;
                opacity: 0.2;
                transition: opacity 0.3s;

                &.swiper-pagination-bullet-active {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
