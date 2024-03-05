<template>
  <section class="w-full flex justify-center py-5">
    <div class="w-full container">
      <div
        class="grid md:grid-cols-3 md:p-5 place-items-center space-y-10 md:space-y-0 p-10"
      >
        <!-- 1 -->
        <div class="card md:w-[15rem] xl:w-96 bg-white shadow-xl">
          <figure class="xl:h-[25rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg
              class="object-cover h-auto w-full"
              src="https://c0.wallpaperflare.com/preview/783/260/935/barber-barbershop-haircut-hairstyle.jpg"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title jkt text-black font-semibold">
              Hair Cut
              <div></div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="card md:w-[15rem] xl:w-96 bg-white shadow-xl">
          <figure class="xl:h-[25rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg
              class="object-cover xl:h-[25rem] lg:h-[15rem] h-[25rem] object-right"
              src="https://media.istockphoto.com/id/522305768/photo/time-for-new-haircut.jpg?s=612x612&w=0&k=20&c=rjGGYjJiBjT1gb4F72tNhU3bud2MKTyf43r5eL7GsEk="
            />
          </figure>

          <div class="card-body">
            <h2 class="card-title text-black font-semibold Jkt">
              Hair Treatment
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div class="card md:w-[15rem] xl:w-96 bg-white shadow-xl">
          <figure class="xl:h-[25rem] lg:h-[15rem] h-[25rem] w-full">
            <NuxtImg
              class="object-cover 2xl:h-[25rem] lg:h-[15rem] h-[25rem]"
              src="https://t3.ftcdn.net/jpg/04/29/56/32/360_F_429563255_AnI9crCdDBFmLB5TcWH4f5cKVDaJIZNJ.jpg"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-black font-semibold">Hair Coloring</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
