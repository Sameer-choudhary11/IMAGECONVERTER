const sharp = require("sharp");
let obj={};
const PDFDocument = require('pdfkit');
const fs = require('fs');


// Ready to Use For Converter
obj.Jpeg=async (file,name)=>{
  
  try {
    let data =  await sharp(file).jpeg({ quality: 100,chromaSubsampling: '4:4:4',mozjpeg: true }).toFormat("jpeg").toFile('Convert/'+name+'.jpeg').then(info => {return info }).catch((d)=>{console.log(d)});  
  if(data)
  {
    return name+'.jpeg'
  }else{
    return "Not Support"
  }
  } catch (error) {
    return error.message
  }
}

obj.Jpg=async (file,name)=>{  
  try {
    let data = await sharp(file).toFormat("jpg").toFile('Convert/'+name+'.jpg').then(info => {return info }).catch((d)=>{console.log(d)});  
  if(data)
  {
    return name+'.jpg'
  }else{
    return "Not Support"
  }
  } catch (error) {
    return error.message
  }
  
}

obj.Webp=async (file,name)=>{

  try {
    let data = await sharp(file, { animated: true }).webp({ effort: 6,lossless:true }).toFormat("webp").toFile('Convert/'+name+'.webp').then(info => {return info }).catch((d)=>{console.log(d)});
  if(data)
  {
    return name+'.webp'
  }else{
    return "Not Support"
  }
  } catch (error) {
    return error.message
  }
}

obj.Png=async(file,name)=>{
  
  try {   
  let data =await sharp(file).png({palette:true}).toFormat("png").toFile('Convert/'+name+'.png').then(info => {return info }).catch((d)=>{console.log(d)});  
  if(data)
  {
    return name+'.png'
  }else{
    return "Not Support"
  }

  } catch (error) {
    return error.message
  }
  
}

obj.Gif= async(file,name)=>{
  try {
    
    let data = await sharp(file,{animated:true}).gif({ dither: 0 }).toFormat("gif").toFile('Convert/'+name+'.gif').then(info => {return info }).catch((d)=>{console.log(d)});    
  if(data)
  {
    return name+'.gif'
  }else{
    return "Not Support"
  }

  } catch (error) {
   return error.message 
  }
}

obj.Tiff=async (file,name)=>{

  try {
  
    let data =  await sharp(file).tiff({compression: 'lzw', bitdepth: 1 }).toFormat("tiff").toFile('Convert/'+name+'.tiff').then(info => {return info }).catch((d)=>{console.log(d)});
  if(data)
  {
    return name+'.tiff'
  }else{
    return "Not Support"
  }
    
  } catch (error) {
    return error.message
  }

  
}

obj.Avif= async(file,name)=>{
  try {
    let data =  await sharp(file).avif({ effort: 2,lossless:true }).toFormat("avif").toFile('Convert/'+name+'.avif').then(info => {return info }).catch((d)=>{console.log(d)});  
  if(data)
  {
    return name+'.avif'
  }else{
    return "Not Support"
  }

  } catch (error) {
    return error.message
  }
  
}

obj.Heif= async(file,name)=>{
  try {
  
   let data =  await sharp(file).heif({ lossless:true,quality:100 }).toFormat("heif").toFile('Convert/'+name+'.heif').then(info => {return info }).catch((d)=>{console.log(d)});
  if(data)
  {
    return name+'.heif'
  }else{
    return "Not Support"
  }
    
  } catch (error) {
    return error.message;
  }
  
  
}

obj.Svg=async(file,name)=>{
  try {
    let data = await sharp(file).toFormat("svg").toFile('Convert/'+name+'.svg').then(info => {return info }).catch((d)=>{console.log(d)});    
    if(data)
    {
      return name+".raw"
    }else{
      return "Not Support"
    }
  } catch (error) {
    return error.message
  }
}

obj.Pdf=async (file,name)=>{  
  
  try {
    // create a new PDFDocument
const doc = new PDFDocument();
// pipe the document to a file
doc.pipe(fs.createWriteStream('Convert/'+name+'.pdf'));
// add the image to the PDF
doc.image(file, 0, 0, { width: doc.page.width, height: doc.page.height });
// end the document
doc.end();
      return name+".pdf"
  } catch (error) {
    return error
  }
  }

// Resize

obj.Resize= async(file,name,h,w,format)=>{
let ext=format;
ext=ext.slice(1);
try {
  let data =await sharp(file).resize(Number(w),Number(h), {
    fit: sharp.fit.inside,    
  }).toFormat(ext).toFile('Resize/'+name+format).then(info => {return info }).catch((d)=>{console.log(d)});
  if(data)
  {
    return name+format 
  }else{
    return "Not Support"
  }

} catch (error) {
  return error.message
}
 
}

// Alpha Remove

obj.AlphaRm =async(file,name)=>{
 let data = await sharp(file).png().flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
 .toFile(name+'.png', function(err, info) {});
  if(data)
  {
    return name
  }else{
    return "Not Support"
  }
}

// Extend 
obj.Extent= async(file,name)=>{
  try {
    let data = await sharp(file).extract({ left: 100, top: 10, width: 500, height: 500 }).toFile(name+'.png', function(err, info) {});
    if(data)
    {
      return name
    }else{
      return "Not Support"
    }  
  } catch (error) {
    return error.message
  }  
}

// Crop 

obj.Crop = async(file,name,format,width,height,top,left)=>{
  try {
  let ext=format;
  ext=ext.slice(1);
  let data = await sharp(file).extract({ width: Number(width), height: Number(height), left: Number(left), top: Number(top) })
  .toFile('Crop/'+name+format).then(info => {return info }).catch((d)=>{console.log(d)});
   if(data)
   {
    return name+format;
   }else{
    console.log(data);
    return "Not Support"
   }  
  } catch (error) {
    return error.message;
  }
}

// Compresser

obj.Compresser = async(file,name,format,width,height,Quality)=>{
  try {
    let ext=format;
    ext=ext.slice(1);
    let data = await sharp(file).resize(Number(width),Number(height)).png({quality:Number(Quality),compressionLevel:Number(Math.round(Quality/11))}).toFormat(ext).toFile('Compress/'+name+format).then(info => {return info }).catch((d)=>{console.log(d)});
    if(data)
    {
      return name+format;
    }else{
      return "Not Support"
    }

  } catch (error) {
    return error.message;
  }

}

module.exports=obj