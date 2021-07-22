<template>
  <div>
    <h1>Start</h1>

    <button @click="signup">新規登録</button>
    <button>ログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    signup() {
      router.push("signup");
    },
  },
};
</script>

<style lang="scss" scoped></style>
