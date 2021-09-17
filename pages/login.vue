<template>
  <div class="login-bg pt-20 pb-20">
    <div class="w-full max-w-md mx-auto container">
      <h2 class="text-3xl font-bold text-white text-center pb-4">Login</h2>
    </div>
    <div class="w-full max-w-md mx-auto container">
      <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8">
        <div class="mb-4">
          <label
            class="block text-customBlue-500 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-customBlue-500 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-customBlue-500 hover:bg-customBlue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-customBlue-500 hover:text-customBlue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
</style>
