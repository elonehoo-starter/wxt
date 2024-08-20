<script setup lang="ts">
import useWebExtensionStorage from '~/composables/useWebExtensionStorage'

const { state: storageDemo } = useWebExtensionStorage('local:webext-demo', 'Storage Demo')
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <Logo />
    <div>Options</div>
    <SharedSubtitle />

    <input v-model="storageDemo" class="border border-gray-400 rounded px-2 py-1 mt-2">

    <div class="mt-4">
      Powered by wxt <div class="i-carbon-lightning align-middle inline-block" />
    </div>
  </main>
</template>
