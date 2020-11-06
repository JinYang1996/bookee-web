<template>
    <div class="blogMenu">
        <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{tab}}</button>
        <component :is="changeTab" class="tabContent"></component>
        <button @click="$router.back(-1)">返回</button>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return{
            currentTab:'home',
            tabs:['Home','Post','Get']
        }
    },
    computed:{
        changeTab(){
            return 'tab-'+this.currentTab.toLowerCase()
        }
    }
}
Vue.component('tab-home',{
    template:`<div>This is home</div>`
})
Vue.component('tab-post',{
    template:`<div>This is post</div>`
})
Vue.component('tab-get',{
    template:`<div>This is get</div>`
})
</script>
<style>
    .tabContent{
        width: 500px;
        height: 200px;
        margin: 0px auto;
        border: 1px solid blue;
    }
    .blogMenu{
        text-align: center;
    }
</style>