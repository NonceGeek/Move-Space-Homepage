<template>
  <div class="flex flex-col w-content mx-auto pt-9">
    <div class="header h-16 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img src="/img/logo.png" alt="logo" class="h-12" />
        <img src="/img/logo-title.png" alt="logo" class="h-6 dark:brightness-0 dark:invert" />
      </div>
      <div class="links flex items-center space-x-5 text-black-1 dark:text-white font-['Poppins'] text-[14px]">
        <a v-for="link in links" :key="link" class="flex items-center cursor-pointer">
          <span>{{ link }}</span>
          <img class="w-6 h-6 dark:brightness-0 dark:invert" src="~/assets/svg/down-select.svg" alt="select">
        </a>
      </div>
    </div>
    <div class="slogon mt-12 flex justify-between items-center">
      <div class="flex flex-col space-y-12">
        <div class="texts flex flex-col space-y-6">
          <div class="titles flex flex-col space-y-9">
            <div class="flex flex-col space-y-4 text-black-1 dark:text-white">
              <span class="w-[450px] text-[72px] leading-none font-['Poppins'] font-medium tracking-[0.6px]">AI-Powered
                Datahouse</span>
              <span class="w-[510px] text-[36px] leading-tight font-['Poppins'] capitalize">for on-chain
                data labeling &
                data
                marketplace</span>
            </div>
            <LinearLine classText="w-[615px]" />
          </div>
          <div class="text-third-gray dark:text-gray-4 text-[21px]">Powered by BNB Greenfield</div>
        </div>
        <div class="buttons flex items-center space-x-8">
          <template v-for="button in buttons" :key="button">
            <TheButton :text="button.text" :uppercase="true" :high="true" :coloredBorder="button.coloredBorder" />
          </template>
        </div>
      </div>
      <img class="w-[568px]" src="/img/dataism.png" alt="dataism">
    </div>
    <div class="mt-[72px]">
      <img class="mx-auto h-[30px] dark:brightness-0 dark:invert" src="/img/clients.png" alt="clients">
    </div>
    <div class="mt-[26px] text-center text-third-gray dark:text-gray-5 text-[20px] font-['Poppins']">
      Trusted by and integrated with the world’s most ambitious teams
    </div>
    <div class="mt-40 mxau w-[1160px] flex flex-col items-center space-y-[142px]">
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <span>MOVESPACE is an ecosystem of applications powered by the MoveSpace vector datahouse. We utilize
              decentralized storage solutions including BNB Greenfield and Arweave to power on-chain data labeling, data
              monetization, AI-powered search, AIGC & AI-based UGC, NFT, and gaming use cases.</span>
            <span>Our team consists of Web 3 natives and veteran builders from Tencent, Huawei, Microsoft, Google, and
              Netease, etc.</span>
          </div>
          <div class="w-[575px] p-2.5">
            <LinearLine />
          </div>
          <TheButton text="Learn more" :coloredBorder="true" />
        </div>
        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold">ABOUT US</div>
      </div>
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold">APPLICATIONS</div>
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <span>The MoveSpace ecosystem is a set of applications built on MoveSpace’s vector datahouse.</span>
            <ul class="list-disc">
              <li>MoveSpace Data Explorer: a vector-data-powered search engine to power Web 3 native search, beginning
                with Galxe & Bodhi.</li>
              <li>MoveSpace Data Marketplace: a data publishing and marketplace platform built on BNBChain & BNB
                Greenfield.</li>
              <li>MoveSpace AI Dashboard: a multi-modal AIGC platform that allows users to upload data on-chain and
                generate
                AIGC based on their textual data and image data.</li>
              <li>MoveSpace Data Labeling Platform: an on-chain data labeling platform for Large language models and
                applications, built on BNBChain and BNB Greenfield.</li>
            </ul>
          </div>
          <div class="w-[575px] p-2.5">
            <LinearLine />
          </div>
          <TheButton text="Learn more" :coloredBorder="true" />
        </div>
      </div>
    </div>
    <div class="footer mt-60 pb-24 flex flex-col space-y-3">
      <LinearLine />
      <div class="flex justify-between items-center text-third-gray dark:text-white font-['Montserrat']">
        <span v-for="text in footerTexts" :key="text">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  'MoveSpace Data Explorer',
  'MoveSpace Data Marketplace',
  'MoveSpace AI Dashboard',
  'MoveSpace Data Labeling Platform',
]
const buttons = [
  {
    text: 'testnet',
    coloredBorder: true,
  },
  {
    text: 'read docs',
    coloredBorder: false,
  },
]
const footerTexts = [
  'Copyright © 2023 MOVESPACE. All rights reserved.',
  'Terms of Use & Privacy Policy',
]
</script>
