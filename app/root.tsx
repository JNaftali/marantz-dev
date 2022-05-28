import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useShouldHydrate } from "remix-utils";

import global from "./styles/global.css";

export const links: LinksFunction = () => {
  return [{ href: global, rel: "stylesheet" }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {useShouldHydrate() && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}
