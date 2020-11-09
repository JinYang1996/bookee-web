<template>
    <div class="slots">
        <h2>slot的用法  可以用在自定义样式上</h2>
        <slotChild>
            <!-- <template v-slot:slot-mid>
                <div class="no-name">
                    我是嵌在子组件里不具有属性名的标签ffff
                </div>
            </template> -->
            <template #default="{ maleSales,user }">
                <div>{{user.firstName}}-{{user.lastName}}</div>
                <div v-for="item in maleSales" :key="item.id">
                    <input type="checkbox" v-model="item.isTrue">
                    <span :style="colorObject">{{item.name}}</span>
                </div>
            </template>
        </slotChild>
        <br>
        <slotChild>
            <template v-slot:slot-mid>
                <div class="no-name">
                    我是嵌在子组件里不具有属性名的标签6666
                </div>
            </template>
            <template v-slot="{feMaleSales}">
                <div v-for="item in feMaleSales" :key="item.id">
                    <input type="checkbox" v-model="item.isTrue">
                    <span :style="{color:'blue'}">{{item.name}}</span>
                </div>
            </template>
        </slotChild>
        <button @click="$router.back(-1)">返回</button>
    </div>
</template>

<script>
import slotChild from '@/components/student/slotChild'
export default {
    name:'slots',
    components:{
        slotChild
    },
    data(){
        return {
            user:{
                firstName:'张',
                lastName:'三'
            },
            colorObject:{
                color:'red'
            }
        }
    }
}
</script>