from langchain_community.llms import Ollama

llm = Ollama(model="llama3")
prompt = "Write an original news article about Wes Anderson in plain text"


for chunks in llm.stream(prompt):
    print(chunks, end="")
