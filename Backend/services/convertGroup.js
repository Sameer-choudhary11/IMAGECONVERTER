const converter= require("../model/converter");
let obj={}

obj.Convert_To=async(file,name,body)=>{    
    let { format}= body;    
    if('jpeg'==format){    
    return  await converter.Jpeg(file,name);
    }else if('png'==format){
    return  await converter.Png(file,name);    
    }else if('webp'==format){
    return  await converter.Webp(file,name);
    }else if('gif'==format){
    return  await converter.Gif(file,name);         
    }else if('jpg'==format){
    return  await converter.Jpg(file,name);     
    }else if('tiff'==format){
    return  await converter.Tiff(file,name);
    }else if('avif'==format){
    return  await converter.Avif(file,name);
    }else if('heif'==format){
    return  await converter.Heif(file,name);         
    }else if('pdf'==format){            
    return await converter.Pdf(file,name);
    }else if('svg'==format){
    return await converter.Svg(file,name);
    }else{
    return "All False";
    }
}

obj.Resize_ = async(file,name,h,w,format)=>{
    return await converter.Resize(file,name,h,w,format);
}

obj.Remove_ = async(file,name,bdy)=>{
    return await converter.BgRemove(file,name);
}

obj.Extent_ = async(file,name)=>{
    return await converter.Extent(file,name)
}

obj.Crop_ = async(file,name,format,width,height,top,left)=>{
    return await converter.Crop(file,name,format,width,height,top,left);
}

obj.Compress_ = async(file,name,format,width,height,Quality)=>{
    return await converter.Compress(file,name,format,width,height,Quality);
}

module.exports=obj;