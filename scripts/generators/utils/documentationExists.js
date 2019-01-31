/**
 * Created by vivek on 30/10/17.
 */
const fs = require('fs');
const path = require('path');
const components = fs.readdirSync(path.join(__dirname, '../../../components'));

function documentationExists(comp) {
  return components.indexOf(`${comp}Info`) >= 0;
}

module.exports = documentationExists;
