Vue.component("click-count", {
  template: '<button @click="count++">{{count}}</button>',
  data() {
    return {
      count: 0,
    };
  },
});

let vm = new Vue({
  el: "#app",
});
