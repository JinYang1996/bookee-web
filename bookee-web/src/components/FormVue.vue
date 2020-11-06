<template>
    <div>
        <div>
            <span>多行文本</span>
            <p style="white-space:pre-line;">{{message}}</p>
            <textarea name="moreText" id="moreText" placeholder="请输入" v-model="message" cols="30" rows="10"></textarea>
        </div>
        <div>
            <span>单个复选框</span>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <div>
            <span>多个复选框</span>
            <input type="checkbox" id="jack" value="jack" v-model="studentNames">
            <label for="jack">jack</label>
            <input type="checkbox" id="lucy" value="lucy" v-model="studentNames">
            <label for="lucy">lucy</label>
            <input type="checkbox" id="tom" value="tom" v-model="studentNames">
            <label for="tom">tom</label>
            <p></p>
            <span>复选框的值：</span>
            <p>{{studentNames}}</p>
        </div>
        <div>
            <span>单选按钮</span>
            <input type="radio" id="one" value="one" v-model="picked">
            <label for="one">one</label>
            <br>
            <input type="radio" id="two" value="two" v-model="picked">
            <label for="two">two</label>
            <br>
            <span>单选的值：</span>
            <p>{{picked}}</p>
        </div>
        <div>
            <span>选择框：</span>
            <select name="nameList" id="nameList" v-model="nameList">
                <option disabled value="">请选择</option>
                <option v-for="name in nameArr" :value="name.value" :key="name.label">
                    {{name.label}}
                </option>
            </select>
            <br>
            <span>选择框的值：</span>
            <p>{{nameList}}</p>
        </div>
        <div>
            <span>复选框的值：</span>
            <input type="checkbox" v-model="checkTrueFalse" true-value="yes1" false-value="no1">
        </div>
        <button-counter></button-counter>
        <div :style="{'font-size':postFontSize+'em'}">
            <blog-post v-for="blog in blogList" :key="blog.id" :blog="blog" @fontLarger="changeBlogTextSize"></blog-post>
        </div>
        <alert-box>Something bad happened!</alert-box>
    </div>
</template>


<script>
import Vue from 'vue'
export default {
    data(){
        return{
            message:'',
            checked:null,
            studentNames:[],
            picked:'',
            nameList:[],
            nameArr:[
                {label:'A',value:'a'},
                {label:'B',value:'b'},
                {label:'C',value:'c'}
            ],
            checkTrueFalse:'',
            blogList:[
                {'id':'111','title':'这是博客111','content':'1111111'},
                {'id':'222','title':'这是博客222','content':'2222222'},
                {'id':'333','title':'这是博客333','content':'3333333'},
            ],
            postFontSize:1
        }
    },
    watch:{
        checkTrueFalse(){
            console.log('======='+this.checkTrueFalse);
        }
    },
    methods:{
        changeBlogTextSize(enlargerAmount){
            this.postFontSize += enlargerAmount;
        }
    }
}
Vue.component('button-counter',{
    data(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">click me {{count}}</button>'
})
Vue.component('blog-post',{
    props:['blog'],
    template:`
    <div class='blog-post'>
        <h3>{{blog.title}}</h3>
        <button @click="$emit('fontLarger',0.1)">click me font larger</button>
        <div v-html='blog.content'></div>
    </div>
    `
})
Vue.component('alert-box',{
    template:`
        <div>
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
})
</script>