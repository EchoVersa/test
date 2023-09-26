import json
import uuid
import boto3

def lambda_handler(event, context):
    # TODO implement
    print(event)
    return {
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        },
        'statusCode': 200,
        'body': json.dumps(event),
        'id': uuid.uuid4().hex
    }
