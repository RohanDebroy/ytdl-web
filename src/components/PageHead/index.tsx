import Head from "next/head";
import React, { FC } from "react";

type PageHeadProps = {
  title: string;
  description?: string;
};

const PageHead: FC<PageHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | Youtube-DL Web Interface</title>
      {!!description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
