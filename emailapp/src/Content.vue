<template>
  <aside class="lg-side">
    <div class="inbox-head">
      <h3>{{ currentView.title }}</h3>
      <!-- Dynamic component -->
    </div>
    <keep-alive>
      <component :is="currentView.tag" :data="currentView.data"></component>
    </keep-alive>
  </aside>
</template>
<script>
import Inbox from "./Inbox.vue";
import Sent from "./Sent.vue";
import Important from "./Important.vue";
import Trash from "./Trash.vue";
import ViewMessage from "./ViewMessage.vue";
import { eventBus } from "./main";
export default {
  //Adding props
  props: {
    messages: {
      required: true,
      type: Array,
    },
  },
  // Using the lifecycle hook for listening to the event
  created() {
    eventBus.$on("changeView", (data) => {
      let temp = [{ tag: data.tag, title: data.title, data:data.data || {} }];
      this.history = temp.concat(this.history.splice(0));
    });
  },
  data() {
    return {
      history: [
        { 
          tag: "app-inbox",
          title: "Inbox",
          data: {
                messages: null 
          } 
        }
        ],
    };
  },
  computed: {
    currentView() {
      let current = this.history[0];
      current.data.messages = this.messages;
      return current;
    },
    previousView(){
      return typeof this.history[1] !== 'undefined' ? this.history[1] : null;
    }
  },
  components: {
    appInbox: Inbox,
    appSent: Sent,
    appImportant: Important,
    appTrash: Trash,
    appViewMessage: ViewMessage,
  },
};
</script>
