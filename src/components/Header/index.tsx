import { AppBar, Container, Toolbar, Link } from "@mui/material";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Link
            href="/legacy"
            sx={{
              mr: "auto",
            }}
          >
            Youtube DL
          </Link>
          <Link
            href="https://github.com/RohanDebroy"
            target="__blank"
            rel="noopener"
          >
            Github
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
