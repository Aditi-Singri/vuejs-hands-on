<template>
<div id="nav">
  <HelloWorld @childName="handleDataPassed"></HelloWorld>
    <p>Data from child: {{ childFname }}</p>
      <router-link :to="{ name: 'EventBind' }">EventBind</router-link> |
      <router-link :to="`/HelloWorld/${childFname}`">HelloWorld</router-link>
  </div>
  <router-view />
  <!-- <EventBind/> -->

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
 name: 'App',
 components: {
    
    HelloWorld
   },
    data() {
    return {
      childFname: 'adi',
    };
  },
  methods: {
    handleDataPassed(data) {
      this.childFname = data;
      this.$router.push(`/HelloWorld/${this.childFname}`);
    },
    
 }
}
</script>

<style>

</style>
