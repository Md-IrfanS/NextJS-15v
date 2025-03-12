import { comments } from "../data";

export async function GET(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const isExistsComment = comments.find((comment)=> comment.id == parseInt(id));
    return Response.json(isExistsComment);
}


export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const body= await request.json();
    const {text} = body;
    const commentIndex = comments.findIndex((comment)=> comment.id == parseInt(id));
    console.log(commentIndex);
    comments[commentIndex].text = text;
    return Response.json(comments[commentIndex]);
}

export async function DELETE(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const index = comments.findIndex((comment)=> comment.id == parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment)
}
