import getFilePath from './getFilePath.js'
import fs from 'fs';


const filePath = getFilePath();


export const saveProductsData = (data)=> {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
export default saveProductsData;