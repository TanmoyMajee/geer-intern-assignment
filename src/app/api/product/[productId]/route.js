
import path from 'path';
import fs from 'fs';
import getProductsData from '../../../../lib/getProductsData'
import saveProductsData from '../../../../lib/saveDataIntoFile'



//  GET the Details of specifoc product details
export async function GET(request, { params }) {
  try{
    const { productId } = await params;
    const id = parseInt(productId);
    console.log('Get this Prodect', id)
    const dt = getProductsData();
    // now i have the produt arr inside data so map upon it and find this product
    let x=null;
    dt.products.map((prd) => {
      if (prd.id == id) {
        x = prd;
      }
    })
    if(!x){
      return Response.json({msg:'Product Not Exits',status:400});
    }

    return Response.json({ msg: 'Working' , product : x});
  }catch(error){
      console.log(error)
    return Response.json(
      { error: 'Somethis went wrong' },
      { status: 500 }
    );
  }
}


export async function DELETE(request,{params}) {
  try {
    const { productId } = await params;
    const id = parseInt(productId);
    // get the product arr then then apply splice on that indx 
    const data = getProductsData();
    let indx = -1;
    data.products.map((prd,i)=>{
        if(prd.id == id){
          indx = i;
        }
    })
    console.log('INDX : ',indx);
    if(indx==-1){
      return Response.json({ msg: 'Product Not Exits', status: 400 });
    }
    // now delete fromt array and save in file
    data.products.splice(indx,1); // eg splice(2,3) so del the 2nd indx 
    console.log(data);
    saveProductsData(data);
    return Response.json({ msg: 'Product Deleted Successfully', status: 201 });
  } catch (error) {
    console.log(error)
    return Response.json(
      { error: 'Somethis went wrong' },
      { status: 500 }
    );
  }
}

