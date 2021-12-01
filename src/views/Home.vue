<template>
<div>
    <hello-world />
  <signup />

  <!-- <dashboard /> -->
</div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import signup from "../components/signup.vue";
// import dashboard from './dashboard.vue';


export default {
  name: "Home",

  components: {
    HelloWorld,
    signup,
 
    // dashboard,
  },
};
</script>
