import { createContext, useState, useContext, ReactNode } from 'react';

export type ThemeType = 'hacker' | 'material';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('hacker');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'hacker' ? 'material' : 'hacker'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 