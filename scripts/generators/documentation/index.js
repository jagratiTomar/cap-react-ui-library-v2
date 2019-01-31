/**
 * Created by vivek on 26/10/17.
 */
/* eslint strict: ["off"] */

'use strict';

const documentationExists = require('../utils/documentationExists');

module.exports = {
  description: 'Add documentation for UI element',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'Documentation to be generated for which element',
    default: 'CapButton',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return documentationExists(value) ? 'Documentation for this element already exists' : true;
      }
      return 'The name is required';
    },
  }],
  actions: () => [
    {
      type: 'add',
      path: '../../src/{{properCase name}}Doc/index.js',
      templateFile: './documentation/infoComponent.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../components/{{properCase name}}Doc/_{{camelCase name}}Doc.scss',
      templateFile: './documentation/style.scss.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../../helpers/ComponentSwitcher.js',
      pattern: /(.*components for docs)/g,
      templateFile: './documentation/switcher.js.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../../helpers/ComponentSwitcher.js',
      pattern: /(.*imported for docs)/g,
      templateFile: './documentation/importInSwitcher.js.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../../src/Docs/index.js',
      pattern: /({.*Menu items for components.*})/g,
      templateFile: './documentation/menu.js.hbs',
      abortOnFail: true,
    }],
};
