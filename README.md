# reactive-flask
A sample of React/Relay front end with Flask/SqlAlchemy/Graphene back end.

I hope this helps those out there get started with all this as I had some difficulty being totally new to most of these
and meshing the components was tough due to the lack of examples.


This repo contains two examples, a simple query and mutation.

To get started install the NodeJS and Python requirements.

- For NodeJS "npm install" from the project directory. This is will install the packages listed in package.json
- For Python run "pip install -r requirements.txt"

- Initiate the Python Flask/GraphQl server by running app.py.
- This will create your GraphQl Schema JSON and is accessible at 127.0.0.1:5000/graphql


- Start the React/Relay server to start working on the front end by running "npm start" from the project directory.
- This will run webpack and a webpack server which will compile your project and dependencies.

Access the pages from 127.0.0.1:3000

The index is an example of a mutation. Enter a name and it will add and employee of that name to the SQLAlchemy database.

To view a simple query head to 127.0.0.1:3000/query.html . You can change the name under /static/js/query.
