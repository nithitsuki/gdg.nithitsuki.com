"""
Meme Generation Script for Imgflip API.

This script communicates with the Imgflip API to generate a meme.
It's designed to be run in an automated CI/CD environment.

- Reads Imgflip credentials from environment variables (IMGFLIP_USERNAME, IMGFLIP_PASSWORD).
- Reads meme parameters from 'meme_input.json' located in the same directory as the script.
- On success, it prints a JSON object to stdout with 'imageUrl' and 'pageUrl'.
- On failure, it prints an error to stderr and exits with a non-zero status code.
"""

import os
import sys
import json
import requests

# Define the API endpoint
IMGFLIP_API_URL = "https://api.imgflip.com/caption_image"

# --- CHANGE ---
# Construct the path to 'meme_input.json' relative to this script's location.
# This makes the script more robust.
try:
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    INPUT_FILENAME = os.path.join(SCRIPT_DIR, "meme_input.json")
except NameError:
    # Fallback for interactive environments where __file__ is not defined
    INPUT_FILENAME = "meme_generator/meme_input.json"


def main():
    """Main function to generate the meme."""
    imgflip_user = os.getenv("IMGFLIP_USERNAME")
    imgflip_pass = os.getenv("IMGFLIP_PASSWORD")

    if not all([imgflip_user, imgflip_pass]):
        sys.stderr.write("Error: IMGFLIP_USERNAME and IMGFLIP_PASSWORD environment variables must be set.\n")
        sys.exit(1)

    try:
        with open(INPUT_FILENAME, 'r') as f:
            meme_input = json.load(f)
    except FileNotFoundError:
        sys.stderr.write(f"Error: Input file '{INPUT_FILENAME}' not found.\n")
        sys.exit(1)
    except json.JSONDecodeError:
        sys.stderr.write(f"Error: Could not decode JSON from '{INPUT_FILENAME}'. Check for syntax errors.\n")
        sys.exit(1)

    template_id = meme_input.get("templateId")
    if not template_id:
        sys.stderr.write(f"Error: 'templateId' is a required field in '{INPUT_FILENAME}'.\n")
        sys.exit(1)

    payload = {
        'username': imgflip_user,
        'password': imgflip_pass,
        'template_id': template_id,
        'text0': meme_input.get('text0', ''),
        'text1': meme_input.get('text1', '')
    }

    try:
        response = requests.post(IMGFLIP_API_URL, data=payload)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        sys.stderr.write(f"Error making API request: {e}\n")
        sys.exit(1)

    response_data = response.json()

    if response_data.get("success"):
        output = {
            "imageUrl": response_data["data"]["url"],
            "pageUrl": response_data["data"]["page_url"]
        }
        print(json.dumps(output))
    else:
        error_message = response_data.get('error_message', 'Unknown API error.')
        sys.stderr.write(f"API Error: {error_message}\n")
        sys.exit(1)


if __name__ == "__main__":
    main()