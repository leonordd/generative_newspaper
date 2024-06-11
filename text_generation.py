from langchain_community.llms import Ollama
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

# "The first line should be the title of the article, the second line should be the subtitle, and the rest of the text should be the article itself. "
   
prompt = (
    "write me an original news article about wes anderson. it must have 900 words (mandatory). use <p> tags sometimes. do not use markdown formatting (mandatory). be creative. don't retrive any other information that hasn't to do with the news article"
)



""" n = 5

for i in range(n): """
with open(f"{new_dir}/news_articles.txt", "a") as file:
    for chunks in llm.stream(prompt):
        print(chunks, end="")
        file.write(chunks)


# Print the response
