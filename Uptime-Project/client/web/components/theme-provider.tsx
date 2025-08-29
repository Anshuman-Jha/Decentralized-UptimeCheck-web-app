"use client";

//Made This Because NextThemesProvider can't be 
//Put Inside layout.tsx then we have to made it client component
// Since we Can't Make layout.tsx as client component hence we put here 
// And Render This Component There in layout.tsx  

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

    return <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>

}