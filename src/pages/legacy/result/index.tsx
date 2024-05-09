import Entries from "@/components/Entries";
import PageHead from "@/components/PageHead";
import ytdl from "@/services/ytdl";
import { stringifyQuery } from "@/utils/url";
import { Box, Container, styled, Typography } from "@mui/material";
import { GetServerSidePropsContext, NextPage } from "next";
import absoluteUrl from "next-absolute-url";

const DetailsOuterContainer = styled(Box)({
  width: "100%",
  minHeight: "400px",

  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

const DetailsInnerContainer = styled(Container)({
  minHeight: "400px",

  display: "flex",
  alignItems: "flex-end",

  gap: "1.5rem",
  padding: "1.5rem",

  "@media (max-width: 600px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Image = styled("img")({
  width: "100%",
  minWidth: "150px",
  maxWidth: "250px",

  aspectRatio: "1/1",
  background:
    "linear-gradient(white, white) padding-box,linear-gradient(to right, red, purple) border-box",
  borderRadius: "10px",
  border: "2px solid transparent",
});

const TitleContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  padding: "0.5rem",

  "@media (max-width: 600px)": {
    alignItems: "center",
  },
});

const Result: NextPage<Awaited<ReturnType<typeof ytdl>>> = (props) => {
  console.log(props);
  return (
    <>
      <PageHead title="Result" />
      <Box component="main">
        <DetailsOuterContainer
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${props.thumbnail})`,
          }}
        >
          <DetailsInnerContainer>
            <Image src={props.thumbnail} alt="" loading="lazy" />
            <TitleContainer>
              <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                sx={{
                  textAlign: { xs: "center", sm: "unset" },
                }}
              >
                {props.title}
              </Typography>
              <Typography component="span" variant="subtitle1">
                uploaded by {props.uploader}
              </Typography>
              <Typography component="span" variant="subtitle1">
                duration of {props.duration}
              </Typography>
            </TitleContainer>
          </DetailsInnerContainer>
        </DetailsOuterContainer>
        <Container>
          <Entries formats={props.formats} bestFormatId={props.bestFormatId} />
        </Container>
      </Box>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req } = context;
  const allQuery = "?" + stringifyQuery(query) + "&playlist=false";
  const { origin } = absoluteUrl(req);
  const videoInfo = await ytdl(allQuery, origin);

  return {
    props: videoInfo,
  };
}

export default Result;
