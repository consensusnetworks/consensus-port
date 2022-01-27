import { defineNuxtPlugin } from '#app'
import crossFetch from "cross-fetch";
export default defineNuxtPlugin(() => {
  return {
    provide: {
      instance: crossFetch
    }
  }
})