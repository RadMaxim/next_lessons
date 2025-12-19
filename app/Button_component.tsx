"use client";

import { Button } from "@/shared/ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = ()=> {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="outline"
            size="lg"
        >
            {theme === "dark" ? "🌙 Темная тема" : "☀️ Светлая тема"}
        </Button>
    );
}
export default ThemeToggle;