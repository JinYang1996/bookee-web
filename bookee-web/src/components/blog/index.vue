<template>
    <div>
        <div>
            <h2>这是我的博客</h2>
        </div>
        <div>
            <button v-for="tab in tabs" :key="tab" @click="currentTab=tab">{{tab}}</button>
        </div>
        <div>
            <keep-alive>
                <components :is="currentTab"></components>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import TabArtical from "@/components/blog/TabArtical"
import Archive from "@/components/blog/Archive"

export default {
    name:'blogIndex',
    components:{
        TabArtical,
        Archive
    },
    data(){
        return{
            currentTab:'TabArtical',
            tabs:['TabArtical','Archive']
        }
    }
}
</script>
<style>
    button{
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
    }
</style>
