<template>
    <footer class="bg-customBlue-800 text-white pt-8">
      <div class='container mx-auto grid grid-cols-1 sm:grid-cols-4 px-4 sm:px-0'>
        <div>
          <div class="logo py-6">
            <a href="/pages/index.vue">
              <img class="w-3/5 sm:w-36 mx-auto sm:mx-0" src="../assets/images/logo.png" alt="" />
            </a>
          </div>
          <p>
            A_©nxb †jLv hvi gv‡S Av‡Q A‡bK wKQy| n¨vu, GB †jLvi gv‡SB Av‡Q A‡bK wKQy| hw` Zywg g‡b K‡iv, GUv †Zvgvi Kv‡R jvM‡e, Zvn‡j Zv jvM‡e Kv‡R| wb‡Ri fvlvq †jLv †`L‡Z Af¨¯— nI| g‡b ivL‡e †jLv A_©
          </p>
        </div>
        <div class="text-center py-6">
          <h5 class='pb-4 text-2xl'>‡nvg</h5>
          <h5 class='py-4 text-2xl'>‡iKW©m</h5>
          <h5 class='py-4 text-2xl'>W¨vk‡evW©</h5>
          <h5 class='py-4 text-2xl'>cix¶v</h5>
        </div>
        <div class="text-center">
          <h5 class='pt-6 pb-4 text-2xl'>+880 1816-848931</h5>
          <h5 class='py-4 text-2xl font-english'>info@porikkhaa.com</h5>
        </div>
        <div class='py-6 text-center sm:text-left'>
          <font-awesome-icon class='fa-3x mx-4' :icon="['fab', 'facebook']"/>
          <font-awesome-icon class='fa-3x mx-4' :icon="['fab', 'instagram']"/>
          <font-awesome-icon class='fa-3x mx-4' :icon="['fab', 'whatsapp']"/>
        </div>
      </div>
      <div class='font-english bg-customBlue-1000 text-center py-4'>Copyright @2021</div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
  }
};
</script>