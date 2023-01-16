const services = require("../utilities/converter_connection");
const convert={};

// Ready to Use
convert.Jpeg=async(file,name)=>{
 return await services.Jpeg(file,name);  
}
convert.Jpg= async(file,name)=>{
 return await services.Jpg(file,name)  
}
convert.Webp=async(file,name)=>{
 return await services.Webp(file,name);  
}
convert.Png=async(file,name)=>{
 return  await services.Png(file,name);  
}
convert.Gif=async(file,name)=>{
 return await services.Gif(file,name);  
}
convert.Avif= async(file,name)=>{
 return  await services.Avif(file,name);  
}
convert.Tiff=async (file,name)=>{    
 return await services.Tiff(file,name);
}
convert.Heif= async(file,name)=>{
 return  await services.Heif(file,name);
}
convert.Pdf = async(file,name)=>{  
  return await services.Pdf(file,name)
}
convert.Svg =async(file,name)=>{
  return await services.Svg(file,name);
}
//Resize
convert.Resize = async(file,name,h,w,format)=>{
  return await services.Resize(file,name,h,w,format);
}
//Alpha Remove
convert.BgRemove = async(file,name)=>{
  return await services.AlphaRm(file,name);
}
convert.Extent=async(file,name)=>{
  return await services.Extent(file,name);
}
// Crop Image
convert.Crop = async(file,name,format,width,height,top,left)=>{
  return await services.Crop(file,name,format,width,height,top,left);
}
// Compress Image
convert.Compress = async(file,name,format,width,height,Quality)=>{
  return await services.Compresser(file,name,format,width,height,Quality);
}
module.exports=convert;