<template>
  <div>
    <h1>新規登録</h1>
    <send-email />
  </div>
</template>

<script>
import SendEmail from "../components/SendEmail.vue";
export default {
  components: {
    SendEmail,
  },
};
</script>
