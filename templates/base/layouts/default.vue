<template>
  <div class="min-h-screen bg-gray-50">
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl">Nuxt3 企业级应用</NuxtLink>
      </template>
      <template #right>
        <UButton icon="i-heroicons-moon" color="gray" variant="ghost" @click="toggleDark()" />
      </template>
    </UHeader>

    <main class="container mx-auto p-4">
      <slot />
    </main>

    <UFooter class="border-t">
      <template #left>
        <div class="text-sm text-gray-500">© {{ new Date().getFullYear() }} Nuxt3 企业级应用</div>
      </template>
    </UFooter>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e4e4e7;
  position: sticky;
  top: 0;
  z-index: 10;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-color);

  &:hover {
    color: var(--primary-color);
  }

  &.router-link-active {
    color: var(--primary-color);
  }
}

.footer {
  background: #f4f4f5;
  padding: 2rem 0;
  margin-top: 4rem;
  text-align: center;
  color: #71717a;
}
</style>
