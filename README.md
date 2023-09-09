
# Development
```
npm install
npm run start
```
All the configuration goes in ```env.development```. Make sure to update all the values related to your back-end.

# Environment variables
We provide two files for configuration: ```env.development``` and ```public/env.js```.
- ```public/env.js``` is mainly provided for a production environment for easier configuration updates without rebuilding the entire application.
- ```env.development``` is used for a local development and applied only for values not presented in ```public/env.js``` as long as NODE_ENV is development.

Keep in mind that the env.development variables should begin with "REACT_APP_".

## Variables explained

- ```DOCUMENT_TITLE``` - The application title.
- ```UNIQUE_API_URL``` - The back-end URL.
- ```SCAN_URL``` - The Scan URL for some redirects. It is recommended using "https://uniquescan.io/QUARTZ/" for production.
- ```IPFS_GATEWAY``` - Used for some legacy collections. If a collection uses variableOnChainSchema, then we will use this variable as the URL prefix: _{IPFSGateway}/${image}_ .


