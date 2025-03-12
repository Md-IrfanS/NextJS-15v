import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    /* const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization")); */
    const headersList = await headers();
    console.log(headersList.get('Authorization'));
    // const theme = request.cookies.get("theme");
    const cookiesStore = await cookies();
    cookiesStore.set('resultPerPage',"20");
    console.log(cookiesStore.get("resultPerPage"))
    // console.log(theme,'theme')
    return new Response("<h1>Profile data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}