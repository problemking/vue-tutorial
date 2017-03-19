<template>
  <div id="wraper">
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"> 
            <i class="glyphicon glyphicon-time"></i>
            个人计划
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <!--sidebar组件 -->
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
export default {
  name: 'app',
  components: { 
    sidebar
  }
}
</script>

<style>
</style>
