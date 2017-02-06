from flask import Flask
import json
from data.schema import schema
from data.database import init_db
from flask_graphql import GraphQLView
import os


init_db()

introspection_dict = schema.introspect()
with open(os.getcwd() + '/data/schema.json', 'wb') as fp:
    json.dump(introspection_dict, fp)

app = Flask(__name__)
app.debug = True

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema))

if __name__ == '__main__':
    init_db()   # Create the database and initial employee data
    app.run(host='127.0.0.1', port=5000)