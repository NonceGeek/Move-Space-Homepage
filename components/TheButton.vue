<template>
  <div class="rounded-full p-px border bg-third-gray"
    :class="[coloredBorder && 'bg-gradient-to-r from-grdb via-grdm to-grde']" @mouseover="hover = true"
    @mouseleave="hover = false">
    <button class="rounded-full bg-white dark:bg-black px-8 text-black-2 dark:text-white text-[15x] font-['Montserrat']"
      :class="[high ? 'py-4' : 'py-2.5', uppercase && 'uppercase', classText]">
      {{ btnText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  classText: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    required: true,
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
  high: {
    type: Boolean,
    default: false,
  },
  coloredBorder: {
    type: Boolean,
    default: false,
  },
  changeText: {
    type: Boolean,
    default: false,
  },
})

const hover = ref(false)
const btnText = computed(() => {
  return (hover.value && props.changeText) ? 'Coming soon' : props.text
})
</script>
