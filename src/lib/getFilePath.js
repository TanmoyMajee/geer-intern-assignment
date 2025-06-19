import path from 'path';
 const getFilePath = ()=>{
  const filpath = path.join(process.cwd(), 'src', 'data', 'product.json');
  console.log(filpath);
  return filpath;
}

export default getFilePath;
