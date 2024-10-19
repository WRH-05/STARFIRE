'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Send, Eye, EyeOff, Search, Star, Heart, Sun, Moon } from 'lucide-react'

// Header component (reused from login page)
const Header = ({ darkMode, toggleDarkMode }) => (
  <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-90 p-4 shadow-md`}>
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image src="/starfire-logo.svg" alt="Starfire Logo" width={40} height={40} />
        <span className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#465685]'}`}>Starfire</span>
      </Link>
      <nav className="flex items-center">
        <ul className="flex space-x-4 mr-4">
          {['Home', 'About Us', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#465685]'}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="text-white" /> : <Moon className="text-gray-600" />}
        </button>
      </nav>
    </div>
  </header>
)

// Footer component (reused from login page)
const Footer = ({ darkMode }) => (
  <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-500'} bg-opacity-90 py-4`}>
    <div className="container mx-auto text-center text-sm">
      © {new Date().getFullYear()} Starfire. All rights reserved. |{' '}
      <Link href="/privacy" className={`hover:${darkMode ? 'text-pink-300' : 'text-[#465685]'}`}>Privacy Policy</Link> |{' '}
      <Link href="/terms" className={`hover:${darkMode ? 'text-pink-300' : 'text-[#465685]'}`}>Terms of Service</Link>
    </div>
  </footer>
)

// Doctor profile type
type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  suggestedQuestions: string[];
  rating: number;
  online: boolean;
}

// Sample doctor data (expanded with mental health specialists and suggested questions)
const doctors: Doctor[] = [
  { 
    id: 1, 
    name: "Dr. Emily Johnson", 
    specialty: "Breast Cancer Specialist", 
    image: "/doctor1.jpg",
    suggestedQuestions: [
      "What are the early signs of breast cancer?",
      "How often should I get a mammogram?",
      "What are the risk factors for breast cancer?",
      "What lifestyle changes can help prevent breast cancer?"
    ],
    rating: 4.8,
    online: true
  },
  { 
    id: 2, 
    name: "Dr. Sarah Lee", 
    specialty: "Gynecologic Oncologist", 
    image: "/doctor2.jpg",
    suggestedQuestions: [
      "What are the symptoms of ovarian cancer?",
      "How is cervical cancer diagnosed?",
      "What are the treatment options for endometrial cancer?",
      "How can I reduce my risk of gynecologic cancers?"
    ],
    rating: 4.9,
    online: false
  },
  { 
    id: 3, 
    name: "Dr. Maria Rodriguez", 
    specialty: "Women's Health Expert", 
    image: "/doctor3.jpg",
    suggestedQuestions: [
      "What are the most common women's health issues?",
      "How often should I have a pap smear?",
      "What are the signs of hormonal imbalance?",
      "How can I maintain good breast health?"
    ],
    rating: 4.7,
    online: true
  },
  { 
    id: 4, 
    name: "Dr. Lisa Chen", 
    specialty: "Radiation Oncologist", 
    image: "/doctor4.jpg",
    suggestedQuestions: [
      "What is radiation therapy and how does it work?",
      "What are the side effects of radiation therapy?",
      "How long does a typical course of radiation therapy last?",
      "Can radiation therapy be combined with other treatments?"
    ],
    rating: 4.6,
    online: true
  },
  { 
    id: 5, 
    name: "Dr. Michael Brown", 
    specialty: "Psycho-Oncologist", 
    image: "/doctor5.jpg",
    suggestedQuestions: [
      "How can I cope with anxiety during cancer treatment?",
      "What mental health support is available for cancer patients?",
      "How can I manage depression related to my cancer diagnosis?",
      "What strategies can help me maintain a positive outlook during treatment?"
    ],
    rating: 4.9,
    online: false
  },
  { 
    id: 6, 
    name: "Dr. Rachel Green", 
    specialty: "Cancer Counselor", 
    image: "/doctor6.jpg",
    suggestedQuestions: [
      "How can I talk to my family about my cancer diagnosis?",
      "What coping strategies can help me deal with cancer-related stress?",
      "How can I maintain my relationships during cancer treatment?",
      "What resources are available for cancer patients' mental health?"
    ],
    rating: 4.8,
    online: true
  },
  { 
    id: 7, 
    name: "Dr. David Kim", 
    specialty: "Mental Health in Cancer Care", 
    image: "/doctor7.jpg",
    suggestedQuestions: [
      "How does cancer affect mental health?",
      "What are common psychological challenges faced by cancer patients?",
      "How can mindfulness help during cancer treatment?",
      "What role does support play in cancer recovery?"
    ],
    rating: 4.7,
    online: true
  },
  { 
    id: 8, 
    name: "Dr. Olivia Taylor", 
    specialty: "Cancer Support Psychologist", 
    image: "/doctor8.jpg",
    suggestedQuestions: [
      "How can I manage scanxiety?",
      "What techniques can help me sleep better during treatment?",
      "How can I cope with body image issues after cancer treatment?",
      "What strategies can help me return to work after cancer treatment?"
    ],
    rating: 4.9,
    online: false
  },
]

