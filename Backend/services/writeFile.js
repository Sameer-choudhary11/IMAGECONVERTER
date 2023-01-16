const fs = require("fs");
let obj={};

obj.FileToSave=async(name,data)=>{
  await fs.writeFile(name, data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");      
      return name
    }
  });
}
module.exports=obj;
