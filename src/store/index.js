
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        boxOpenState: false,
        mobileMenuState: false, //移动端控制切换页面
        isMobile   : false, //移动端控制打开侧边栏
    }),
    getters: {

    },
    actions: {
        checkMobileWidth() {
            if (window.innerWidth < 720) {
                this.isMobile = true
            } else {
                this.isMobile = false
            }
            if (!this.isMobile) {
                this.mobileMenuState = false
            }
        },
        initWindowListener(){
            this.checkMobileWidth()
            window.addEventListener('resize', ()=>{
                this.checkMobileWidth()
            })
        }
    }
})