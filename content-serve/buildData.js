const fs = require('fs');

const menu = [
  {
    id: '1',
    label: 'Product 1',
    app:'product',
    component: 'ProductApp',
    version: 'v1',
  },
  {
    id: '2',
    label: 'Product 2',
    app:'product',
    component: 'ProductApp',
    version: 'v2',
  },
  {
    id: '3',
    label: 'RegistrationForm 1',
    app:'product',
    component: 'RegistrationFormApp',
    version: 'v1',
  },
  {
    id: '4',
    label: 'RegistrationForm 3',
    app:'product',
    component: 'RegistrationFormApp',
    version: 'v3',
  },
  {
    id: '5',
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
