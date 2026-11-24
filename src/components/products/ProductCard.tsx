import type { Product } from "../../data/demo-products";

interface ProductCardProps {
    product: Product;
}


export default function ProductCard({
    product,
}: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat("en-US",  {
        style: "currency",
        currency: product.currency,
    }).format(product.priceMinor / 100);

    return (
        <article className="product-card">
            <img 
                src={product.imageUrl} 
                alt={product.name}
                className="product-image"
            />

            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{formattedPrice}</strong>
            </div>
        </article>
    );
}