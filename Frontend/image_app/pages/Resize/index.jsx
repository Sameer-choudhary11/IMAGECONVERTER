import { useEffect, useState } from "react";
import Image from "next/image";
import { getImageSize } from 'react-image-size';
import fileDownload from 'js-file-download'
import axios from 'axios'
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

export default function Resize()
{
    const [file,setFile] = useState(undefined);
    let [width,setWidth] = useState();
    let [height,setHeight] = useState();
    let [image,setImage] = useState();
    let [ext,setExt] = useState("Original");
    let [indicator,setInd] = useState(1);
    let [Img_Id,setImageId]= useState();
   async function handleChange(e) {
        setImage(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
        const { width, height } = await getImageSize(URL.createObjectURL(e.target.files[0]));
        setHeight(height);
        setWidth(width);                
    }
   function handleChange2(e)
    {
        const {name,value}=e.target;
        if(name=="height"&value>-1)
        {
            setHeight(value);
        }else if(name=="width"&value>-1)
        {
            setWidth(value)
        }        
    }
    function handleChange3(e){
        setExt(e.target.value);        
    }
    function ResetAll()
    {
        setHeight(0);
        setFile(undefined);
        setWidth(0);
        setImage("");
        setInd(1);
    }
    async function Submit(e)
    {
        e.preventDefault();
        setInd(0);        
        let Form = new FormData;
        Form.append("format",ext);
        Form.append("height",height);
        Form.append("width",width);
        Form.append("Image",image);
        let res = await fetch("http://localhost:8000/Resize",{method:'POST',body:Form}).then((d)=>{return d.json()}).catch((d)=>{console.log(d)});        
        if(/^SR_\d{4}/.test(res))
        {
            setInd(2);
            setImageId(res);
        }else if(res=="Not Support"){
          setImageId("Not Support")
        }else{
          setImageId("Not Support")
        }
    }
    async function Download()
    {
      let Form = new FormData;
      Form.append("ImgId",Img_Id);                
       await axios("http://localhost:8000/download_re", {
        method:"POST",
        data:Form,
        responseType: 'blob',          
      }).then((d)=>{        
      fileDownload(d.data,Img_Id)}).catch((d)=>{      
        if(d)
        {
          setImageId("Not Support")
        }
      });
    }
    return(<>
    <Navbar />
    {Img_Id=="Not Support"?<><div className="bg-red-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  something went wrong please try again
  </p>
</div></>:<></>}
    <div className="grid lg:grid-cols-3  grid-cols-1 gap-4 bg-gray-50 container">
    {file==undefined?<><div className="lg:col-span-2 col-span-6 py-4 px-2">
              
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-indigo-500 px-6 pt-5 pb-6 h-72">
                <div className="space-y-1 text-center mt-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" onChange={handleChange} className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF, etc</p>
                </div>
              </div>
            </div></>:<><div className="lg:col-span-2 col-span-6 py-4 px-2"><Image className="p-3 m-1 border-2 border-dashed border-indigo-500 rounded-lg w-full " src={file} alt="Loading..." width={950} height={280} /></div></>}
            
            <div className="w-full lg:col-span-1 col-span-6">            
            <div className="container p-4">
                <h1 className="text-2xl fw-bold py-2 text-indigo-600">Resize Image</h1>
                <form action="" className="pb-4" onSubmit={Submit}>
                    <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="Width" className="block text-medium font-medium text-black">
                    Width
                  </label>
                    <input  type="number" name="width"  placeholder=""   value={width} onChange={handleChange2} className="mt-1 w-full rounded-md border-2 border-indigo-400  bg-transparent p-2"/>
                </div>
                <div>
                <label htmlFor="Height" className="block text-medium font-medium text-black">
                    Height
                  </label>
                    <input  type="number" name="height" placeholder=""  value={height} onChange={handleChange2}  className="mt-1 w-full rounded-md border-2 border-indigo-400  bg-transparent p-2"/>
                </div>
                
                <div className="col-span-2">
                <h1 className="text-2xl fw-bold py-2 text-indigo-600">Export Setting</h1>
                      <label htmlFor="country" className="block text-md font-medium text-black">
                        Save Image As
                      </label>
                      <select
                        id="country"
                        name="Export"
                        onChange={handleChange3}
                        autoComplete="Original"
                        className="mt-1 block text-center w-full text-xl rounded-md border-2 border-indigo-400 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm fw-bold">
                        <option className="fw-bold p-4">Original</option>
                        <option className="fw-bold" value="jpg">JPG</option>
                        <option className="fw-bold" value="png">PNG</option>
                        <option className="fw-bold" value="heif">HEIF</option>
                        <option className="fw-bold" value="gif">GIF</option>
                        <option className="fw-bold" value="avif">AVIF</option>
                        <option className="fw-bold" value="tiff">TIFF</option>
                        <option className="fw-bold" value="jpeg">JPEG</option>
                      </select>
                    </div>
                </div>

                {height<20000&width<20000&height>0&width>0?<>{indicator==2?<><div className="text-center mt-4"><button className="w-full inline-flex justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" onClick={Download} >Download</button></div></>:<>{indicator==1?<><div className="text-center mt-4"><button className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"  >Resize</button></div></>:<><div className="mt-4 text-center" role="status">
        <svg aria-hidden="true" className="mx-auto  w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    <span className="sr-only">Loading...</span>
</div></>}</>}</>:<><div className="bg-orange-100 text-center text-orange-600 p-2 mt-4 rounded-md fw-bold">Maximum allowed value for width or height is 20000 pixels and  positive integer</div></>}
                
                </form>                                                
                
                <div className="px-4 py-1 text-right sm:px-6">
                 <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={ResetAll}>Reset</button>
                </div>
            </div>
            </div>
          </div>          
 <Footer />         
    </>)
}