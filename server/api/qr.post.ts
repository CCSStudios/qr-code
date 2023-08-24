import { toDataURL } from 'qrcode'
import { z, zh } from 'h3-zod'
import type { QrPostResponse } from '~/types'

export default defineEventHandler(async (event) => {
  const body = await zh.useValidatedBody(event, z.object({
    url: z.string(),
  }))

  const code = await toDataURL(body.url)

  return { code, url: body.url } as QrPostResponse
})
