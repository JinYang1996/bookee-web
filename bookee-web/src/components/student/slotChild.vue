<template>
    <div class="slot-child">
        <slot name="slot-mid" :user="user">666666</slot>
        <slot :maleSales="maleSales" :user="user" :feMaleSales="feMaleSales">
            <div v-for="item in maleSales" :key="item.id">
                <input type="checkbox" v-model="item.isTrue">
                <span>{{item.name}}</span>
            </div>
        </slot>
        我是slot组件
    </div>
</template>

<script>
export default {
    name:'slotChild',
    data(){
        return {
            user:{
                firstName:'李',
                lastName:'四'
            },
            maleSales:[
                {
                    id:'111',
                    name:'jack',
                    isTrue:true
                },
                {
                    id:'222',
                    name:'lucy',
                    isTrue:true
                },
                {
                    id:'333',
                    name:'tom',
                    isTrue:false
                }
            ],
            feMaleSales:[
                {
                    id:'111',
                    name:'jack',
                    isTrue:null
                },
                {
                    id:'222',
                    name:'lucy',
                    isTrue:null
                },
                {
                    id:'333',
                    name:'tom',
                    isTrue:true
                }
            ]
        }
    }
}
</script>