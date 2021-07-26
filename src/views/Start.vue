<template>
  <div>
    <h1>Start</h1>

    <button @click="signup">新規登録</button>
    <button @click="signin">ログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    signup() {
      this.$router.push({ path: "signup" });
    },
    signin() {
      this.$router.push({ path: "signin" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
