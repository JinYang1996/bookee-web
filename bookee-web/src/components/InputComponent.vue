<template>
    <div>
        <base-input required placeholder="enter your name" @focus="onFocus()"></base-input>
        <span>{{checkVue}}</span>
        <base-checkbox v-model="checkVue"></base-checkbox>
        <span>{{doc.title}}</span>
        <text-document :title.sync="doc.title" ></text-document>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return{
            checkVue:true,
            doc:{
                title:'6666'
            }
        }
    },
    methods:{
        onFocus(){
            console.log(11111111111);
        }
    }
}
Vue.component('base-input',{
    inheritAttrs:false,
    props:['label','value'],
    computed:{
        inputListeners(){
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input(event){
                        vm.$emit('input',event.target.value)
                    }
                }
            )
        }
    },
    template:`
        <label>
            {{label}}
            <input
                v-bind="$attrs"
                v-bind:value="value"
                v-on="inputListeners"
            >
        </label>
    `
})
Vue.component('base-checkbox',{
    model:{
        prop:'checked',
        event:'change'
    },
    props:{
        checked:Boolean
    },
    template:`
        <input
            type='checkbox'
            :checked='checked'
            @change="$emit('change',$event.target.checked)"
        >
    `
})
Vue.component('text-document',{
    props:['doc'],
    template:`
        <button @click="$emit('update:title',555)">点击</button>
    `
})
</script>