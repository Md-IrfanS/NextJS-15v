import { notFound } from "next/navigation";

export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string}>}){
    const{productId, reviewId} =await params;
    if (Number(reviewId) >= 2) {
        notFound();
    }
    return (
        <div>
            <h2>Product - {productId} Review Details - {reviewId} </h2>
        </div>
    )
}