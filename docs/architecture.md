Merchant-specific data belongs in configuration or data sources, rather than being scattered throughout components.



Storefront components do not access PostgreSQL directly. Once the real backend exists, the storefront will use the shared Rust API through a typed client. The frontend will NEVER directly access the database. Under no circumstance will this happen.



Deployment configuration stays separate from storefront business logic. Changing from GitHub Pages to a commercial host shouldn't require rewriting product pages, checkout components, or the API client.