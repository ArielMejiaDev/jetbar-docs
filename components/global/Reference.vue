<template>
  <div class="flex p-2 text-gray-600 bg-gray-200 rounded shadow">
    <span class="ml-4 text-blue-500 font-semibold no-underline cursor-pointer hover:underline" @click="goTo">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {text:String},
  methods: {
    goTo() {
      window.open("https://30daysofjetstream.com", "_blank");
    }
  }
}
</script>