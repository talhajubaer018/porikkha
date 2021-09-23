<template>
  <header class="bg-customBlue-800 text-white pt-4 pb-4 px-4 sm:px-0">
    <div class="container mx-auto flex flex-row place-items-center">
      <div class="logo">
        <a href="/pages/index.vue">
          <img class="w-36" src="../assets/images/logo.png" alt="" />
        </a>
      </div>
      <div class="hidden profile ml-auto sm:flex flex-row place-items-center gap-2">
        <h3 class="text-xl hover:text-customBlue-500 hover:bg-white rounded-md cursor-pointer px-4 py-2">
          <!-- login -->jMBb
        </h3>
        <h3 class="text-xl hover:text-customBlue-500 hover:bg-white bg-white  text-black rounded-md cursor-pointer px-4 py-2">
          <!-- register -->‡iwR÷vi
        </h3>
      </div>
      <font-awesome-icon class='fa-2x block sm:hidden ml-auto' :icon="['fas', 'bars']"/>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {}
};
</script>
<style></style>
