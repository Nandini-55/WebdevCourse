## **1. Receive/Upload files using form:**

- use form property : enctype="multipart/form-data"
- input tag :type="file"
- install multer - Multer is a node.js middleware for handling multipart/form-data , which is primarily used
  for uploading files. It is written on top of busboy for maximum efficiency.
- add cloud storage(store tokens and keys in .env file)
- config coud storage : e.g.-

```const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});
module.exports={
    cloudinary,
    storage
}
```

- require where to use:
  - const multer = require("multer");
  - const { storage } = require("../cloudConfig.js");
  - const upload = multer({ storage });

- use this middleware to store files for route :
  - upload.single("listing[image]")

## **2. Using Map:**

- Using free version of "maptiler"
- Steps to use : https://docs.maptiler.com/sdk-js/examples/how-to-use/
  - copy paste - script and css links
  - add div of id "map"
  - add stylings
  - include js code

- **Geocoding** :
  Geocoding is the process of converting addresses (like a street address) into geographic coordinates (like
  latitude and longitude), which you can use to place markers on a map, or position the map.

- Modification : 
  - Use geocoding
  -  npm install @maptiler/client
  - require or import  maptiler/client , in the file you want to use geocoding
  - maptiler.config.apiKey = process.env.MAP_TOKEN;
  - const result = await maptiler.geocoding.forward(location);

- GeoJSON: The most simple structure in GeoJSON is a point. Below is an example point representing the approximate
location of San Francisco. Note that longitude comes first in a GeoJSON coordinate array, not latitude. 
  -  e.g.- {"type" : "Point",
"coordinates" : [
-122.5,
37.7]};
  - Used to store coordinate data in mongodb 
  - It helps to perform operation based on coordinates easily . e.g. - finding nearby palces

  - object.geometry = result.features[0].geometry; Here , result is the given object by the  maptiler.geocoding.forward function