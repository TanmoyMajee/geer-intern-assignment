// Mock database (same as above)
import path from 'path';
import fs from  'fs';
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://via.placeholder.com/300",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with health monitoring",
    image: "https://via.placeholder.com/300",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    description: "Comfortable running shoes for all terrains",
    image: "https://via.placeholder.com/300",
    category: "Sports"
  }
];

export async function GET(request) {
  return Response.json(products);
}

export async function POST(request) {
    const {name} = await request.json();
    console.log('name:',name)
    console.log(process.cwd())
    const newPath = path.join(process.cwd(),'src','data','product.json')
    console.log(newPath);
    return Response.json({msg:'respose'})
}

// now go through the assignmetn again and  explain me if i go for a seperate json file approach then whta i need to do and give the routes aslo