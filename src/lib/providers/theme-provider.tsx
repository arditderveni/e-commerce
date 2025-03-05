"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the NextThemesProvider.
 *
 * @param props - The props to be passed to the NextThemesProvider.
 * @param props.children - The child components to be rendered within the NextThemesProvider.
 *
 * @returns The NextThemesProvider component with the provided props and children.
 */
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider;
