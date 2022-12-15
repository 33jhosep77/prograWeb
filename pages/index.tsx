import React from "react";
import Whiteboard from "../src";

export default function Home() {
  return (
    <main>
      <Whiteboard />
    </main>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;
  const API_KEY_WARNING = process.env.CODESANDBOX_SSE;

  if (!API_KEY) {
    console.warn(API_KEY_WARNING);
  }

  return { props: {} };
}
