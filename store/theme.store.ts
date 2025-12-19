import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Типы
export type ThemeMode = 'dark' | 'light'

// Интерфейс хранилища
interface ThemeStore {
    theme: ThemeMode
    isDark: boolean
    toggleTheme: () => void
    setTheme: (theme: ThemeMode) => void
}

// Создание хранилища
export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            // Начальное значение
            theme: 'light',

            // Вычисляемое свойство
            get isDark() {
                return get().theme === 'dark'
            },

            // Переключение темы
            toggleTheme: () => {
                set((state) => ({
                    theme: state.theme === 'dark' ? 'light' : 'dark'
                }))
            },

            // Установка конкретной темы
            setTheme: (theme: ThemeMode) => {
                set({ theme })
            },
        }),
        {
            name: 'theme-storage', // ключ в localStorage
            // Опционально: можно добавить миграции для версий
            // migrate: (persistedState, version) => { ... }
        }
    )
)

// Хелпер-хук для удобного использования
export const useTheme = () => {
    const { theme, isDark, toggleTheme, setTheme } = useThemeStore()

    return {
        theme,
        isDark,
        toggleTheme,
        setTheme,
        // Дополнительные методы если нужно
        setDark: () => setTheme('dark'),
        setLight: () => setTheme('light'),
    }
}