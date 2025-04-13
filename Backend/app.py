from flask import Flask
from flasgger import Swagger
from Backend.routes import converter_blueprint
import os

app = Flask(__name__)
app.config['SWAGGER'] = {
    'title': 'YouTube Converter API',
    'uiversion': 3
}
Swagger(app)

os.makedirs("downloads", exist_ok=True)

app.register_blueprint(converter_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
