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
    <div class="container h-full grid grid-cols-1 md:grid-cols-2 p-10">
      <div class="flex w-full justify-center bg-white">
        <div class="border-2 h-full rounded-2xl p-10 space-y-10 w-full">
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
      </div>
    </div>
  </div>
</template>
