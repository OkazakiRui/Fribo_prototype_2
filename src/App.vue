<template>
  <router-view />
  <links />
</template>

<script>
import links from "./components/Links.vue";

export default {
  components: {
    links,
  },
};
</script>
