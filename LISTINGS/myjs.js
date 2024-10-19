document.getElementById("chatButton").onclick = function() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "block" : "none";
};

document.getElementById("sendButton").onclick = function() {
    const chatInput = document.getElementById("chatInput");
    const userMessage = chatInput.value.trim();
    if (userMessage === "") return;

    const chatbotBody = document.getElementById("chatbotBody");
    addUserMessage(userMessage, chatbotBody);
    chatInput.value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addBotMessage(botResponse, chatbotBody);
    }, 1000);
};

// Close chatbot functionality
document.getElementById("closeChat").onclick = function() {
    document.getElementById("chatbot").style.display = "none";
};

// Function to add user's message to chat
function addUserMessage(message, chatbotBody) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "chat-message user";
    userMessageDiv.textContent = message;
    chatbotBody.appendChild(userMessageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the bottom
}

// Function to add bot's message to chat
function addBotMessage(message, chatbotBody) {
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "chat-message bot";
    botMessageDiv.textContent = message;
    chatbotBody.appendChild(botMessageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the bottom
}

// Function to get bot responses based on user input
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
        return "Hello! How can I assist you today?";
    } else if (lowerMessage.includes("how are you")) {
        return "I'm just a bot, but I'm here to help you! What do you need?";
    }

    // FAQs about services
    if (lowerMessage.includes("buy") || lowerMessage.includes("purchase")) {
        return "You can start the buying process by contacting us for a consultation. We can guide you through the best options.";
    } else if (lowerMessage.includes("sell") || lowerMessage.includes("selling")) {
        return "We offer property valuation and tailored selling strategies. Let us help you maximize your sale!";
    } else if (lowerMessage.includes("rent")) {
        return "We have various rental properties available. Please specify your requirements, and I can help you find the right one.";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach")) {
        return "You can reach us at contact@space254.com or call us at (123) 456-7890.";
    } else if (lowerMessage.includes("hours") || lowerMessage.includes("open")) {
        return "Our office is open from 9 AM to 5 PM, Monday to Friday.";
    } else if (lowerMessage.includes("services")) {
        return "We offer buying, selling, and renting services for residential and commercial properties.";
    } else if (lowerMessage.includes("fees") || lowerMessage.includes("cost")) {
        return "Our fees vary based on the services provided. Please contact us for a detailed breakdown.";
    } else if (lowerMessage.includes("mortgage") || lowerMessage.includes("financing") || lowerMessage.includes("loan")) {
        return "We can connect you with trusted mortgage advisors to help you find the best financing options.";
    } else if (lowerMessage.includes("property value") || lowerMessage.includes("valuation")) {
        return "We provide free property valuation services. Contact us to schedule an appointment.";
    } else if (lowerMessage.includes("market trends") || lowerMessage.includes("real estate market")) {
        return "The real estate market is constantly changing. We can provide you with the latest trends and insights.";
    } else if (lowerMessage.includes("neighborhoods") || lowerMessage.includes("areas")) {
        return "We cover various neighborhoods. Please specify which area you are interested in, and I can provide more information.";
    } else if (lowerMessage.includes("open house") || lowerMessage.includes("viewing")) {
        return "We regularly hold open houses. Check our website for the latest listings and schedule.";
    } else if (lowerMessage.includes("how to") || lowerMessage.includes("process") || lowerMessage.includes("steps")) {
        return "The process for buying or selling a property typically involves consultation, listing, marketing, and closing. Would you like details on a specific step?";
    } else if (lowerMessage.includes("thank you") || lowerMessage.includes("thanks")) {
        return "You're welcome! If you have any more questions, feel free to ask.";
    }

    // General responses
    if (lowerMessage.includes("help")) {
        return "How can I assist you today? You can ask about buying, selling, or renting properties.";
    } else if (lowerMessage.includes("info") || lowerMessage.includes("information")) {
        return "I can provide information about our services, properties, and the buying/selling process.";
    } else if (lowerMessage.includes("feedback") || lowerMessage.includes("suggestion")) {
        return "We appreciate your feedback! Please share your thoughts, and I'll pass them along to our team.";
    } else if (lowerMessage.includes("complaint")) {
        return "I'm sorry to hear that. Please provide details, and I will escalate your issue to our support team.";
    }

    // Default response
    return "I'm sorry, I didn't quite understand that. Can you please rephrase your question or ask about our services?";
}