import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const API_KEY = ""; // Provide your API key
  const MODEL_NAME = "gemini-2.5-flash-preview-05-20";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const extractSources = (candidate) => {
    let sources = [];
    const groundingMetadata = candidate?.groundingMetadata;
    if (groundingMetadata && groundingMetadata.groundingAttributions) {
      sources = groundingMetadata.groundingAttributions
        .map((attribution) => ({
          uri: attribution.web?.uri,
          title: attribution.web?.title,
        }))
        .filter((source) => source.uri && source.title);
    }
    return sources;
  };

  const callApiWithRetry = async (payload, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          return await response.json();
        } else if (response.status === 429 && i < maxRetries - 1) {
          const delay = Math.pow(2, i) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        } else {
          throw new Error(`API returned status ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        if (i === maxRetries - 1) {
          throw new Error("Failed to connect to the AI service.");
        }
        const delay = Math.pow(2, i) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", parts: [{ text: inputValue }] };
    setChatHistory((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const systemPrompt =
        "You are a helpful and friendly AI assistant. You answer questions directly and concisely. Use Google Search grounding when necessary to provide up-to-date information.";

      const payload = {
        contents: [...chatHistory, userMessage],
        tools: [{ google_search: {} }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        config: { temperature: 0.7 },
      };

      const result = await callApiWithRetry(payload);

      const candidate = result.candidates?.[0];
      if (candidate && candidate.content?.parts?.[0]?.text) {
        const aiText = candidate.content.parts[0].text;
        const sources = extractSources(candidate);

        const aiMessage = { role: "model", parts: [{ text: aiText }], sources };
        setChatHistory((prev) => [...prev, aiMessage]);
      } else {
        const aiMessage = { role: "model", parts: [{ text: "Sorry, I received an invalid response." }] };
        setChatHistory((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      const aiMessage = { role: "model", parts: [{ text: `Error: ${error.message}` }] };
      setChatHistory((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-3xl h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <header className="p-4 bg-gray-800 text-white flex items-center justify-between rounded-t-xl">
          <h1 className="text-xl font-bold">Gemini Assistant</h1>
          <span className="text-sm font-light opacity-80">Online</span>
        </header>

        {/* Messages */}
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {chatHistory.length === 0 && (
            <div className="ai-message bg-gray-200 text-gray-800 p-3 rounded-xl max-w-[80%]">
              Hello! I am the Gemini Assistant. I can help you find information, write content, and answer your questions. How can I assist you today?
            </div>
          )}
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`message-box p-3 rounded-xl max-w-[80%] shadow-md ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-200 text-gray-800 rounded-bl-sm"
                }`}
              >
                <p>{msg.parts[0].text}</p>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 border-t border-opacity-20 pt-2">
                    {msg.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-300"
                      >
                        Source {i + 1}: {source.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          {loading && (
            <div className="flex items-center justify-center mb-2 text-sm text-gray-500">
              <div className="border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full w-6 h-6 animate-spin mr-2"></div>
              Thinking...
            </div>
          )}
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out disabled:opacity-50"
              disabled={loading || inputValue.trim() === ""}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
