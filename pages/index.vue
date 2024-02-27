<script setup>
import navbar from "~/layouts/navbar.vue";
import vector from "public/svg/vector.vue";
import element from "public/svg/markbesar.vue";
</script>
<template>
  <!-- Section Hero -->
  <navbar />
  <main class="bg-white">
    <section class="w-full flex justify-center bg-white">
      <div class="md:container bg-white max-h-screen md:mt-[10rem]">
        <div
          class="mt-[5rem] flex flex-col md:ml-10 items-center md:items-start"
        >
          <h1
            class="bg-white text-black jkt font-extrabold text-4xl md:text-[64px] text-center md:text-start"
          >
            Refine Your Style, <br />
            Sharpen Your Look.
          </h1>
          <element class="w-[25rem] md:w-auto" />
          <vector
            class="flex absolute xl:right-[0rem] xl:top-[2rem] 2xl:right-[20rem] 2xl:top-[2rem] md:h-auto md:w-auto w-[25rem]"
          />

          <!-- BOOK NOW  -->
          <Booknow />
          <!-- END BOOK -->
        </div>
      </div>
    </section>
    <!-- End Section Hero -->

    <!-- CATEGORY SECTION -->
    <category />
    <!-- END CATEGORY -->

    <!-- Our Service  -->
    <div class="mt-[5rem] w-full">
      <div class="flex text-center items-center flex-col w-full">
        <h1 class="jkt font-extrabold text-black text-4xl md:text-5xl">
          Our Service.
        </h1>
        <element class="w-1/2" />
      </div>

      <Service />
    </div>
    <!-- End Our Service  -->
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
.jkt {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
