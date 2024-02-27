import type { NuxtImg } from '#build/components';
<script setup>
import smile from "public/svg/smile.vue";
import product from "public/svg/product.vue";
import team from "public/svg/team.vue";
import Inquiry from "public/svg/inquiry.vue";
import school from "public/svg/school.vue";
import review from "public/svg/review.vue";
import maps from "public/svg/maps.vue";
import carrer from "public/svg/carrer.vue";
import faqs from "public/svg/faqs.vue";
import Policy from "public/svg/policy.vue";
</script>
<template>
  <div class="flex justify-center mt-[5rem]">
    <div class="container h-full grid lg:grid-cols-2 p-10 lg:space-x-10">
      <div class="flex flex-col w-full">
        <div
          class="border-2 h-full rounded-2xl p-4 md:p-10 space-y-10 w-full text-sm md:text-lg"
        >
          <!-- 1 -->
          <div class="flex justify-between">
            <div class="flex text-center flex-col items-center">
              <smile />
              <span class="text-black jkt font-bold"> Service </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <product />
              <span class="text-black jkt font-bold"> Products</span>
            </div>
            <div class="flex text-center flex-col items-center">
              <team />
              <span class="text-black jkt font-bold"> Team </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <Inquiry />
              <span class="text-black jkt font-bold"> Inquiry </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <school />
              <span class="text-black jkt font-bold"> School </span>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex justify-between">
            <div class="flex text-center flex-col items-center">
              <review />
              <span class="text-black jkt font-bold"> Review </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <maps />
              <span class="text-black jkt font-bold"> Maps </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <carrer />
              <span class="text-black jkt font-bold"> Carrer </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <faqs />
              <span class="text-black jkt font-bold"> FAQs </span>
            </div>
            <div class="flex text-center flex-col items-center">
              <policy />
              <span class="text-black jkt font-bold"> Policy </span>
            </div>
          </div>
        </div>
        <h1
          class="text-2xl text-center md:text-start md:text-5xl text-black jkt font-bold mt-10"
        >
          <span class="text-[#FACC15]">Limited time offer</span>
          That <br />
          you may also be interested
        </h1>
      </div>
      <div class="h-[10rem] lg:h-[20rem] bg-black rounded-3xl lg:mt-0 mt-10">
        <NuxtImg
          src="img/cukur.png"
          class="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  </div>
</template>
