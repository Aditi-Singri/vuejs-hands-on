<template>
 <p>{{fullname.fname}} {{fullname.lname}}</p>
 <button @click="increment()">increment</button>
<button v-on:click="decrement">decrement</button>
<p>{{number}}</p>
 <p v-if="check!=0"> {{publishedBooksMessage}}</p>
<input type="text" @keypress.enter="passData()" v-model="fullname.fname">
<!-- <input type="button" value="see changes" @click="passData"> -->
<p>{{anothername}}</p>
<h1>HelloWorld !! The user is {{ $route.params.name }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
 
  data(){
    return{
      number:0,
      check:0,
      fullname:{
      fname:"Aditi",
      lname:"Singri"
      },
      anothername:""
    }
  },
  computed:{
publishedBooksMessage() {
      // `this` points to the component instance
      return this.check ==1 ? 'Yes' : 'No'
    }  
    },
    methods: {
        increment() {
          this.number+=1
          this.check=1
        },
        decrement() {
          this.number-=1
          this.check=2
        },
        changename(){
          this.anothername=this.fullname.fname
        },
        passData() {
      this.$emit('childName', this.fullname.fname);
    }
}

}

</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
