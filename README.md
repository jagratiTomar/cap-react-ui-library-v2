Steps to build:
### Generate component 
#### npm run generate
select component and add component definition.

### Generate Doc
#### npm run generate
select documentation and add props, description and usage example.


#### make sure u have specified the scope and NPM_TOKEN properly 
##### use "npm config ls" to check 
scope should be @capillarytech


##publishing component
1. bump up version <br/>
   npm version <update_type> [update_type is one of the release types as patch, minor, or major]   
2. npm run build 
3. cd build-library
4. npm publish