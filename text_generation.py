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
    "Write 3 original news articles about film director Wes Anderson. "
    "Each article should include a title and body. "
    "Separate each news article with ###. "
    "Separate each section (title and body) with a new line. "
    "Do not use markdown syntax such as asterisks or underscores for formatting. Quotation marks are allowed. "
    "Keep each article between 300 and 500 words. "
    "Ensure each news article is significantly different. "
    "Be original."
    "Do not give introduction text. Jump right into the news articles content"
)



""" n = 5

for i in range(n): """
with open(f"{new_dir}/news_articles.txt", "a") as file:
    for chunks in llm.stream(prompt):
        print(chunks, end="")
        file.write(chunks)


# Print the response
