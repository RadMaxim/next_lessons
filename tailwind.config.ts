import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        // App Router (новая структура)
        './app/**/*.{js,ts,jsx,tsx,mdx}',

        // Pages Router (старая структура, если используется)
        './pages/**/*.{js,ts,jsx,tsx,mdx}',

        // Компоненты
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Если используете FSD структуру
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './features/**/*.{js,ts,jsx,tsx,mdx}',
        './entities/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                background: 'var(--color-bg)',
                text: 'var(--color-text)',
                // Кастомные цвета

                // Темная тема
                dark: {
                    bg: '#0f172a',
                    text: '#f8fafc',
                },



                accent: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },

                // Можно добавить любое количество цветов
                brand: {
                    blue: '#3b82f6',
                    purple: '#8b5cf6',
                    pink: '#ec4899',
                    orange: '#f97316',
                    teal: '#14b8a6',
                    cyan: '#06b6d4',
                },

                // Градиентные цвета
                gradient: {
                    start: '#667eea',
                    end: '#764ba2',
                },

                // Специальные цвета
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444',
                info: '#3b82f6',



                // Светлые версии
                light: {
                    bg: '#ffffff',
                    surface: '#f8fafc',
                    text: '#0f172a',
                    muted: '#64748b',
                },
            },
            fontFamily: {
                // Кастомные шрифты
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                // Анимации
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            boxShadow: {
                // Тени
                'custom': '0 10px 40px rgba(0, 0, 0, 0.1)',
                'neumorphic': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
            },
            backgroundImage: {
                // Градиенты
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                // Кастомные брейкпоинты
                'xs': '475px',
                '3xl': '1920px',
            },
        },
    },
    plugins: [
        // Плагины Tailwind
        // require('@tailwindcss/forms'), // Раскомментируйте если установите
        // require('@tailwindcss/typography'), // Раскомментируйте если установите
        // require('@tailwindcss/aspect-ratio'), // Раскомментируйте если установите
    ],
}

export default config