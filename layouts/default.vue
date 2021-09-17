<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>