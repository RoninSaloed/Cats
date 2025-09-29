<template>
  <footer
    class="w-full bg-[#121212] h-[255px] px-[24px] md:px-[72px] text-[#FFFFFF]"
  >
    <div
      class="pt-[32px] flex flex-wrap justify-center md:justify-between mb-[32px] md:mb-[55px] gap-8"
    >
      <div class="flex justify-center md:justify-start w-full md:w-auto">
        <LogoIcon color="#FFFFFF" />
      </div>

      <div
        class="flex flex-wrap justify-center md:justify-end gap-12 w-full md:w-auto"
      >
        <div class="flex flex-col text-center md:text-left">
          <div class="font-bold text-base mb-2">Built for catlovers</div>
          <span class="text-[14px] mb-2">About</span>
          <span class="text-[14px]">Blog</span>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <div class="font-bold text-base mb-2">Social</div>
          <div class="flex gap-6">
            <span><InstagramIcon /></span>
            <span><FaceBookIcon /></span>
            <span><YoutubeIcon /></span>
            <span><XIcon /></span>
          </div>
        </div>
      </div>
    </div>

    <div class="h-[1px] w-full bg-[#8E8E8E] mb-[32px]" />

    <div
      class="flex flex-wrap justify-center md:justify-between text-center md:text-left gap-4"
    >
      <div class="text-[14px] w-full md:w-auto">
        @cats.com inc. All rights reserved.
      </div>
      <div class="flex relative justify-center md:justify-end w-full md:w-auto">
        <div class="mr-5">English</div>
        <span
          :class="[
            'absolute w-2 h-2 border-r-2 border-b-2 border-white rotate-45 top-1/2 -translate-y-1/2 right-0 md:right-[-10px]',
          ]"
        ></span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FaceBookIcon from "../shared/FaceBookIcon.vue";
import InstagramIcon from "../shared/InstagramIcon.vue";
import LogoIcon from "../shared/LogoIcon.vue";
import XIcon from "../shared/XIcon.vue";
import YoutubeIcon from "../shared/YoutubeIcon.vue";
</script>
