import { TableHOC } from './TableHOC';

const columns = [
  { title: "Property", dataIndex: "property", key: "property" },
  { title: "Description", dataIndex: "description", key: "description" },
  {
    title: "Type", dataIndex: "type", key: "type", width: "20%",
  },
  { title: "Default", dataIndex: "default", key: "default" },
];

const PropertyTable = TableHOC(columns, "Component Properties");

export default PropertyTable;
