<script>
export default {
   name: 'EventBind',
  data() {
    return {
      message: 'aa',
      message1: '',
      fruits:[],
       items: [{ message: 'Foo' }, { message: 'Bar' }],
       name:'',
       nestedFullName:{
        fname:'aditi',
        lname:'singri'
       }
    }
  },
//   beforeMount() {
//     console.log(`the component is should now mount.`)
//   },
//   mounted() {
//     console.log(`the component is should now mount.`)
//   },
  watch:{
        message:{
            handler(newValue,oldValue)
            {
                
                    console.log("new value is",newValue);
                    console.log("old value is",oldValue);

            },
            immediate: true

        },
         "nestedFullName.fname":
            function(newValue,oldValue)
            {
                console.log("new value is",newValue);
                console.log("old value is",oldValue);
            },
            immediate: true,

    },
  }

</script>

<template>
	<span>Multiline message is:</span>
	<p style="white-space: pre-line;">{{ message }}</p>
	<textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br>
    <input type="checkbox" name="apple" id="" value="apple" v-model="fruits"> apple
    <input type="checkbox" name="banana" id="" value="banana" v-model="fruits"> banana
    <input type="checkbox" name="orange" id="" value="orange" v-model="fruits"> orange
    <br>
    <p v-for="(fruit,index) of fruits" :key="fruit">{{fruit}}{{index}}</p>
    <br>
    <input type="radio" name="apple" id="" value="apple" v-model="message1" > apple
    <input type="radio" name="apple" id="" value="banana" v-model="message1" > banana
    <input type="radio" name="apple" id="" value="orange" v-model="message1"> orange
    <br>
        <p>{{ message1 }}</p>
        <br>
        <p>select names</p>
<select name="names" id="" v-model="name">
    <option value="aditi">aditi</option>
    <option value="adira">adira</option>
    <option value="anusha">anusha</option>
</select>
<p>{{name}}</p>

<input type="text" name="fname" id="" v-model="nestedFullName.fname">
<input type="text" name="lname" id="" v-model="nestedFullName.lname">

</template>