Product Management API
This is a backend project using Express, Mongoose, and dotenv to perform CRUD operations on products.
Project Structure

index.js: Main application file
models/Product.js: Mongoose model for products
routes/productRoutes.js: API routes for CRUD operations
.env: Environment variables (not included in version control)

Prerequisites

Node.js (v14 or higher)
MongoDB (local or cloud instance)
npm

Installation

Clone the repository:

git clone <repository-url>
cd product-management-api


Install dependencies:

npm install


Create a .env file in the root directory with the following content:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/productdb

Running the Application

Ensure MongoDB is running on your system or use a cloud MongoDB instance.
Start the index:

npm start


The API will be available at http://localhost:3000.

API Endpoints

GET /api/products - Get all products
GET /api/products/:id - Get a single product by ID
POST /api/products - Create a new product
PUT /api/products/:id - Update a product
DELETE /api/products/:id - Delete a product

Example Product Schema
{
  "name": "Product Name",
  "price": 29.99,
  "description": "Product description",
  "stock": 100
}

Testing the API
You can use tools like Postman or curl to test the API endpoints. Example using curl:
# Create a product
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name":"Sample Product","price":19.99,"description":"Test product","stock":50}'

# Get all products
curl http://localhost:3000/api/products

# You can use thunder client tools in vs code to test the API