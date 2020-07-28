<template>
  <div class="container" style="margin-top:200px">
    <transition
      enter-active-class="animate__pulse"
      leave-active-class="animate__zoomOut"
    >
      <p v-if="show" style="width:200px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure
        possimus aliquam ducimus quis sapiente. Fuga officiis ipsam dignissimos
        libero saepe modi qui quo? Iure voluptas eos quo facilis ut!
      </p>
    </transition>
    <button class="btn btn-primary" @click="show = !show">Click me</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      show: false,
    };
  },
  props: {},
};
</script>
<style>
/* .fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active , .fade-leave-active{
  transition: opacity 1s;
} */
</style>
