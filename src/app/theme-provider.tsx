"use client";

import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import { queryClient } from "@/services/api";

import { theme } from "@/styles/theme";

import "react-toastify/dist/ReactToastify.css";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {children}
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
