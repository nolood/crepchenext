"use client";

import type { FC, ReactNode } from "react";
import { darkTheme } from "@/theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
