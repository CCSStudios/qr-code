<script lang="ts" setup>
import type { QrPostResponse } from 'types'

const base64String = ref<string | null>(null)
const handleSuccess = (data: QrPostResponse) => base64String.value = data.code
</script>

<template>
  <h1>Generate a QR code from a URL</h1>
  <p>Enter a URL and click the button to generate a QR code.</p>
  <QrCodeForm
    @success="handleSuccess"
    @execute="base64String = null"
  />
  <transition name="fade">
    <QrCode
      v-if="base64String"
      :base-64-string="base64String"
      style="display: block"
    />
  </transition>
</template>
