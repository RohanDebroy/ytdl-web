import PageHead from "@/components/PageHead";
import {
  Container as MuiContainer,
  Divider,
  IconButton,
  InputBase,
  Paper as MuiPaper,
  styled,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: "2px 4px",

  display: "flex",
  alignItems: "center",

  width: "100%",
  minWidth: 200,
  maxWidth: 400,

  borderBottom: "1px solid transparent",
  borderImage: "linear-gradient( 45deg,orange, purple);",
  borderImageSlice: 1,
})) as typeof MuiPaper;

const Container = styled(MuiContainer)({
  display: "grid",
  placeItems: "center",
  flex: 1,
  height: "100%",
}) as typeof MuiContainer;

export default function Home() {
  return (
    <Container component="main">
      <PageHead
        title="Home"
        description="Home of the Youtube-DL Web interface"
      />
      <Paper component="form" method="get" action="/result">
        <InputBase
          autoComplete="off"
          name="url"
          required
          placeholder="Enter a video URL"
          inputProps={{
            "aria-label": "Enter a video URL",
          }}
          sx={{
            ml: 1,
            flex: 1,
          }}
        />
        <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
        <IconButton type="submit" aria-label="search" sx={{ p: "10px" }}>
          <SearchOutlined />
        </IconButton>
      </Paper>
    </Container>
  );
}
