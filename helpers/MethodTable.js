import React, { Component } from 'react';
import { TableHOC } from './TableHOC.js'

const columns = [
    { "title": "Name", "dataIndex": "name", "key": "name" },
    { "title": "Description", "dataIndex": "description", "key": "description" },
];

const MethodTable = TableHOC(columns, "Component Methods");
export default MethodTable

