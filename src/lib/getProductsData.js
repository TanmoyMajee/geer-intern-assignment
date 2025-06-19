import getFilePath from './getFilePath'
import fs from 'fs';

const filePath = getFilePath() 

 const getProductsData = () => {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  // '{"products": [{"id": 1, "name": "Product 1"}]}'
  // str to object parsing
  return JSON.parse(jsonData);
};

export default getProductsData;