import {
  AppBar,
  Container,
  Toolbar,
  Link as MuiLink,
  styled,
} from "@mui/material";
import React, { FC } from "react";

const Link = styled(MuiLink)({
  backgroundImage: "linear-gradient(45deg, orange, purple)",
  backgroundClip: "text",
  textFillColor: "transparent",
  cursor: "pointer",
});

const Header: FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container>
        <Toolbar>
          <Link
            underline="none"
            href="/"
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
            underline="none"
          >
            Github
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
