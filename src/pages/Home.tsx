import ProductCard from "../components/products/ProductCard";
import { storefront } from "../config/storefront";
import { demoProducts } from "../data/demo-products";
import { buildInfo } from "../config/build";

export default function Home() {
    return (
        <main className="storefront">
            <header className="store-header">
                <h1>{storefront.name}</h1>
                <p>{storefront.tagline}</p>
            </header>

            <section className="hero">
                <h2>Handcrafter Candles</h2>
                <p>Discover our collection of small-batch candles.</p>
            </section>

            <section className="products">
                <h2>Featured Products</h2>

                <div className="product-grid">
                    {demoProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            <footer className="store-footer">
                <p>Demo storefront - not accepting orders</p>
                <small>
                    Build: {buildInfo.commitSha.slice(0, 7)}
                </small>
            </footer>
        </main>
    );
}