// All possible questions and their automated responses
const allQuestionsAndResponses: Record<string, string> = {
  "What are the early signs of breast cancer?": "Early signs of breast cancer may include a lump in the breast, changes in breast size or shape, skin changes, nipple discharge, or nipple inversion. However, many women with breast cancer have no symptoms, which is why regular screenings are important.",
  "How often should I get a mammogram?": "The general recommendation is that women aged 45 to 54 should get mammograms every year. Women 55 and older can switch to mammograms every 2 years, or continue yearly screening. However, these are general guidelines, and you should consult with your doctor about what's best for you based on your individual risk factors.",
  "What are the risk factors for breast cancer?": "Risk factors for breast cancer include age, genetic mutations (such as BRCA1 and BRCA2), family history of breast cancer, personal history of breast cancer, dense breast tissue, certain lifestyle factors (like alcohol consumption and lack of physical activity), and long-term use of hormone replacement therapy.",
  "What lifestyle changes can help prevent breast cancer?": "While there's no sure way to prevent breast cancer, some lifestyle changes may help reduce your risk. These include maintaining a healthy weight, staying physically active, limiting alcohol intake, eating a healthy diet rich in fruits and vegetables, and avoiding or limiting hormone replacement therapy. Regular screenings and self-exams are also crucial for early detection.",
  "How can I cope with anxiety during cancer treatment?": "Coping with anxiety during cancer treatment can involve various strategies. These may include practicing relaxation techniques like deep breathing or meditation, engaging in regular physical activity, seeking support from friends, family, or support groups, and considering professional counseling or therapy. It's also important to communicate openly with your healthcare team about your feelings and concerns.",
  "What mental health support is available for cancer patients?": "There are various mental health support options available for cancer patients. These can include individual counseling with a psychologist or psychiatrist specializing in cancer care, support groups (both in-person and online), art or music therapy, mindfulness-based stress reduction programs, and medication when necessary. Many cancer centers also offer dedicated psychosocial support services.",
  "How can I manage depression related to my cancer diagnosis?": "Managing depression related to a cancer diagnosis often requires a multi-faceted approach. This may include cognitive-behavioral therapy, medication prescribed by a psychiatrist, regular exercise, maintaining social connections, and setting achievable goals. It's crucial to discuss your feelings with your healthcare team, as they can provide resources and referrals to mental health professionals experienced in working with cancer patients.",
  "What strategies can help me maintain a positive outlook during treatment?": "Maintaining a positive outlook during treatment can be challenging, but several strategies can help. These include practicing gratitude, setting small, achievable goals, engaging in activities you enjoy, staying connected with loved ones, joining a support group to share experiences with others, focusing on self-care, and celebrating small victories in your treatment journey. Remember, it's okay to have difficult days, and seeking professional support when needed is a sign of strength, not weakness.",
}

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex space-x-2 p-1.5 bg-gray-100 rounded-lg">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  </div>
)

