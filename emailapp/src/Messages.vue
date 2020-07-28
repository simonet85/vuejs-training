<template>
  <div>
    <table class="table table-inbox table-hover" v-if="messages.length > 0">
      <tbody>
        <tr
          v-for="(message, index) in messages"
          :key="index"
          :class="{
            unread: typeof message.isRead !== 'undefined' && !message.isRead,
          }"
          @click="openMessage(message)"
        >
          <td>
            <!-- <--Binding important class to the click event -->
            <a
              href="#"
              v-if="typeof message.isImportant !== 'undefined'"
              @click.prevent.stop="message.isImportant = !message.isImportant"
            >
              <i
                :class="['fa', 'fa-star', { important: message.isImportant }]"
              ></i>
            </a>
          </td>
          <td>{{ message.from.name }}</td>
          <td>{{ message.subject }}</td>
          <td>
            <i
              v-if="message.attachments.length > 0"
              class="fa fa-paperclip"
            ></i>
          </td>
          <td class="text-right">{{ message.date.fromNow() }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else="">No Messages here yet</p>
  </div>
</template>

<script>
import { eventBus } from "./main";
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openMessage: function (message) {
      eventBus.$emit("changeView", {
        tag: "app-view-message",
        title: message.subject,
        data: {
          message: message,
        },
      });
    },
  },
};
</script>
