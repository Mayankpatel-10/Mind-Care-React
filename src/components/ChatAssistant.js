import React, { useState, useRef, useEffect } from 'react';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);
  const recognitionRef = useRef(null);

  // ✅ Predefined Q&A set (50+ questions merged into one)
  const predefinedQA = [
    { question: "i feel anxious", answer: "It’s okay to feel anxious sometimes. Try slow breathing—inhale for 4 seconds, hold for 4, exhale for 6. Do you want me to suggest a quick relaxation exercise?" },
    { question: "i feel stressed", answer: "Stress is common, but manageable. Try breaking tasks into smaller steps and take short breaks. Would you like me to guide a 2-minute relaxation routine?" },
    { question: "i feel sad", answer: "I’m sorry you’re feeling sad. Sometimes writing your feelings down or listening to calming music helps. Would you like me to suggest a positive activity?" },
    { question: "i can't sleep", answer: "Poor sleep can be tough. Try avoiding screens before bed and practice deep breathing. Would you like a guided sleep tip?" },
    { question: "i feel lonely", answer: "Feeling lonely is hard. Reaching out to a friend, family, or community group can help. Would you like me to suggest a self-care activity?" },
    { question: "i feel depressed", answer: "I’m sorry you’re feeling this way. Remember you’re not alone. Talking to a professional can help. If you’re in crisis, please reach out to a helpline immediately." },
    { question: "i feel tired", answer: "Sometimes fatigue is mental as well as physical. Try drinking water, stretching, or taking a short walk. Do you want a quick energy-boosting tip?" },
    { question: "i feel overwhelmed", answer: "When things feel overwhelming, pause and focus on just one small step at a time. Would you like me to suggest grounding techniques?" },
    { question: "i feel angry", answer: "Anger is natural, but deep breathing or stepping away for a while may help. Would you like me to suggest calming exercises?" },
    { question: "i feel unmotivated", answer: "It’s normal to lose motivation. Try starting with very small goals, even 5 minutes of effort counts. Would you like me to suggest productivity tips?" },
    { question: "i feel nervous", answer: "Take a slow breath. Nervousness means you care about the outcome. Would you like me to guide a quick calming exercise?" },
    { question: "i feel guilty", answer: "Guilt can weigh heavy. Reflecting on what you can control and forgiving yourself can help. Would you like me to suggest journaling prompts?" },
    { question: "i feel scared", answer: "Fear is our body’s natural defense. Grounding yourself in the present can help. Want me to share a 5-senses grounding technique?" },
    { question: "i feel lost", answer: "It’s okay to feel lost. Try focusing on small things that bring meaning day by day. Do you want me to suggest self-reflection questions?" },
    { question: "i feel bored", answer: "Boredom can be a chance to try something new! Would you like me to suggest fun activities?" },
    { question: "i feel stuck", answer: "Feeling stuck happens to everyone. Sometimes a new perspective helps. Want me to share tips for breaking out of routines?" },
    { question: "i feel hopeless", answer: "I’m sorry you feel this way. You are not alone, and hope can return with time. Please consider reaching out to someone you trust." },
    { question: "i feel panic", answer: "Take a deep breath. Try grounding by naming 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste." },
    { question: "i feel worthless", answer: "You are valuable, even if it doesn’t feel that way right now. Talking to someone supportive may help. Would you like positive affirmations?" },
    { question: "i feel insecure", answer: "Many people feel insecure. Focusing on your strengths and past achievements can help. Want me to suggest confidence tips?" },
    { question: "i feel lazy", answer: "Rest is not laziness—it’s recovery. But if you want energy, start with a very small task to build momentum." },
    { question: "i feel confused", answer: "Confusion is okay—it means you’re learning. Writing thoughts down can bring clarity. Do you want journaling tips?" },
    { question: "i feel jealous", answer: "Jealousy is a normal emotion. Try shifting focus back to your goals. Want me to suggest gratitude practices?" },
    { question: "i feel weak", answer: "Weakness is temporary. Rest and small healthy habits build strength. Would you like me to suggest energy boosters?" },
    { question: "i feel pressure", answer: "Pressure often comes from high expectations. Breaking tasks into small parts can reduce it. Want productivity hacks?" },
    { question: "i feel rejected", answer: "Rejection is painful, but it doesn’t define your worth. Every no brings you closer to a yes. Want me to suggest self-healing practices?" },
    { question: "i feel homesick", answer: "Missing home is natural. Calling loved ones or keeping familiar routines can help. Want me to share comfort tips?" },
    { question: "i feel empty", answer: "Feeling empty can signal emotional exhaustion. Gentle self-care and reaching out may help. Want me to suggest activities?" },
    { question: "i feel isolated", answer: "Isolation can be tough. Try connecting online with communities or reaching out to friends. Want me to share social ideas?" },
    { question: "i feel distracted", answer: "Distractions are common. Try the Pomodoro technique (25 min focus, 5 min break). Want me to explain it?" },
    { question: "i feel sick", answer: "If you’re physically unwell, please rest and seek medical help. Do you want me to share natural remedies for mild sickness?" },
    { question: "i feel broken", answer: "I’m sorry you feel this way. Healing takes time. Being kind to yourself is the first step. Want me to suggest self-compassion practices?" },
    { question: "i feel unloved", answer: "You are worthy of love. Sometimes showing love to yourself first makes a big difference. Want me to suggest affirmations?" },
    { question: "i feel nervous about exam", answer: "Exam stress is normal. Revise in small chunks and practice breathing exercises. Want exam tips?" },
    { question: "i feel nervous about interview", answer: "It’s okay to feel nervous. Practice common questions and remind yourself of your strengths. Want interview tips?" },
    { question: "i feel nervous about presentation", answer: "Take slow breaths and practice out loud. Confidence grows with repetition. Want me to share speaking tips?" },
    { question: "i feel hopeless about future", answer: "Uncertainty is scary, but the future is built one step at a time. Want goal-setting strategies?" },
    { question: "i feel like crying", answer: "Crying is a healthy emotional release. Let it out—it helps your body reset. Want me to suggest calming activities?" },
    { question: "i feel like giving up", answer: "Don’t give up. Rest, reset, and try again tomorrow. Want me to share motivation techniques?" },
    { question: "i feel like nobody cares", answer: "I care. Talking to someone supportive can also help. Would you like ideas on reaching out?" },
    { question: "i feel like a failure", answer: "Failure is part of success. Every failure teaches something valuable. Want motivational tips?" },
    { question: "i feel like running away", answer: "It’s natural to want escape when stressed. Try taking a small break instead. Want coping techniques?" },
    { question: "i feel like screaming", answer: "Sometimes releasing emotions helps. Try screaming into a pillow or doing physical exercise. Want anger release tips?" },
    { question: "i feel like no one understands me", answer: "That can feel painful. Expressing yourself through journaling or art may help. Want me to suggest communication tips?" },
    { question: "i feel nervous meeting new people", answer: "Most people feel the same! Start with small conversations. Want me to share social confidence tips?" },
    { question: "i feel too much pressure from studies", answer: "Break study into 25-minute sessions with 5-minute breaks. Want study hacks?" },
    { question: "i feel too much workload", answer: "Workload can be overwhelming. Prioritize tasks into urgent, important, later. Want time-management tips?" },
    { question: "i feel hopeless in love", answer: "Heartbreak is tough, but healing happens with time. Want self-care tips for relationships?" },
    { question: "i feel nervous talking to teacher", answer: "It’s okay, teachers are there to guide you. Prepare your question and breathe slowly. Want confidence tips?" },
    { question: "i feel nervous asking doubts", answer: "Remember, doubts mean you’re learning. Want me to share how to ask doubts confidently?" },
    { question: "motivational quote", answer: "Here's one for you: 'Every day may not be good, but there’s something good in every day.' 🌟" },
    { question: "how to relax", answer: "Relaxation can mean meditation, music, drawing, or a walk in nature. Which one sounds good for you?" },
    { question: "breathing exercise", answer: "Try this: Inhale deeply for 4 seconds, hold for 7 seconds, and exhale slowly for 8 seconds. Repeat this 4 times." },
    { question: "panic attack", answer: "During a panic attack, grounding yourself helps. Try the 5-4-3-2-1 technique: 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste." }
  ];

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
        addMessage('ai', 'Sorry, I had trouble understanding your voice. Please try typing your message.');
      };
    }

    // Scroll to bottom of chat
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (sender, text) => {
    const newMessage = { sender, text };
    setMessages(prev => [...prev, newMessage]);
  };

  // ✅ Handle predefined responses
  const getLocalResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    const found = predefinedQA.find(item => lowerInput.includes(item.question));
    if (found) return found.answer;
    return "I hear you. Can you tell me more about how you’re feeling?";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    addMessage('user', input);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = getLocalResponse(userInput);
      addMessage('ai', response);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      addMessage('ai', 'Voice input is not supported in your browser. Please type your message.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setInput('Listening...');
      } catch (error) {
        console.error('Speech recognition error:', error);
        addMessage('ai', 'Voice input is not available right now. Please type your message.');
      }
    }
  };

  return (
    <section className="card chat-section">
      <h2>MindCare Chat Assistant</h2>
      <div className="chat-box" id="chatBox" ref={chatBoxRef}>
        {messages.length === 0 ? (
          <div className="chat-placeholder">
            <p>Hello! I'm your MindCare mental health assistant. How can I support you today?</p>
            <p>You can ask me things like:</p>
            <ul>
              <li>I feel anxious</li>
              <li>I am stressed</li>
              <li>I can’t sleep</li>
              <li>I feel sad</li>
              <li>Give me a motivational quote</li>
            </ul>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message ai">
            <p>Thinking...</p>
          </div>
        )}
      </div>
      <form id="chatForm" onSubmit={handleSubmit} autoComplete="off">
        <input 
          type="text" 
          id="chatInput" 
          placeholder="Type your message or ask for mental health support..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="button" 
          id="micBtn" 
          title="Speak to chat"
          onClick={toggleListening}
          className={isListening ? 'listening' : ''}
          disabled={isLoading}
        >
          🎙️
        </button>
        <button type="submit" disabled={isLoading}>
          {isLoading ? '⏳' : '➤'}
        </button>
      </form>
    </section>
  );
};

export default ChatAssistant;
