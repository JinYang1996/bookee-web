<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="vue-det">
      <li>{{userName}}</li>
      <li>{{age}}</li>
      <li>{{details()}}</li>
      <li v-bind:title="userName">haha</li>
      <p v-if="seen">看的到我</p>
    </div>
    <ol>
      <li v-for="(value,index) in students" :key="index">
        {{value.text}},{{index}}
      </li>
    </ol>
    <p>{{inputMessage}}</p>
    <input type="text" v-model="inputMessage">
    <button v-on:click="reverseMessage">反转信息</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName:"zhangsan"+new Date().toLocaleString(),
      age:"18",
      seen:true,
      students:[
        {text:"wangwu"},
        {text:"lisi"},
        {text:"二娃"}
      ],
      inputMessage:"Hello Vue.js"
    }
  },
  methods:{
      details:function(){
        return this.userName+"年龄是"+this.age+"岁";
      },
      reverseMessage:function(){
        this.inputMessage = this.inputMessage.split('').reverse().join('');
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
