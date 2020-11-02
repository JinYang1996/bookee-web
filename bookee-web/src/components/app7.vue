<template>
    <div id="app-7">
        <p>这是没有用html标签：{{htmlMessage}}</p>
        <p>这是用了html标签：<span v-html="htmlMessage"></span></p>
        <button v-bind:disabled="isDisabled">测试disabled属性</button>
        <a v-bind:href="url">绑定url</a>
        <a v-bind:[attributeName]="url">动态参数绑定</a>
        <span>message:{{message}}</span>
        <span>reverseMessage:{{reverseMessage}}</span>
        <p>我的全名是：{{fullName}}</p>
        <input v-model="firstName">
        <input v-model="lastName">
        <p>------------------------------</p>
        <p>输入全名：</p><input type="text" v-model="aChangefullName">
        <p :class="{'text-danger':hasError}">姓：{{afirstName}}</p>
        <p :style="styleObject">名：{{alastName}}</p>
        <p>v-if=====================</p>
        <p v-if="ifTrue">我是if</p>
        <p v-else>woshi else</p>
        <button @click = "changeIf()">改变if的值</button>
        <p>测试key===============</p>
        <div v-if="loginType=='userName'">
            <label for="">Username</label>
            <input placeholder="Enter your userName" key="username-login">
        </div>
        <div v-else>
            <label for="">Email</label>
            <input placeholder="Enter your Email" key="email-login">
        </div>
        <button @click="changeLoginType()">change loginType</button>
        <p>v-for遍历数组================</p>
        <ul>
            <li v-for="(item,index) of notices" :key="index">
                {{item.message}} - {{index}}
            </li>
        </ul>
        <p>v-for遍历对象==================</p>
        <ul>
            <li v-for="(value,name,index) in studentObject" :key="index">
                {{name}} : {{value}}
            </li>
        </ul>
        <p>v-for遍历过滤后的数组===============</p>
        <ul>
            <li v-for="item in eventNumbers" :key="item">{{item}}</li>
        </ul>
        <p>v-for遍历过滤嵌套数组</p>
        <ul v-for="(set,index) in sets" :key="index">
            <li v-for="s in even(set)" :key="s">
                {{s}}
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return{
            a:1,
            htmlMessage:'<span style="color:red">这个应该是红色</span>',
            isDisabled:null,
            url:"https://baidu.com",
            attributeName:"href",
            message:"Hello",
            firstName:"jack",
            lastName:"chen",
            fullName:"jack chen",
            afirstName:"lucy",
            alastName:"jia",
            afullName:"lucy jia",
            isActive:true,
            isFoo:true,
            hasError:true,
            styleObject:{
                color:'red',
                'font-size':'20px'
            },
            ifTrue:true,
            loginType:null,
            notices:[
                {message:'张三'},
                {message:'李四'}
            ],
            studentObject:{
                name:'总公司',
                age:19,
                pwd:'Class2018'
            },
            numbers:[1,2,3,4,5,6,7,8,9],
            sets:[
                [1,2,3,4,5,6,7,8,9],
                [11,12,13,14,15,16,17,18,19]
            ]
        }
    },
    created:function(){
        console.log('a is'+this.a);
    },
    computed:{
        reverseMessage:function(){
            return this.message.split('').reverse().join('');
        },
        aChangefullName:{
            get:function(){
                return this.afirstName+' '+this.alastName
            },
            set:function(val){
                var names = val.split(' ')
                this.afirstName = names[0]
                this.alastName = names[names.length-1]
            }
        },
        eventNumbers:function(){
            return this.numbers.filter(function(val){
                console.log(val%2);
                return val%2===0
            })
        }
    },
    watch:{
        firstName:function(val){
            this.fullName = val+' ' + this.lastName
        },
        lastName:function(val){
            this.fullName = this.firstName+''+val
        }
    },
    methods:{
        changeIf(){
            this.ifTrue = this.ifTrue==true?false:true
        },
        changeLoginType(){
            this.loginType = this.loginType=='userName'?'Email':'userName'
        },
        even(val){
            return val.filter(num=> {
                return num % 2==0
            })
        }
    }
}
</script>
<style>
    .text-danger{
       color:blue 
    }
</style>