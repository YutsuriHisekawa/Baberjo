<script setup>
import navbar from "~/layouts/navbar.vue";
import vector from "public/svg/vector.vue";
import element from "public/svg/markbesar.vue";
</script>
<template>
  <!-- Section Hero -->
  <navbar />
  <main class="bg-white pt-[10rem]">
    <section class="w-full flex justify-center bg-white">
      <div class="md:container bg-white md:mt-[10rem]">
        <div class="mt-[5rem] flex flex-col items-center md:items-start">
          <div class="">
            <h1
              class="text-black jkt font-extrabold text-4xl md:text-7xl text-center lg:text-start"
            >
              Refine Your Style, <br />
              Sharpen Your Look.
            </h1>
          </div>

          <element
            class="flex w-[25rem] md:w-full lg:w-auto mt-5 md:justify-center"
          />
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
    <div class="flex justify-center mt-[5rem] w-full h-screen">
      <div class="container">
        <div
          class="flex text-center items-center lg:text-start lg:items-start flex-col w-full"
        >
          <h1
            class="jkt font-extrabold text-black text-4xl md:text-5xl lg:text-7xl"
          >
            Our Service.
          </h1>
          <element class="w-1/2 lg:w-[20rem]" />
        </div>
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
