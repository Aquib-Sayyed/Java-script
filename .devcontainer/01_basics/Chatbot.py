from nltk.chat.util import Chat, reflections

print("Chatbot: Hi! I’m PyBot. Type 'bye' to exit.")

pairs = [
    ["hi|hello|hey", ["Hello!", "Hey there!", "Hi :)"]],
    ["what is your name?", ["I’m a chatbot. You can name me anything!"]],
    ["how are you?", ["I'm doing great, thank you!", "All good!"]],
    ["(.*) help (.*)", ["Sure, I can help you. Tell me more."]],
    ["bye", ["Goodbye!", "See you later!", "Bye! Good luck with your interview prep 😊"]],
    ["who created you?", ["I was created by Aquib."]],
["what can you do?", ["I can chat with you and help you learn AI."]],
["(.*) your name?", ["I'm PyBot — your personal assistant."]],
]

chatbot = Chat(pairs, reflections)
chatbot.converse()
