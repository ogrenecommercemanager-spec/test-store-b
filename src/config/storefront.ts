export interface StorefrontConfig {
    businessId: string;
    name: string;
    tagline: string;
    currency: string;
    contactEmail: string;
}

export const storefront: StorefrontConfig = {
    businessId: "demo-business",
    name: "Demo Candle shop",
    tagline: "Small-batch candles made with care",
    currency: "USD",
    contactEmail: "demo@example.com",
}