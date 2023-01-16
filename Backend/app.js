const express = require("express");
const app = express();
const converter= require("./model/converter");
const path = require("path");
const ConGroup = require("./services/convertGroup");
const WriteFile = require("./services/writeFile");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const { json } = require("express");
const generateUniqueId = require('generate-unique-id');
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({createParentPath:true}));
app.listen(8000,()=>{
    console.log("Server started on Port 8000");
})


app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
    
app.post("/convert",async(req,res)=>{
    try {
      let msg;
      const id = generateUniqueId({
        length: 4,
        useLetters: false,
        useNumbers:true,    
      });            
      if(req.files.Image)
      {
        await WriteFile.FileToSave("Convert/To_"+req.files.Image.name,req.files.Image.data);
        setTimeout(async() => {    
        msg = await ConGroup.Convert_To("Convert/To_"+req.files.Image.name,"SC_"+id,req.body);        
        res.send(JSON.stringify(msg));
        }, 1000);                
      }else{
        res.send(JSON.stringify("Image or File Not Found"));
      }    
    } catch (error) {
        res.send(JSON.stringify("error"));
    }
})

app.post("/Resize",async(req,res)=>{
    try {
      let msg;
      const id = generateUniqueId({
        length: 4,
        useLetters: false,
        useNumbers:true,    
      });    
      let {height,width,format}= req.body;      
      if(format=="Original")      
      {        
        format=path.extname(req.files.Image.name);                                
      }else{
        format="."+format;
      }      
      await WriteFile.FileToSave("Resize/"+req.files.Image.name,req.files.Image.data);
      setTimeout(async() => {
        msg =await ConGroup.Resize_("Resize/"+req.files.Image.name,"SR_"+id,height,width,format);
        res.send(JSON.stringify(msg));
      }, 1000);
    } catch (error) {
      res.send(JSON.stringify(error));
    }
});


app.post("/Compress",async(req,res)=>{
  try {
    let msg;
    const id = generateUniqueId({
      length: 4,
      useLetters: false,
      useNumbers:true,    
    });    
    let {height,width,format,quality}= req.body;      
    if(format=="Original")      
    {        
      format=path.extname(req.files.Image.name);                                
    }else{
      format="."+format;
    }      
    await WriteFile.FileToSave("Compress/"+req.files.Image.name,req.files.Image.data);
    setTimeout(async() => {
      msg =await ConGroup.Compress_("Compress/"+req.files.Image.name,"SC_"+id,format,width,height,quality);
      res.send(JSON.stringify(msg));
    }, 1000);
  } catch (error) {
    res.send(JSON.stringify(error));
  }
});


// Download Convert Image
app.post("/download_con",async(req,res)=>{  
  try {  
      if(/^SC_\d{4}/.test(req.body.ImgId))
      {
        res.download(path.join(__dirname,`./Convert/${req.body.ImgId}`))        
      }else{
        res.send("Not Found");
      }
  } catch (error) {
    res.send(JSON.stringify("error"))
  }    
})
// Download Compress Image
app.post("/download_com",async(req,res)=>{
  try {  
    if(/^SC_\d{4}/.test(req.body.ImgId))
    {
      res.download(path.join(__dirname,`./Compress/${req.body.ImgId}`))        
    }else{
      res.send("Not Found");
    }
} catch (error) {
  res.send(JSON.stringify("error"))
}
})

// Download Resize Image
app.post("/download_re",async(req,res)=>{
  try {  
    if(/^SR_\d{4}/.test(req.body.ImgId))
    {
      res.download(path.join(__dirname,`./Resize/${req.body.ImgId}`))        
    }else{
      res.send("Not Found");
    }
} catch (error) {
  res.send(JSON.stringify("error"))
}
})

app.all("*",async(req,res)=>{
  res.send(JSON.stringify("Coming Soon Bro/Sis"));
})


// jpeg: 'false',
// png: 'false',
// webp: 'false',
// gif: 'false',
// jp2: 'false',
// tiff: 'false',
// avif: 'false',
// heif: 'false',
// pdf: 'false',

