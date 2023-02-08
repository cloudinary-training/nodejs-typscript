# Cloudinary Used in a Typescript Node.js Project

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](./assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.


### Libraries

You will be using the `cloudinary` and the `dotenv` libraries.

### Install Cloudinary

```
npm install cloudinary
```

### Install dotenv

```
npm install dotenv 
```
In config.js and all other node scripts, you'll see 

```
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

```


## Set up Project and Run 

[starter project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)

Dev Mode:

```
 npm run start:dev
```
Build:

```
 npm run build
 ```
