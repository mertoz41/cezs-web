import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: any) {
//     const cookieStore = cookies();
//     const token = cookieStore.get("jwt");
//     console.log(token)
// //   const { token } = req.cookies.jwt;
// //   console.log(req.cookies.jwt);
//   if (token) {
// //     // Clone the request and add the Authorization header for backend API requests
//     const modifiedReq = req.nextUrl.clone();
//     modifiedReq.headers.set("Authorization", `Bearer ${token}`);

//     // Allow the request to proceed
//     return NextResponse.rewrite(modifiedReq);
//   }
}
