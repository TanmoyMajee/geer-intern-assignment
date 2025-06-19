

import getProductsData from '../../../lib/getProductsData'
import saveProductsData from '../../../lib/saveDataIntoFile'




export async function GET() {
  try {
    const data = getProductsData();
    // console.log(data)
    return Response.json(data.products);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
 try {
   const { name, price, imageUrl, description, category } = await request.json();
   if (!name || !price || !imageUrl) {
     return Response.json({
       msg: 'Missing required fields: name, price, imageUrl',
       status: 400
     })
   }
   

   const data = getProductsData(); // get all the product 

  //  now create the new Id of the product
   let mxId =0;
   data.products.forEach(product => {
     if (product.id > mxId) {
       mxId = product.id;
     }
   });
   const newId = mxId+1;
   const newProduct = {
    id:newId,
    name,
    price,
    imageUrl,
    description : description || '',
    category : category || 'general'
   }
   
  //  get the prodcut object and push the new product

  data.products.push(newProduct) // add newprodut into curr array & save the file
  
  saveProductsData(data);

   return Response.json({ msg: 'Product added Successfully' , status:201 });
 } catch (error) {
   console.log(error)
   return Response.json(
     { error: 'Failed to Add product' },
     { status: 500 }
   );
 }

}

// now go through the assignmetn again and  explain me if i go for a seperate json file approach then whta i need to do and give the routes aslo