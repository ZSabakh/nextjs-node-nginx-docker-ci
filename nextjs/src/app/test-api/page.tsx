"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import axios from "axios";

export default function TestAPI() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Next.js</h1>
      <div
        style={{
          margin: "1rem 0",
        }}
      >
        <Card
          sx={{
            minWidth: "30vw",
            maxWidth: "30vw",
            "@media (max-width: 600px)": {
              maxWidth: "100vw",
            },
          }}
        >
          <CardContent>
            <Typography variant="h4">Test API</Typography>
            <Typography>Click the button below to test the API</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={async () => {
                setText("Loading...");
                const res = await axios.get("/api");
                console.log(res.data);
                setText(res.data.text);
              }}
            >
              Test API
            </Button>
          </CardActions>
        </Card>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "rgba(56, 4, 40, 0.9)",
            color: "white",
            padding: "0.3rem",
            marginTop: "1rem",
            borderRadius: "0.2rem",
            border: "1px solid #808080",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ color: "#00ff00", marginRight: 0.5 }}>
            root@nextjs:~$
          </Typography>
          <Typewriter
            options={{
              strings: [text],
              autoStart: true,
              delay: 50,
              deleteSpeed: 10 ** 9,
            }}
          />
        </Box>
      </div>
      <p>You are in test-api dir</p>
    </>
  );
}
