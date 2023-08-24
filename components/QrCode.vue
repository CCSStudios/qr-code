<script setup lang="ts">
export interface Props {
  base64String: string
}

defineProps<Props>()
</script>

<template>
  <img
    :src="base64String"
    width="130"
    height="130"
    alt="QR code"
  >
</template>
