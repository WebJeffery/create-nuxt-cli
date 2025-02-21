import { defineStore } from 'pinia'

interface AppState {
  theme: 'light' | 'dark'
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'light'
  }),
  
  getters: {
    isDarkTheme: (state) => state.theme === 'dark'
  },
  
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}) 