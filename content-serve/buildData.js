const fs = require('fs');

const menu = [
  {
    id: '1',
    label: 'Product',
    app:'product',
    component: 'ProductApp',
    version: 'v1',
  },
  {
    id: '3',
    label: 'Registration',
    app:'product',
    component: 'RegistrationFormApp',
    version: 'v2',
  },
  {
    id: '3',
    label: 'FlowDiagram',
    app:'flowdiagram',
    component: 'FlowDiagramApp',
  }
];


try {
  fs.mkdirSync('./content');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}

fs.writeFileSync('./content/menu.json', JSON.stringify(menu));
