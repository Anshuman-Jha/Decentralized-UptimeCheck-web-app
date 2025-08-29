"use client";

import {

    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

// This is we made for logo not installed from dependencies
// I just placed it inside cpomponents/ui
export function Appbar() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between p-4">
            <div className="text-sm font-medium">DPIN Uptime</div>
            <div className="flex items-center gap-3">
                <button
                    aria-label="Toggle theme"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    <Sun className="hidden size-4 dark:inline" />
                    <Moon className="inline size-4 dark:hidden" />
                </button>
                {/*If user is sidneout then signin/signup option Renders  */}
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                {/*If User is Signedin then Render UserButton */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}