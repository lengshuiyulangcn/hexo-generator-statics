const hexo = hexo || {};
const config = hexo.config;
const fs = require("hexo-fs");
const path = require("path");

hexo.extend.generator.register("statics", function(){

  let statics_dir = config.statics_dir || "statics";
  let files = fs.listDirSync("statics");
  return files.map(function(file){
    return  {
      path: file,
      data: function(){
        return fs.createReadStream(path.join(statics_dir, file));
      }
    };
  });
});


