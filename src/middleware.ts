import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { apiAuthPrefix, authRoutes, publicRoutes } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // Solution for the dynamic routes.. for example /movies/[id]
  //   const isPublicRoute = publicRoutes.some((route) => {
  //     if (route instanceof RegExp) {
  //       return route.test(nextUrl.pathname);
  //     }
  //     return route === nextUrl.pathname;
  //   });

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return undefined;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return undefined;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
