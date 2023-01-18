import {  useState } from "react";
import Image from "next/image";
import path from "path";
import fileDownload from 'js-file-download'
import axios from 'axios'
export default function Converter()
{
    const [file,setFile] = useState(undefined);    
    let [Size,setSize] = useState(0);
    let [image,setImage] = useState();
    let [ToExt,setExt] = useState(undefined);
    let [extension,setexention] = useState("");
    let [indicator,setInd] = useState(1);
    let [Img_Id,setImageId]=useState();
    async function handleChange(e) {
        setImage(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));        
        setSize(Math.round(e.target.files[0].size/1024/1024));        
        setexention(path.extname(e.target.files[0].name))

    }   
    function handleChange3(e){
        setExt(e.target.value);        
    }
    function ResetAll()
    {
        setSize(0);
        setFile(undefined);        
        setExt(undefined);
        setImageId();
        setImage("");
        setInd(1);
    }
    async function Submit()
    {   
      let res;     
      if(Size!=undefined&Size<52)
      {
        setInd(0);
        let Form = new FormData;
        Form.append("format",ToExt);        
        Form.append("Image",image);
        res = await fetch("http://localhost:8000/Convert",{method:'POST',body:Form}).then((d)=>{return d.json()}).catch((d)=>{console.log(d);});        
        if(/^SC_\d{4}/.test(res))
        {
            setInd(2);
            setImageId(res);
        }else if(res=="Not Support"){
          setImageId("Not Support");
          setInd(1);
        }else if(res=="error"){
          setImageId("error");
          setInd(1);
        }else if(res=="All False"){
          setImageId("error");
          setInd(1);
        }else{
          setImageId("Not Support");
          setInd(1);
        }
      }else{
        setImageId("Not Support");
        setInd(1);
      }        
        
    }
    async function Download()
    {
        let Form = new FormData;
        Form.append("ImgId",Img_Id);                
         await axios("http://localhost:8000/download_con", {
          method:"POST",
          data:Form,
          responseType: 'blob',          
        }).then((d)=>{        
        fileDownload(d.data,Img_Id)}).catch((d)=>{
        if(d)
        {
          setImageId("error")
        }
        });
    }
    return(<>
    {Img_Id=="Not Support"?<><div className="bg-red-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  we don&#39;t support it  something went wrong please try again <br /> or <br /> if you convert image to pdf make sure file size must be greater than 100kb
  </p>
</div></>:<></>}
{Img_Id=="error"?<><div className="bg-red-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  something went wrong please try again
  </p>
</div></>:<></>}

    <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 bg-gray-50 container shadow-sm mt-4">
    {file==undefined?<><div className="lg:col-span-2 col-span-6 py-4 px-2">
              
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-indigo-500 px-6 pt-5 pb-6 h-72">
                <div className="space-y-1 text-center mt-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                  <div className="flex text-sm text-gray-600">                    
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" typeof="image" accept="image/png,image/gif,image/jpeg,image/jpg,image/webp,image/heif,image/tiff,image/avif" onChange={handleChange} className="sr-only"/>
                    
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  </label>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF, etc</p>
                </div>
              </div>
            </div></>:<><div className="lg:col-span-2 col-span-6 py-4 px-2">{extension=='.pdf'?<><iframe className="p-3 m-1 border-2 border-dashed border-indigo-500 rounded-lg w-full h-full" src={file} frameBorder="2" ></iframe></>:<><Image className="p-3 m-1 border-2 border-dashed border-indigo-500 rounded-lg w-full " src={file} alt="Loading..." width={950} height={280} /></>}</div></>}
            
            <div className="w-full lg:col-span-1 col-span-6">            
            <div className="container p-4">
                <h1 className="text-2xl fw-bold py-2 text-indigo-500">Convert To <span className=" uppercase">{ToExt}</span></h1>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                  {ToExt=="jpeg"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold" value={"jpeg"} onClick={handleChange3}>JPEG</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold" value={"jpeg"} onClick={handleChange3}>JPEG</button></div></>}
                  {ToExt=="jpg"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"jpg"} onClick={handleChange3}>JPG</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"jpg"} onClick={handleChange3}>JPG</button></div></>}
                  {ToExt=="png"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"png"} onClick={handleChange3}>PNG</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"png"} onClick={handleChange3}>PNG</button></div></>}
                  {ToExt=="gif"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"gif"} onClick={handleChange3}>GIF</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"gif"} onClick={handleChange3}>GIF</button></div></>}
                  {ToExt=="webp"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"webp"} onClick={handleChange3}>WEBP</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"webp"} onClick={handleChange3}>WEBP</button></div></>}
                  {ToExt=="heif"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"heif"} onClick={handleChange3}>HEIF</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"heif"} onClick={handleChange3}>HEIF</button></div></>}
                  {ToExt=="tiff"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"tiff"} onClick={handleChange3}>TIFF</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"tiff"} onClick={handleChange3}>TIFF</button></div></>}
                  {ToExt=="avif"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"avif"} onClick={handleChange3}>AVIF</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"avif"} onClick={handleChange3}>AVIF</button></div></>}
                  {/* {ToExt=="svg"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"svg"} onClick={handleChange3}>SVG</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"svg"} onClick={handleChange3}>SVG</button></div></>} */}
                  {ToExt=="pdf"?<><div className="w-full bg-indigo-500 text-white p-2 text-center rounded-md"><button className=" fw-bold "value={"pdf"} onClick={handleChange3}>PDF</button></div></>:<><div className="w-full bg-indigo-50 text-indigo-600 p-2 text-center rounded-lg"><button className=" fw-bold "value={"pdf"} onClick={handleChange3}>PDF</button></div></>}
                  </div>                    
                  {Size<50000&Size>=0?<>{indicator==2?<><div className="text-center mt-4"><button className="w-full inline-flex justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" onClick={Download} >Download</button></div></>:<>{indicator==1?<><div className="text-center mt-4"><button className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={Submit}  >Convert</button></div></>:<><div className="mt-4 text-center" role="status">
<svg aria-hidden="true" className="mx-auto  w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span className="sr-only">Loading...</span>
</div></>}</>}</>:<><div className="bg-red-100 text-center text-red-600 p-2 mt-4 rounded-md fw-semibold">File Size Must be 50MB or less 50MB</div></>}                                      
                <div className="px- py-1 text-right">
                 <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={ResetAll}>Reset</button>
                </div>
            </div>
            </div>
          </div>          
          
    </>)
}


