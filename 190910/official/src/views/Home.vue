<template>
  <div class="home">
    <Top msg="Welcome to Your Vue.js App"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import observer from "@/utils/observer";

export default {
  name: 'home',
  components: {
    Top
  },
  mounted() {
    observer(this);
  }
}
</script>