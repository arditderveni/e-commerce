"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the NextThemesProvider.
 *
 * @param {React.ComponentProps<typeof NextThemesProvider>} props - The props to be passed to the NextThemesProvider.
 * @param {React.ReactNode} props.children - The child components to be rendered within the NextThemesProvider.
 *
 * @returns {JSX.Element} The NextThemesProvider component with the provided props and children.
 */
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider;
