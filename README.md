# Guide lines
Guidlines to follow while coding.

- Create a new component using commands mentioned below to generate skeleton of the component and documentation. Need to run same twice, one for component itself and another one for its documentation.

```
npm run generate // select component and add component definition. Example: CapButton
npm run generate // select documentation and add props, description and usage example.
```

- Components name should be in `Pascal Case`.

- Always use unique prefix classname for each component to avoid class name conflicts. Convention to follow is to use underscore format of the component name. For exmple, `clsPrefix` for CapButton component can be `cap-button`, and all the classes used inside CapButton component can use `cap-button` as prefix.

- `classnames` package can be used for maintaining classnames.

- Always import the colors and typography from `_variables.scss` file.

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