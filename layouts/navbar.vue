<script setup>
import logo from 'public/svg/logo.vue'
</script>

<template>
   <!-- desktop -->
<div class="w-full hidden md:flex justify-center bg-white/20 backdrop-blur-lg fixed z-[99]">
   <div class="container bg-white/0 p-5 flex justify-between items-center text-center">
      <logo/>
      <div>

      </div>
      <div>
         <NuxtLink to="login" class="text-black font-medium text-lg">Sign In / Sign Up</NuxtLink>

      </div>
   </div>
</div>




   <!-- mobile -->
     <div class="flex md:hidden justify-center bg-white backdrop-blur-2xl p-5  w-full">
      <logo/>
     </div>
</template>