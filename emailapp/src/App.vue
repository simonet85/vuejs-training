<template>
  <div class="container">
    <div class="mail-box">
      <app-sidebar :messages="messages"></app-sidebar>
      <app-content :messages="messages"></app-content>
    </div>
  </div>
</template>

<script>
// Register the sidebar locally
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";
import messages from "./data/messages";

export default {
  data() {
    return {
      messages: messages,
    };
  },
  components: {
    appSidebar: Sidebar,
    appContent: Content,
  },
};
</script>
