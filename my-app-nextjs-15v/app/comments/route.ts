import { NextRequest } from "next/server";
import { comments } from "./data"
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filterComments = query ? comments.filter((coment)=> coment.text.toLowerCase().includes(query.toLowerCase())) : comments
    return Response.json(filterComments)
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        ...comment,
        id: comments.length+1
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}
