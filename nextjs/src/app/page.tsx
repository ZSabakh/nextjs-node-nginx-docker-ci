"use client";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <Link href="/test-api">
        <Button variant="contained">Will take you to test-api</Button>
      </Link>
    </>
  );
}
