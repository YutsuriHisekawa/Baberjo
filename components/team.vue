<script setup>
import bintang from "public/svg/star";
</script>

<template>
  <section class="w-full flex justify-center py-5">
    <div class="w-full container">
      <div
        class="grid md:grid-cols-4 md:p-5 place-items-center space-y-10 md:space-y-0 p-10"
      >
        <!-- 1 -->
        <div class="card md:w-[15rem] xl:w-80 bg-white shadow-xl">
          <figure class="xl:h-[20rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg class="object-cover h-auto w-full" src="/img/yugik.png" />
          </figure>
          <div class="card-body">
            <h2 class="card-title jkt text-black font-semibold">
              Yugik Milos
              <div></div>
            </h2>
            <p>Baberman</p>
            <div class="card-actions justify-end">
              <bintang />
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="card md:w-[15rem] xl:w-80 bg-white shadow-xl">
          <figure class="xl:h-[20rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg
              class="object-cover h-auto w-full"
              src="/img/ricardo.png"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title jkt text-black font-semibold">
              Ricardo Milos
              <div></div>
            </h2>
            <p>Baberman</p>
            <div class="card-actions justify-end">
              <bintang />
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="card md:w-[15rem] xl:w-80 bg-white shadow-xl">
          <figure class="xl:h-[20rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg class="object-cover h-auto w-full" src="/img/udin.png" />
          </figure>
          <div class="card-body">
            <h2 class="card-title jkt text-black font-semibold">
              Udin Milos
              <div></div>
            </h2>
            <p>Baberman</p>
            <div class="card-actions justify-end">
              <bintang />
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="card md:w-[15rem] xl:w-80 bg-white shadow-xl">
          <figure class="xl:h-[20rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg class="object-cover h-auto w-full" src="/img/jarwo.png" />
          </figure>
          <div class="card-body">
            <h2 class="card-title jkt text-black font-semibold">
              Jarwo Milos
              <div></div>
            </h2>
            <p>Baberman</p>
            <div class="card-actions justify-end">
              <bintang />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
