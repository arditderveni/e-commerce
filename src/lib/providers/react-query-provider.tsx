"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../store";

/**
 * ReactQueryProvider component that sets up the React Query client and provides it to the application.
 *
 * @param props - The props object.
 * @param props.children - The child components to be wrapped by the QueryClientProvider.
 *
 * @returns The QueryClientProvider component with the provided client and children.
 */
function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
