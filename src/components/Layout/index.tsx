import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import Header from "../Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
