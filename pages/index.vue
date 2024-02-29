<script setup>
import navbar from "~/layouts/navbar.vue";
import vector from "public/svg/vector.vue";
import element from "public/svg/markbesar.vue";
</script>
<template>
  <!-- Section Hero -->
  <navbar />
  <main class="bg-white pt-[10rem] md:pt-0">
    <section class="w-full flex justify-center bg-white">
      <div class="md:container md:mt-[10rem]">
        <div class="mt-[5rem] flex flex-col items-center md:items-start">
          <div class="md:mx-auto xl:mx-0">
            <h1
              class="text-black jkt font-extrabold text-4xl md:text-7xl text-center xl:text-start"
            >
              Refine Your Style, <br />
              Sharpen Your Look.
            </h1>
          </div>

          <div class="w-full flex md:justify-center xl:justify-start">
            <element
              class="flex w-[25rem] md:w-full lg:w-auto mt-5 md:justify-center"
            />
          </div>

          <vector
            class="flex absolute xl:right-[0rem] xl:top-[2rem] 2xl:right-[20rem] 2xl:top-[2rem] md:h-auto md:w-auto w-[25rem]"
          />

          <!-- BOOK NOW  -->
          <div class="w-full md:p-5 xl:p-0">
            <Booknow />
          </div>

          <!-- END BOOK -->
        </div>
      </div>
    </section>
    <!-- End Section Hero -->

    <!-- CATEGORY SECTION -->
    <category />
    <!-- END CATEGORY -->

    <!-- Our Service  -->
    <div class="flex justify-center mt-[5rem] w-full">
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
    </div>
    <Service />
    <!-- End Our Service  -->

    <!-- Our Service  -->
    <div class="flex justify-center mt-[5rem] w-full">
      <div class="container">
        <div
          class="flex text-center items-center lg:text-start lg:items-start flex-col w-full"
        >
          <h1
            class="jkt font-extrabold text-black text-4xl md:text-5xl lg:text-7xl"
          >
            Our Product
          </h1>
          <element class="w-1/2 lg:w-[20rem]" />
        </div>
      </div>
    </div>
    <Product />
    <!-- End Our Service  -->
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
.jkt {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
