<template>
  <div>
    <h1>ログイン</h1>
    <p><input type="text" placeholder="ユーザーネーム" /></p>
    <p><input type="password" placeholder="パスワード" /></p>
    <p>
      <label><input type="checkbox" />ログイン状態を保存する</label>
    </p>
    <p><button>ログイン</button></p>
    <p><button>パスワードを忘れた</button></p>
    <p>または <button>Googleでログイン</button></p>
    <p>
      アカウントをお持ちでない方は<router-link to="signup">こちら</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
