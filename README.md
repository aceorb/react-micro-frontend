# React-Micro-Frontend

## Features

Frontend application framework using React & Redux...
- The framework will provide a UI component that displays a common menu that can be updated dynamically using configuration assets (e.g. json)
- The framework will provide a view panel where external react applications can be loaded dynamically based on configuration.
- The top level menu updates when a new application is loaded using the applications preferred menu config.
- The application can load a UI component dynamically based on a configuration asset (e.g. json) that specifies the version of the component. e.g. RegistrationForm v1 and RegsitrationForm v2
- The dynamically loaded applications need to be able to interact with each other without direct communication, using redux within the front end framework/wrapper.
  Bonus Test (if you find the above easy, the following will help you show off your skills more):
- One UI component will render a react-flow diagram with custom nodes that embed sub-diagram(s).

## Projects
- **content-serve**
  - Static content for a micro frontends demo.
  - Serves `menu.json` for dynamic menu content.
- **flow-diagram**
  - Exposes `FlowDiagram` component which is using react-flow
- **product**
  - Exposes `ProductApp`, `RegistrationFormApp` with version number.
- **main**
  - Entry point and container application for a micro frontends.

# Getting started

1. Run content-serve project
    ```
    cd content-serve
    yarn start
    ```
   It serves at http://localhost:5000.

2. Run flow-diagram project
    ```
    cd flow-diagram
    yarn start
    ```
   It serves at http://localhost:9002.

3. Run product project
    ```
    cd product
    yarn start
    ```
   It serves at http://localhost:9001.

4. Run main project
    ```
    cd main
    yarn start
    ```
   It serves at http://localhost:9000.


5. View the application on http://localhost:9000.