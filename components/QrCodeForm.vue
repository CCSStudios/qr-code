<script lang="ts" setup>
import type { QrPostResponse } from '~/types'

const emit = defineEmits<{
  execute: [url: string]
  success: [data: QrPostResponse]
  error: [error: unknown]
}>()

const url = ref('')

const { error, data, status, execute } = useFetch('/api/qr', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  onRequest: ({ options }) => {
    options.body = { url: url.value }
  },
  immediate: false,
})

const handleSubmit = async () => {
  await execute()

  emit('execute', url.value)

  if (error.value)
    emit('error', error.value)

  if (data.value)
    emit('success', data.value!)
}
</script>

<template>
  <form @submit.prevent="handleSubmit()">
    <fieldset :disabled="status === 'pending'">
      <label for="url">URL: </label>
      <input
        id="url"
        v-model="url"
        type="url"
        required
      >
      <button type="submit">
        Generate QR code
      </button>
    </fieldset>
  </form>
  <transition name="fade">
    <span v-if="status === 'pending'">Loading...</span>
    <span v-else-if="status === 'error'">Error: {{ error }}</span>
    <span v-else-if="status === 'idle' && data">Done: {{ data }}</span>
  </transition>
</template>
