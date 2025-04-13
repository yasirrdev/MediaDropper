from flask import Blueprint, request, send_file, jsonify
from flasgger.utils import swag_from
from Backend.converter import download_and_convert
from Backend.utils import validate_url, allowed_formats

converter_blueprint = Blueprint('converter', __name__)

@converter_blueprint.route('/convert', methods=['POST'])
@swag_from({
    'tags': ['YouTube Converter'],
    'parameters': [
        {
            'name': 'body',
            'in': 'body',
            'schema': {
                'type': 'object',
                'properties': {
                    'url': {'type': 'string'},
                    'format': {'type': 'string', 'enum': allowed_formats()}
                },
                'required': ['url', 'format']
            }
        }
    ],
    'responses': {
        200: {
            'description': 'Archivo convertido exitosamente',
            'content': {'application/octet-stream': {}}
        },
        400: {'description': 'Solicitud inválida'},
        500: {'description': 'Error interno del servidor'}
    }
})
def convert():
    data = request.get_json()
    url = data.get('url')
    fmt = data.get('format')

    if not validate_url(url) or fmt not in allowed_formats():
        return jsonify({'error': 'URL o formato no válido'}), 400

    try:
        file_path, filename = download_and_convert(url, fmt)
        return send_file(file_path, as_attachment=True, download_name=filename)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
