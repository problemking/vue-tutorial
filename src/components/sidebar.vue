<template>
<div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center myfont"> {{ time }} 小时</h1>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">计划个数</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center myfont"> {{ number }}个计划</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
    computed: {
        time() {
          return this.$store.state.totalTime
        },
        number(){
          return this.$store.state.list.length
        }
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myfont{
    color:red;
    font-size:20px;
  }
</style>
