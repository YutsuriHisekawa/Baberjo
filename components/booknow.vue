<script setup>
import zoom from "public/svg/search.vue";
import baberman from "public/svg/baberman.vue";
import date from "public/svg/date.vue";
import jam from "public/svg/time.vue";
</script>
<template>
  <div
    class="hidden md:flex w-full border-2 rounded-full h-[5rem] items-center mt-20 z-5"
  >
    <div class="flex flex-row w-full h-full font-medium">
      <div
        class="flex space-x-2 w-full justify-center items-center border-r-2 text-xl md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl"
      >
        <zoom />
        <h1>Choose Treatment</h1>
      </div>
      <div
        class="flex space-x-2 w-full justify-center items-center border-r-2 text-xl md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl"
      >
        <baberman />
        <h1>Choose Baberman</h1>
      </div>
      <div
        class="flex space-x-2 w-full justify-center items-center border-r-2 text-xl md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl"
      >
        <date />
        <h1>Choose Date</h1>
      </div>
      <div
        class="flex space-x-2 w-full justify-center items-center text-xl md:text-[10px] lg:text-sm xl:text-xl 2xl:text-2xl"
      >
        <jam />
        <h1>Choose Time</h1>
      </div>
      <div class="flex space-x-2 w-full justify-end p-2">
        <button
          class="btn rounded-full font-bold text-xl md:text-sm z-10 h-full text-white"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  </div>

  <div class="flex md:hidden justify-center w-full mt-10">
    <button
      class="btn text-2xl rounded-full text-white z-10 shadow-2xl"
      onclick="my_modal_2.showModal()"
    >
      BOOK NOW
    </button>
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>
