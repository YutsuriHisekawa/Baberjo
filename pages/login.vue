<script setup>
import element from "public/svg/mark.vue";
import google from "public/svg/google.vue";

</script>

<template>
    <navbar/>
  <main class="flex justify-center items-center h-screen bg-black">
    <div class="card bg-white shadow-xl w-[30rem] 2xl:w-[40rem]">
      <div class="card-body flex justify-center items-center">
        <h2 class="card-title jkt text-[#292D32] text-2xl">
          Sign In to Continue
        </h2>
        <element />
        <!-- Modal  -->
        <button
          class="btn bg-white border-gray-400 hover:bg-gray-300 text-black jkt w-full justify-start text-center mt-10"
          onclick="my_modal_3.showModal()"
        >
          <google />
          <p>Sign In with Google</p>
        </button>
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
        <!-- end modal -->
        <!-- OR -->
        <div class="flex justify-between w-full items-center space-x-2">
          <div class="bg-gray-400 h-[0.2px] w-full"></div>
          <p class="jkt">OR</p>
          <div class="bg-gray-400 h-[0.2px] w-full"></div>
        </div>
        <!-- End OR -->

        <!-- Form -->
        <div class="card-actions w-full justify-center">
          <form action="" class="w-full h-full space-y-5 jkt font-medium">
            <div>
              <label for="email" class="space-y-2"
                ><p class="text-black">Email Address</p>
                <input
                  type="email"
                  placeholder="Your Business Email Address"
                  class="input input-bordered w-full bg-white space-y-5"
                />
              </label>
            </div>

            <div>
              <label for="password" class="space-y-2"
                ><p class="text-black">Your Password</p>
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full bg-white"
                />
              </label>
            </div>

            <div class="text-end">
              
              <NuxtLink to="/" class="hover:underline text-black">
                Forgot Password?
              </NuxtLink>
            </div>

            <button class="btn jkt w-full bg-[#292D32] text-white border-black">
              Sign In with Email Address
            </button>
            <div class="text-center text-gray-400">
              <p>Don’t have account?</p>
            </div>
          </form>
          <!-- register button -->
          <button
            class="text-black jkt font-medium"
            onclick="register.showModal()"
          >
            Create Account
          </button>
          <dialog id="register" class="modal">
            <div class="modal-box bg-white text-black jkt font-medium">
                <h3 class="font-bold text-2xl text-center p-5">Create Your Account</h3>
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>

              <form class="space-y-5 mt-5">
                <div>
                  <label for="number" class="space-y-2"
                    ><p class="text-black">Your Phone Number</p>
                    <input
                      type="number"
                      placeholder="Your Number"
                      class="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>

                <div>
                  <label for="Your Email" class="space-y-2"
                    ><p class="text-black">Your Email</p>
                    <input
                      type="email"
                      placeholder="Your Email"
                      class="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>
                <div>
                  <label for="password" class="space-y-2"
                    ><p class="text-black">Your Password</p>
                    <input
                      type="password"
                      placeholder="Your Password"
                      class="input input-bordered w-full bg-white"
                    />
                  </label>
                </div>

                <button class="btn jkt w-full bg-[#292D32] text-white border-black">
              Register
            </button>
              </form>
            </div>
          </dialog>
          <!-- register button -->
        </div>

        <!-- END -->
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
.jkt {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
