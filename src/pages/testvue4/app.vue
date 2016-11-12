<template lang="html">
<div id="app">
    <div class="header">
        <!-- <h1>海河大数据</h1> -->
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- <router-link> will be rendered as an `<a>` tag by default -->
        <!--         
        <router-link to="/">Go to login</router-link>
        <router-link to="/dataplatform">Go to DataShow</router-link> -->
    </div>
    <div class="content" id="router-view">
        <transition :name="transitionName">
            <router-view></router-view>    
        </transition>
    </div>
    <div class="footer"></div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'MainAPP',
                transitionName: 'fade'
            }
        }, 
        watch: {
            '$route': function(to, from) {
                var random = parseInt(Math.random() * 12138) % 3;
                var transitionType = ['fade', 'slide-fade', 'bounce'];
                this.transitionName = transitionType[random]; 
            }
        }
    }
</script>
<style lang="less" >
/* 进入和退出动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}


</style>
