import { notFound } from "next/navigation";

export default async function ProductDetails({params}: {params: Promise<{productId: string}>}) {
    const {productId} = await params;
    if (Number(productId) >= 30) {
        notFound()
    }
    return (
        <div>
            <h1>Product Details - {productId}</h1>
        </div>
    )
}