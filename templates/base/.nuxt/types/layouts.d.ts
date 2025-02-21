import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../../../node_modules/.pnpm/nuxt@3.15.4_@types+node@20.17.19_eslint@8.57.1_typescript@5.7.3_vite@6.1.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}