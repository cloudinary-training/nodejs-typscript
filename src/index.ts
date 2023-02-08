"use strict";

import { error } from "console";

require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// DOCS: https://cloudinary.com/documentation/image_upload_api_reference

// Basic Upload Method - local asset
cloudinary.uploader.upload("./assets/cld-sample.jpeg")
	.then((result: any) => {console.log(result)})
	.catch((error: any) => {console.log(error)});