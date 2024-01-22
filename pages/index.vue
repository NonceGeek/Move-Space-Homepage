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
          <div class="flex items-center space-x-2 text-gray-3 dark:text-gray-4">
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
    <div id="nfts" class="flex flex-col mt-40">
      <div class="w-full text-5xl font-medium text-center">Trending</div>
      <div class="flex items-center justify-between w-full h-16 pt-6 text-gray-2">
        <span class="flex items-center space-x-3">
          <img class="w-[30px]" src="/img/nfprompt.png" alt="logo">
          <span class="text-3xl font-medium">NFPrompt NFTs</span>
        </span>
        <span class="flex items-center space-x-3">
          <span class="text-2xl font-semibold">View all</span>
          <img class="w-6 h-6" src="/img/arrow-right.png" alt="arrow">
        </span>
      </div>
      <div class="flex items-start justify-between mt-10 space-x-6">
        <div class="flex flex-col w-full space-y-6" v-for="(nft, i) in nfts" :key="i">
          <div class="relative overflow-hidden rounded-xl">
            <img class="w-full h-auto" :src=nft.bgImg alt="card">
            <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between">
              <div class="flex items-center justify-end pt-3 pr-3 space-x-1">
                <span
                  class="flex items-center space-x-0.5 px-1.5 py-1 rounded-full bg-gradient-to-r from-gradFrom to-gradTo">
                  <img class="w-2 h-2" src="/img/fire.png" alt="fire">
                  <span class="text-white uppercase text-xxs">{{ nft.popularity }}</span>
                </span>
                <span class="relative flex items-center justify-center overflow-hidden rounded-full">
                  <span class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-gradFrom to-gradTo"></span>
                  <span
                    class="box-border z-10 flex items-center justify-center px-1 py-0.5 w-full h-full space-x-1 text-white border-2 border-transparent rounded-full select-none text-xxs bg-clip-padding bg-black-1 dark:bg-dark">
                    <img class="w-2 h-2" src="/img/logo-bnb.png" alt="logo">
                    <span>{{ nft.chain }}</span>
                  </span>
                </span>
              </div>
              <div class="flex items-end justify-between w-full h-[72px] px-3 pb-6 backdrop-blur">
                <div class="flex space-x-2">
                  <img class="w-9 h-9" :src=nft.avatar alt="avatar">
                  <div class="flex flex-col space-y-1 text-xxs">
                    <span class="text-white">{{ nft.addr }}</span>
                    <span class="text-gray-6">Price: {{ nft.price }}</span>
                  </div>
                </div>
                <div class="flex space-x-1 text-white text-xxs">
                  <span class="flex space-x-1">
                    <img class="w-4 h-4" src="/img/like.png" alt="like">
                    <span>{{ nft.likes }}</span>
                  </span>
                  <span class="flex space-x-1">
                    <img class="w-4 h-4" src="/img/comment.png" alt="comment">
                    <span>{{ nft.comments }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="flex flex-col space-y-3 text-gray-2">
              <span class="font-semibold">{{ nft.title }}</span>
              <span>★★★★★</span>
            </div>
            <span class="text-gray-3">{{ nft.intro }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="campaigns" class="flex flex-col mt-40">
      <div class="flex items-center justify-between w-full h-16">
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10" src="/img/galxe.png" alt="galxe">
          <span class="text-5xl font-medium text-center">Galxe Campaigns</span>
        </div>
        <span class="flex items-center space-x-3">
          <span class="text-2xl font-semibold text-gray-2">View all</span>
          <img class="w-6 h-6" src="/img/arrow-right.png" alt="arrow">
        </span>
      </div>
      <div class="flex items-start justify-between mt-10 space-x-32">
        <div v-for="(campaign, i) in campaigns" :key="i" class="flex flex-col w-full space-y-6">
          <div class="p-4 bg-black-1 rounded-xl">
            <div class="w-full px-3 py-2 font-medium text-white rounded-md bg-blue-1 text-xxs">
              Journey through the trail less travelled to join the Bera Bridge and let the Honey flow
            </div>
            <div class="flex items-center justify-between mt-3">
              <div class="flex items-center space-x-1">
                <span v-for="(tag, j) in campaign.tags" :key="j"
                  class="px-2 py-1 font-medium text-white border border-white rounded-full text-xxs">{{ tag }}</span>
              </div>
              <img class="w-4 h-4" src="/img/filter.png" alt="filter">
            </div>
            <div class="flex justify-between mt-3">
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-white text-xxs">{{ campaign.name }}</span>
                <div class="flex items-center space-x-2">
                  <img class="w-5 h-5" :src=campaign.avatar alt="avatar">
                  <span class="font-semibold text-white text-xxs">{{ campaign.chain }}</span>
                </div>
              </div>
              <img class="w-32" :src=campaign.bannerImg alt="banner">
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="flex flex-col space-y-3 text-gray-2">
              <span class="font-semibold">{{ campaign.title }}</span>
              <span>★★★★★</span>
            </div>
            <span class="text-gray-3">{{ campaign.intro }}</span>
          </div>
        </div>
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
        <span class="text-2xl text-gray-3">Copyright 2024 MoveSpace</span>
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

const nfts = [
  {
    title: 'Cafe Kool',
    chain: 'BNB Chain',
    addr: '0Xf136...4571',
    price: '0.5 BNB',
    intro: 'Great variety of art from Chinese to Indian',
    bgImg: '/img/cards-1.png',
    avatar: '/img/avatar-1.png',
    popularity: '9.2 k',
    likes: 789,
    comments: 930,
    star: 5,
  },
  {
    title: 'Cafe Kool',
    chain: 'BNB Chain',
    addr: '0Xf136...4571',
    price: '0.5 BNB',
    intro: 'Great variety of art from Chinese to Indian',
    bgImg: '/img/cards-2.png',
    avatar: '/img/avatar-2.png',
    popularity: '9.2 k',
    likes: 789,
    comments: 930,
    star: 5,
  },
  {
    title: 'Cafe Kool',
    chain: 'BNB Chain',
    addr: '0Xf136...4571',
    price: '0.5 BNB',
    intro: 'Great variety of art from Chinese to Indian',
    bgImg: '/img/cards-3.png',
    avatar: '/img/avatar-3.png',
    popularity: '9.2 k',
    likes: 789,
    comments: 930,
    star: 5,
  },
  {
    title: 'Cafe Kool',
    chain: 'BNB Chain',
    addr: '0Xf136...4571',
    price: '0.5 BNB',
    intro: 'Great variety of art from Chinese to Indian',
    bgImg: '/img/cards-4.png',
    avatar: '/img/avatar-4.png',
    popularity: '9.2 k',
    likes: 789,
    comments: 930,
    star: 5,
  },
]

const campaigns = [
  {
    name: 'March of the Bears',
    tags: ['Co-host', 'NFT'],
    bannerImg: '/img/campaign-1.png',
    avatar: '/img/avatar-5.png',
    chain: 'Berachain',
    title: 'Cafe Kool',
    intro: 'Great variety of art from Chinese to Indian',
  },
  {
    name: 'March of the Bears',
    tags: ['Co-host', 'NFT'],
    bannerImg: '/img/campaign-2.png',
    avatar: '/img/avatar-6.png',
    chain: 'Berachain',
    title: 'Cafe Kool',
    intro: 'Great variety of art from Chinese to Indian',
  },
  {
    name: 'March of the Bears',
    tags: ['Co-host', 'NFT'],
    bannerImg: '/img/campaign-3.png',
    avatar: '/img/avatar-7.png',
    chain: 'Berachain',
    title: 'Cafe Kool',
    intro: 'Great variety of art from Chinese to Indian',
  },
]

const colorMode = useColorMode('dark')
const toggleColorMode = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>
