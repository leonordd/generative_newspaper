from langchain_community.llms import Ollama
import requests
import json
import os


llm = Ollama(model="llama3",
             temperature=0.0,)

curr_dir = os.getcwd()
new_dir = "generated_text"

if not os.path.exists(new_dir):
    path = os.path.join(curr_dir, new_dir)
    os.makedirs(path)
    print(f"Creating new directory: {new_dir}")
else:
    print(f"{curr_dir}/{new_dir} already exists.")

prompt = (
        "Write an original news article about Wes Anderson.",
        "The news article must have 1000 words (mandatory).", 
        "Do not use markdown formatting (mandatory).",
        "Use <p> tags sometimes.",
        "The first paragraph should be the title with 8 words maximum.",
        "Be creative.",
        """Don't retrieve any other information that doesn't relate 
        to the news article."""
    )

n = 15

for i in range(n):
    with open(f"{new_dir}/news_articles_{i + 5}.txt", "a") as file:
        for chunks in llm.stream(prompt, num_predict=1000, temperature=0.8):
            # print(chunks, end="")
            file.write(chunks)


# send generated text to cosmic

""" BUCKET_SLUG = 'dg-project-production'
BUCKET_WRITE_KEY = 'EofsWLOKvGelAe2xwX1TCurgPXE9tOiaYrV8XVqW7gfptRuZqK'

url = f"https://api.cosmicjs.com/v3/buckets/{BUCKET_SLUG}/objects"

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {BUCKET_WRITE_KEY}'
}

data = {
    "title": "generated_news_?",
    "type": "news",
    "metadata": {
        "news_title" : "",
        "news_content": "",
    }
} """

response = requests.post(url, headers=headers, data=json.dumps(data))

print(response.status_code)
print(response.json())