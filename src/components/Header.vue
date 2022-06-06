<template>
  <div class="header">
      header 
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
interface Book {
  name: string;
}
export default defineComponent({
  props:{
    id:String,
  },
  data(){
    return {
      name:"123"
    } as Book
  },
  mounted(){
    this.name.charAt(0)
  },
  computed:{
    bookName(): string{
      return "book"+this.name;
    }
  }
})
</script>
<style lang="less" scoped>
.header{
  color:white;
}
</style>