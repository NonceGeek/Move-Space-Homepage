<template>
  <div class="flex flex-col mx-auto w-content pt-9 font-['Poppins']">
    <div id="header" class="flex items-center justify-between h-16">
      <div class="flex items-center space-x-3">
        <img src="/img/logo.png" alt="logo" class="h-9" />
        <img src="/img/logo-title.png" alt="logo" class="h-5 dark:brightness-0 dark:invert" />
      </div>
      <div id="links"
        class="flex items-center space-x-5 text-black-1 dark:text-white font-bold uppercase text-xs tracking-[1.5px]">
        <a v-for="link in links" :key="link"
          class="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gradFrom">
          <span
            class="hover:bg-gradient-to-r hover:from-gradFrom hover:to-gradTo hover:bg-clip-text hover:text-transparent">{{
              link.title }}</span>
        </a>
      </div>
      <div class="flex items-center space-x-8">
        <div id="connect"
          class="flex items-center px-4 py-2 font-semibold text-white rounded-full h-11 bg-gradient-to-r from-gradFrom to-gradTo">
          Connect wallet</div>
        <div class="flex justify-center ml-2" @click="toggleColorMode">
          <input type="checkbox" name="light-switch" class="sr-only light-switch" />
          <label
            class="relative h-[30px] p-[3px] bg-[#F0F2F5] dark:bg-[#2C2C2C] rounded-full after:content-[''] after:transition-transform after:duration-500 after:absolute after:dark:translate-x-full after:w-6 after:h-6 after:p-[6px] after:rounded-full after:bg-gradient-to-r after:from-[#439DFF] after:to-[#6052FF] flex items-center cursor-pointer select-none"
            for="light-switch">
            <img class="m-[6px] z-20 w-3 h-3" src="~/assets/svg/light-mode.svg" alt="light-mode">
            <img class="m-[6px] z-20 w-3 h-3" src="~/assets/svg/dark-mode.svg" alt="dark-mode">
            <span class="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </div>
    </div>
    <div id="banner" class="flex items-center justify-between mt-20">
      <div id="banner-left" class="flex flex-col items-start space-y-8 w-[730px]">
        <div class="flex flex-col space-y-6">
          <div class="flex flex-col titles space-y-9">
            <div
              class="text-[68px] font-black tracking-tighter leading-none whitespace-pre-wrap text-black-1 dark:text-white">
              <span>Earn</span>
              <span class="text-transparent bg-gradient-to-r from-gradFrom to-gradTo bg-clip-text"> rewards </span>
              <span>by leaving a review for your favorite NFTs, campaigns, spaces, & community</span>
            </div>
            <LinearLine classText="w-[615px]" />
          </div>
          <div class="flex items-center space-x-2 text-third-gray dark:text-gray-4">
            <img class="w-8 h-8" src="/img/logo-bnb.png" alt="bnb">
            <span class="text-2xl font-semibold leading-8">Powered by Al, BNB Greenfield, & opBNB</span>
          </div>
        </div>
        <span
          class="flex items-center px-8 py-4 text-2xl font-semibold text-white rounded-full bg-gradient-to-r from-gradFrom to-gradTo">Leave
          a review & earn now</span>
      </div>
      <img id="banner-right" class="w-[454px]" src="/img/cards.png" alt="cards">
    </div>
    <div class="flex flex-col mt-40">
      <div class="w-full text-5xl font-medium text-center">Trending</div>
      <div class="flex items-center justify-between w-full h-16 pt-6 text-second-gray">
        <span class="text-3xl font-medium">NFPrompt NFTs</span>
        <span class="flex items-center space-x-3">
          <span class="text-2xl font-semibold">View all</span>
          <img class="w-6 h-6" src="/img/arrow-right.png" alt="arrow">
        </span>
      </div>
      <div class="flex items-start justify-between mt-10 space-x-6">
        <div class="flex">
          <img class="w-full h-auto" src="/img/cards-1.png" alt="card">
        </div>
        <div class="flex">
          <img class="w-full h-auto" src="/img/cards-2.png" alt="card">
        </div>
        <div class="flex">
          <img class="w-full h-auto" src="/img/cards-3.png" alt="card">
        </div>
        <div class="flex">
          <img class="w-full h-auto" src="/img/cards-4.png" alt="card">
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-40">
      <div class="flex items-center justify-between w-full h-16">
        <div class="text-5xl font-medium text-center">Galxe Campaigns</div>
        <span class="flex items-center space-x-3">
          <span class="text-2xl font-semibold text-second-gray">View all</span>
          <img class="w-6 h-6" src="/img/arrow-right.png" alt="arrow">
        </span>
      </div>
      <div class="flex items-start justify-between mt-10 space-x-6">
        <img class="w-full h-auto" src="/img/cards-5.png" alt="card">
      </div>
    </div>
    <div class="flex flex-col pb-24 space-y-9 footer mt-60">
      <LinearLine />
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <img class="w-8 h-8" src="/img/Instagram.png" alt="ins">
          <img class="w-8 h-8" src="/img/Facebook.png" alt="fb">
          <img class="w-8 h-8" src="/img/Twitter.png" alt="twt">
        </div>
        <span class="text-2xl text-third-gray">Copyright 2024 MoveSpace</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    title: 'Leave a review',
    url: 'https://explorer.movespace.xyz/',
  },
  {
    title: 'Ecosystem',
    url: '',
  },
  {
    title: 'reward profile',
    url: '',
  },
  {
    title: 'explore',
    url: '',
  },
]

const colorMode = useColorMode('dark');
const toggleColorMode = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<style scoped></style>