export default function DoctorConsultation() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'doctor'}[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [favoriteDoctors, setFavoriteDoctors] = useState<number[]>([])
  const [darkMode, setDarkMode] = useState(false)

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setMessages([])
  }

  const handleSendMessage = (message: string) => {
    if (message.trim() === '') return

    const newMessages = [...messages, { text: message, sender: 'user' }]
    setMessages(newMessages)
    setInputMessage('')
    setIsTyping(true)

    // Simulate doctor's response with a delay
    setTimeout(() => {
      const response = allQuestionsAndResponses[message] || "I'm sorry, I don't have a specific answer for that question. Please consult with your healthcare provider for personalized advice."
      setMessages([...newMessages, { text: response, sender: 'doctor' }])
      setIsTyping(false)
    }, 3000) // 3 seconds delay
  }

  const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleFavorite = (doctorId: number) => {
    setFavoriteDoctors(prev => 
      prev.includes(doctorId) 
        ? prev.filter(id => id !== doctorId)
        : [...prev, doctorId]
    )
  }

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    // Scroll to bottom of message container when new messages are added
    const messageContainer = document.getElementById('message-container')
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-200 via-pink-200 to-[#465685]'} flex flex-col relative`}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url('/Outubro_Rosa_-_Unidas_Pela_Vida_e_Pela_Esperanca_1.jpg')`,
          backgroundSize: '100px 100px'
        }}
      ></div>
      
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow container mx-auto p-4 flex flex-col md:flex-row gap-4">
          {/* Doctor list */}
          <div className={`md:w-1/3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-xl p-4 overflow-y-auto border border-[#465685] border-opacity-30 hover:border-opacity-50 transition-all duration-300`} style={{ height: 'calc(100vh - 200px)' }}>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-pink-300' : 'text-[#465685]'} mb-4`}>Our Doctors</h2>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors..."
                  
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full p-2 pl-8 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300`}
                />
                <Search className={`absolute left-2 top-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
              </div>
            </div>
            <div className="space-y-4 pr-2">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                    selectedDoctor?.id === doctor.id ? 'bg-pink-200' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleDoctorSelect(doctor)}
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className={`ml-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{doctor.rating}</span>
                      <span className={`ml-2 text-sm ${doctor.online ? 'text-green-500' : 'text-red-500'}`}>
                        {doctor.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(doctor.id);
                    }}
                    className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label={favoriteDoctors.includes(doctor.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart
                      className={favoriteDoctors.includes(doctor.id) ? 'text-pink-500 fill-current' : 'text-gray-400'}
                      size={20}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Chat interface */}
          <div className={`md:w-2/3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-xl p-4 flex flex-col border border-[#465685] border-opacity-30 hover:border-opacity-50 transition-all duration-300`} style={{ height: 'calc(100vh - 200px)' }}>
            {selectedDoctor ? (
              <>
                <div className={`bg-gradient-to-r ${darkMode ? 'from-pink-700 to-[#2a3a5f]' : 'from-pink-200 to-[#3a4a6f]'} p-4 rounded-lg mb-4`}>
                  <h2 className="text-xl font-semibold text-white">
                    Chatting with {selectedDoctor.name}
                  </h2>
                  <p className="text-sm text-gray-200">{selectedDoctor.specialty}</p>
                </div>
                <div id="message-container" className="flex-grow overflow-y-auto mb-4 space-y-2 pr-2">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg ${
                        message.sender === 'user' 
                          ? `${darkMode ? 'bg-pink-700' : 'bg-pink-200'} ml-auto` 
                          : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      } max-w-[80%]`}
                    >
                      {message.text}
                    </div>
                  ))}
                  {isTyping && <TypingIndicator />}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className={`flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'
                    }`}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                  />
                  <button
                    onClick={() => handleSendMessage(inputMessage)}
                    className={`bg-gradient-to-r ${
                      darkMode 
                        ? 'from-pink-700 to-[#2a3a5f] hover:from-pink-800 hover:to-[#1d2a4f]' 
                        : 'from-pink-200 to-[#3a4a6f] hover:from-pink-300 hover:to-[#2d3a56]'
                    } text-white p-2 rounded-lg transition-colors`}
                  >
                    <Send size={20} />
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Suggested Questions:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(question)}
                        className={`${
                          darkMode 
                            ? 'bg-pink-700 text-white hover:bg-pink-800' 
                            : 'bg-pink-200 text-[#465685] hover:bg-pink-300'
                        } px-2 py-1 rounded-full text-sm transition-colors`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-grow flex items-center justify-center text-gray-500">
                Select a doctor to start chatting
              </div>
            )}
          </div>
        </main>
        <Footer darkMode={darkMode} />
      </div>
      <div className="fixed bottom-4 right-4 z-20">
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundImageChange}
          className="hidden"
          id="background-image-input"
        />
        <label
          htmlFor="background-image-input"
          className={`${
            darkMode 
              ? 'bg-gradient-to-r from-pink-700 to-[#2a3a5f] hover:from-pink-800 hover:to-[#1d2a4f]' 
              : 'bg-gradient-to-r from-pink-200 to-[#3a4a6f] hover:from-pink-300 hover:to-[#2d3a56]'
          } text-white px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-md hover:shadow-lg`}
        >
          Change Background
        </label>
      </div>
    </div>
  )
}