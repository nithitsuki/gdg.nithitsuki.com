FROM python:3.13-slim

# Step 2: Set a working directory inside the container.
# This is where our code will live and run.
WORKDIR /app

COPY meme_generator/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY meme_generator/ .

CMD ["python", "generate_meme.py"]