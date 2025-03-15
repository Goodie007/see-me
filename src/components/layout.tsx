import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Navbar />
      <Box paddingX={"20px"} paddingTop={4}>
        {children}
      </Box>
    </Box>
  );
}
