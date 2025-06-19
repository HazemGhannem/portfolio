import type { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const config = {
  runtime: "nodejs",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Use full URL with host fallback to parse search params
    const url = new URL(req.url ?? "", `http://${req.headers.host}`);
    const title = url.searchParams.get("title") || "Portfolio";

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "8rem",
            background: "#151515",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "4rem",
              fontStyle: "normal",
              color: "white",
            }}
          >
            <span
              style={{
                fontSize: "8rem",
                lineHeight: "8rem",
                letterSpacing: "-0.05em",
                whiteSpace: "pre-wrap",
                textWrap: "balance",
              }}
            >
              {title}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5rem",
              }}
            >
              <img
                src={baseURL + person.avatar}
                style={{
                  width: "12rem",
                  height: "12rem",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "4.5rem",
                    lineHeight: "4.5rem",
                    whiteSpace: "pre-wrap",
                    textWrap: "balance",
                  }}
                >
                  {person.name}
                </span>
                <span
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: "2.5rem",
                    whiteSpace: "pre-wrap",
                    textWrap: "balance",
                    opacity: "0.6",
                  }}
                >
                  {person.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 720,
        // fonts: [...] // uncomment and add font data if you want to use custom fonts
      }
    );

    // Convert image response to ArrayBuffer, then to Buffer
    const buffer = await imageResponse.arrayBuffer();

    // Set headers and send the image buffer
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("Failed to generate image");
  }
}
