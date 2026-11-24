export interface Product {
    id: string;
    name: string;
    description: string;
    priceMinor: number;
    currency: string;
    imageUrl: string;
}

export const demoProducts: Product[] = [
    {
        id: "demo-candle-001",
        name: "Lavender Soy Candle",
        description: "A relaxing lavender candle made with soy wax.",
        priceMinor: 1800,
        currency: "USD",
        imageUrl: "images/lavender-candle.jpg",
    },
];