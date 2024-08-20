<script setup lang="ts">
import { storageDemo } from '~/hooks/storage'

function handleOpenOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-full px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Sidepanel</div>
    <SharedSubtitle />

    <button class="btn mt-2" @click="handleOpenOptionsPage">
      Open Options
    </button>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
  </main>
</template>
