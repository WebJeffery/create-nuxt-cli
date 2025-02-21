// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/payload.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@pinia+nuxt@0.5.5_typescript@5.7.3_vue@3.5.13/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui@2.21.0_typescript@5.7.3_vite@6.1.1_vue@3.5.13/node_modules/@nuxt/ui/dist/runtime/plugins/slideovers.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui@2.21.0_typescript@5.7.3_vite@6.1.1_vue@3.5.13/node_modules/@nuxt/ui/dist/runtime/plugins/modals.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+ui@2.21.0_typescript@5.7.3_vite@6.1.1_vue@3.5.13/node_modules/@nuxt/ui/dist/runtime/plugins/colors.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js")> &
  InjectionType<typeof import("../../../../node_modules/.pnpm/@nuxt+icon@1.10.3_vite@6.1.1_vue@3.5.13/node_modules/@nuxt/icon/dist/runtime/plugin.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | '@nuxt/icon'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
