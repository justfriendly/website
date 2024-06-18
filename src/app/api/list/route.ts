// ./app/api/hello/route.ts
import { getRequestContext } from "@cloudflare/next-on-pages";

declare global {
  interface CloudflareEnv {
    // If you set another name in wrangler.toml as the value for 'binding',
    // replace "DB" with the variable name you defined.
    DB: D1Database;
  }
}

export const runtime = "edge";

export async function GET(request: Request) {
  const { env, cf, ctx } = getRequestContext();

  // If you did not use `DB` as your binding name, change it here
  const { results } = await env.DB.prepare(
    "SELECT * FROM list ORDER BY created_at DESC"
  ).all();

  return Response.json(results);
}

export async function POST(request: Request) {
  const { env, cf, ctx } = getRequestContext();

  try {
    const { name, country } = await request.json<any>();

    if (!name || !country) {
      return new Response(
        JSON.stringify({ message: "Name and country are required" }),
        {
          status: 400,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }

    // If you did not use `DB` as your binding name, change it here
    const result = await env.DB.prepare(
      "INSERT INTO list (name, country, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)"
    )
      .bind(name, country)
      .run();

    if (result.error) {
      return new Response(
        JSON.stringify({ message: "Failed to save", error: result.error }),
        {
          status: 500,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Saved successfully",
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to save", error: error }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
