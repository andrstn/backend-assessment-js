This is an assessment project for Backend Developer position by Andrestine Boter

The initial state of the application was forked from a given repository with Wrangler and Cloudflare Workers.

Tech Stack used:
Cloudflare (Deployment)
Wrangler (CLI)
Hono (Backend framework)
Drizzle (ORM)
Axios (handle http requests)

Endpoints implemented:
`GET /api/products` - retrieve products from external url and save each one with the necessary fields in the database and return a message that says the products are already recorded
`POST /api/products` - retrieve products from external url and save each one with the necessary fields in the database and return a restructured response of the products recorded
`DELETE /api/products/:id` - delete products that corresponds to the id in the path parameters
`PUT /api/products` - retrieve all products from the database and map each one to append the product sku value to the product tile value. The products will then be updated in the database with the new product title
`DELETE /api/products` - (ADDITIONAL) deletes all products from the database

The application is published in Cloudflare
`https://ma-project.filta-assessment.workers.dev/`
