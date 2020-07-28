Vue.component("plan-picker", {
  template: "#plan-picker-template",
  data() {
    return {
      plans: ["The Hacker", "The Single", "The Curious", "The Addict"],
    //   selectedPlan: null,
    };
  },
  methods: {
    selectedPlan(plan) {
      this.selectedPlan = plan;
    },
  },
});
Vue.component("plan", {
  template: "#plan-template",
  props: ["name"],
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    select() {
      this.$emit("select", this.name);
      this.selected = true;
    },
  },
});
new Vue({
  el: "#app",
  //   data: {
  //     plans: ["The Hacker", "The Single", "The Curious", "The Addict"],
  //   },
});
