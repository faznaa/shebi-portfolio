export const PROJECTS = [
  {
    title: "Lenny AI",
    isFeatured: true,
    description:
      "An AI-powered Copilot using GPT models to handle internal queries and assist employees with tasks through Expert, Reviewer, and Learning bots.",
    main_image: "lenny_1.png",
    images: [
      "lenny_1.png",
      "lenny_2.png",
      "lenny_3.png",
      "lenny_4.png",
      "lenny_5.png",
    ],
    keywords: ["AI", "Chatbot", "Python", "GPT"],
    overview:
      "Lenny AI is a Copilot created using GPT models to handle internal queries related to the company. It is designed to help employees efficiently navigate tasks through three distinct bots: Expert, Reviewer, and Learning. Each bot serves a specific use case, optimizing internal workflows and enabling faster decision-making.",
    features: [
      "Expert Bot: Capable of answering any questions related to the company's internal data and information. It allows admins to upload documents for learning and displays relevant documents as part of the response.",
      "Reviewer Bot: Processes multiple files and allows users to ask questions based on the content, especially useful for reviewing loan requirements, comparing proposals, and analyzing documentation.",
      "Learning Bot: Helps employees improve and evaluate skills by offering learning modules and assessments. Admins can monitor employee progress and ensure skill development.",
      "Admin Monitoring: Admins can review all questions and answers provided by the bots to ensure accuracy and monitor progress.",
      "Document Uploads: Supports uploading batches of documents to provide accurate and contextual answers.",
    ],
    technology_stack: {
      ai_integration:
        "GPT models - Power the Expert, Reviewer, and Learning bots to handle complex queries and tasks.",
      front_end:
        "React.js - Provides a dynamic and responsive interface for employees to interact with the bots.",
      back_end:
        "FastAPI - Manages document processing, query handling, and bot interactions.",
      database:
        "MongoDB - Stores internal documents and user query history for quick and accurate responses.",
    },
  },
  {
    title: "SumUps.ai",
    isFeatured: true,
    description:
      "An AI-powered platform for analyzing and summarizing large volumes of documents across various formats. It generates visual reports and answers questions from uploaded files.",
    main_image: "sumups_1.png",
    images: ["sumups_1.png", "sumups_2.png", "sumups_3.png", "sumups_4.png"],
    keywords: ["AI", "NLP", "Python"],
    overview:
      "SumUps.ai is an AI-powered platform built to efficiently analyze and summarize large volumes of documents across various formats, including PDF, DOC, Excel, and TXT. It is designed to help policy departments streamline the review process.",
    features: [
      "Multi-Format Document Support: Upload and analyze files in formats such as PDF, DOC, Excel, TXT, and more.",
      "Keyword-Based Summaries: Generate concise summaries based on keywords and clusters, allowing for quick policy review.",
      "Question Answering: The tool can answer specific questions derived from the uploaded documents for focused analysis.",
      "Advanced CSV Analysis: For CSV files with text data, generate detailed summaries based on specific columns and row values.",
      "Visual Report Generation: Create visual reports from the analyzed content to facilitate better understanding and decision-making.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides an intuitive interface for file uploads, keyword analysis, and report viewing.",
      back_end:
        "Python with AI-based algorithms - Powers the document analysis and summary generation, offering keyword clustering and detailed report creation.",
      data_processing:
        "Handles large volumes of data with specific focus on multi-format document analysis and CSV-based summaries.",
    },
  },
  {
    title: "Crystal Ball",
    isFeatured: true,
    description:
      "An AI-powered media monitoring tool that provides daily or weekly updates based on location and topics of interest. Users can also track competitors.",
    main_image: "crystalball_1.png",
    images: ["crystalball_1.png", "crystalball_2.png", "crystalball_3.png"],
    keywords: ["AI", "Python", "GPT", "GPT"],
    overview:
      "Crystal Ball is an AI-powered media monitoring tool designed to keep users updated on relevant news and trends. Users can subscribe to receive daily or weekly updates based on their selected location and topics of interest.",
    features: [
      "Customizable Subscriptions: Users can subscribe to receive daily or weekly updates based on specific locations and topics of interest.",
      "Competitor Monitoring: Enter competitor names to receive updates related to their media presence.",
      "Email Newsletters: The tool generates summaries based on keywords and sends them via email as personalized newsletters.",
      "Industry Adaptability: Currently serving beta customers in the U.S. cannabis industry, with potential for expansion into various other sectors.",
      "Location-Based Updates: The tool tracks and provides news updates relevant to users' selected locations, ensuring localized monitoring.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides a user-friendly interface for managing subscriptions and selecting monitoring parameters.",
      back_end:
        "FastAPI - Handles data processing and the generation of email newsletters based on user-defined keywords and competitor tracking.",
      database:
        "MongoDB - Stores user preferences, competitor data, and relevant media articles for fast retrieval and analysis.",
      ai_integration:
        "Custom keyword analysis and summary generation to provide concise media monitoring results.",
    },
  },
  {
    title: "Teacher AI",
    isFeatured: true,
    description:
      "A Streamlit application for parents to create interactive lessons for kids. It generates lessons based on the child's age, interests, and selected topic.",
    main_image: "teacher_1.png",
    images: ["teacher_1.png", "teacher_2.png", "teacher_3.png", "teacher_4.png","teacher_5.png"],
    keywords: ["AI", "Streamlit", "Python"],
    overview:
      "Teacher AI is a Streamlit application designed to help parents create engaging and interactive lessons for their children. The tool generates lessons that include short stories, images, and interactive elements to keep kids engaged.",
    features: [
      "Customized Lessons: Parents can enter the child's age, topic, and interests to create personalized lessons.",
      "Interactive Stories and Images: Lessons are generated with short stories and images that are designed to captivate and educate kids.",
      "Quiz Section: At the end of the lesson, kids can take a quiz to reinforce what they've learned in a fun and interactive way.",
      "User-Friendly Design: The application is easy for parents to use, and the lessons are presented in a simple, child-friendly format.",
      "Tailored Learning Experience: Lessons are specifically designed to match the child's age and interests, enhancing their engagement and comprehension.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a clean and intuitive interface for entering topics, child's age, and generating lessons.",
      back_end:
        "Python with AI-based lesson generation - Crafts customized lessons with images and interactive content based on user inputs.",
      quiz_integration:
        "A quiz feature is embedded into each lesson to test the child's understanding of the material.",
    },
  },
  {
    title: "Nubble AI",
    isFeatured: true,
    description:
      "An AI-powered tool for data analysis and visualization. Users can upload datasets and receive insights in both text and visual formats.",
    main_image: "nubble_1.png",
    images: ["nubble_1.png", "nubble_2.png"],
    keywords: ["Data Analysis", "AI", "Python","FastAPI","React"],
    overview:
      "Nubble AI is an AI-powered application developed to simplify data analysis and visualization for complex datasets. Users can upload their datasets and ask questions directly related to the data, receiving insights in both text and visual formats.",
    features: [
      "Data Upload and Analysis: Users can upload complex datasets for AI-powered analysis.",
      "Text-Based Responses: The tool answers user questions with detailed textual explanations based on the data.",
      "Data Visualizations: Generates charts and graphs to visually represent insights and trends from the dataset.",
      "Interactive Questioning: Users can interact with the tool by asking specific questions related to their uploaded data.",
      "Comprehensive Reporting: Provides both text and visual outputs for thorough understanding and decision-making.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Offers a clean and user-friendly interface for data upload and interaction.",
      back_end:
        "Python with AI-driven algorithms - Handles data analysis, generates responses, and creates visualizations.",
      visualization_tools:
        "Matplotlib and other libraries - Used to generate charts and graphs based on the analyzed data.",
    },
  },
  {
    title: "Pillar Property Advisors",
    isFeatured: true,
    description:
      "An AI-powered chatbot offering expert advice in real estate, construction, and property management. It simplifies complex queries by providing location-based and category-specific responses.",
    main_image: "pillar_1.png",
    images: ["pillar_1.png", "pillar_2.png", "pillar_3.png", "pillar_4.png","pillar_5.png"],
    keywords: ["AI", "Python", "Chatbot", "GPT", "FastAPI","React"],
    overview:
      "Pillar Property Advisors is an intelligent chatbot designed to provide expert advice and guidance in the real estate, construction, and property management sectors. It simplifies complex queries and offers expert-level insights and actionable recommendations.",
    features: [
      "Expert-Level Real Estate Advice: The bot is equipped to answer specific queries related to property management, construction, and real estate.",
      "Location-Based and Category-Specific Responses: Users can filter their questions by category and location to receive tailored advice.",
      "Actionable Recommendations: Based on the user's query, the bot suggests practical next steps to address the issue effectively.",
      "User-Friendly Interface: Designed to be intuitive and easy to use, whether you are a property professional or a newcomer looking for assistance.",
    ],
    technology_stack: {
      front_end: "React.js - Offers a dynamic and responsive user interface.",
      back_end:
        "FastAPI - Ensures fast and reliable API interactions, handling user queries and responses efficiently.",
      database:
        "MongoDB - Stores and retrieves the necessary data, allowing for fast and scalable performance.",
      ai_integration:
        "GPT models - Power the chatbot's intelligence for answering complex questions and offering expert recommendations.",
    },
  },
  {
    title: "Intelligent Dispute Resolution Assistant (IDRA)",
    description:
      "An AI-based platform to mediate divorce cases. It uses chatbots to gather information from both partners and generates a detailed report for mediators.",
    main_image: "IDRA_1.png",
    images: ["IDRA_1.png", "IDRA_2.png", "IDRA_3.png", "IDRA_4.png", "IDRA_5.png",
    "IDRA_6.png", "IDRA_7.png"],
    keywords: ["AI", "Python","GPT","GPT","React","FastAPI","Chatbot"],
    overview:
      "The Intelligent Dispute Resolution Assistant (IDRA) is an AI-powered platform that helps mediate divorce cases. Using a chatbot to ask questions and gather responses from both partners, IDRA compiles the data into a comprehensive report to assist mediators in understanding both sides of the dispute.",
    features: [
      "AI-Driven Mediation: Chatbot interacts with both partners to collect key information to assist in mediation.",
      "Personalized Question Flow: Follow-up questions are tailored based on the responses of both partners.",
      "Conflict Analysis: Identifies key issues in the relationship and organizes them into a report for mediators.",
      "Comprehensive Report Generation: Summarizes both partners' perspectives and concerns in a detailed report for mediators.",
      "User-Friendly Interface: Allows both partners to easily engage with the chatbot for a smoother mediation process.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides a clean and responsive interface for users to interact with the chatbot.",
      back_end:
        "Django - Manages data collection, conversation flow, and report generation efficiently.",
      ai_integration:
        "GPT-4 - Powers the chatbot's intelligent question generation and response handling.",
      report_generation:
        "Automated report summarizing both partners' input and issues to assist in mediation.",
    },
  },
  {
    title: "Sentiment Analysis Tool",
    description:
      "An AI-based tool for analyzing sentiment from survey feedback, categorizing it into positive, negative, and neutral sentiments. It also provides keyword-based summaries.",
    main_image: "sent_anal_1.png",
    images: ["sent_anal_1.png"],
    keywords: ["AI", "NLP", "Python","Data Analysis"],
    overview:
      "The Sentiment Analysis Tool is an AI-based application developed to analyze the sentiment of feedback collected through surveys. It categorizes feedback based on keywords and provides comprehensive summaries, allowing businesses to understand customer sentiment better.",
    features: [
      "Sentiment Classification: Categorizes feedback into positive, negative, and neutral sentiments for clear analysis.",
      "Keyword-Based Summaries: Provides summaries based on relevant keywords, highlighting key themes and trends.",
      "Detailed Feedback Analysis: Breaks down survey responses and provides a sentiment analysis summary for each category.",
      "Survey Feedback Categorization: Organizes feedback into meaningful categories for easy review and decision-making.",
      "User-Friendly Reporting: Offers clear and concise reports that help users understand the sentiment of the collected feedback.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a simple and intuitive interface for survey feedback upload and analysis.",
      back_end:
        "Python-based sentiment analysis algorithms - Perform sentiment classification and keyword analysis.",
      ai_integration:
        "Custom models for analyzing sentiment and categorizing feedback into positive, negative, and neutral sentiments.",
    },
  },
  {
    title: "Survey Dashboard",
    description:
      "A customized data visualization tool for displaying survey results. It categorizes responses based on location, age, gender, and other factors, providing a visual representation of survey outcomes.",
    main_image: "ourcare_1.png",
    images: ["ourcare_1.png", "ourcare_2.png","ourcare_3.png"],
    keywords: ["Dashboard","Python","NLP","Data Analysis"],
    overview:
      "The Survey Dashboard is a customized data visualization tool developed to display the results of a health score-based survey. The dashboard organizes survey responses from various participants, categorizing the data by factors such as location, age, and gender.",
    features: [
      "Survey Data Categorization: Organizes survey responses by key demographics such as location, age, gender, etc.",
      "Health Score Analysis: Displays results based on health-related questions, helping users gain insights into participants' health metrics.",
      "Data Visualization: Provides visual representations of the survey data using charts, graphs, and other visual elements.",
      "User-Friendly Dashboard: Easy to navigate, enabling users to quickly analyze survey results and uncover patterns or trends.",
      "Customizable Insights: Users can filter and customize the data view to focus on specific categories or metrics of interest.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides an intuitive and interactive dashboard for visualizing survey data.",
      back_end:
        "Python-based data processing - Handles the organization and analysis of survey data.",
      visualization_tools:
        "Matplotlib, Plotly - Used to create detailed and interactive visualizations of the survey results.",
    },
  },
  {
    title: "Google Review Analysis for User Insights",
    description:
      "A project designed to help restaurant clients analyze 10,000 Google reviews. It identifies customer feedback trends and provides actionable recommendations.",
    main_image: "google_rev_1.png",
    images: ["google_rev_1.png"],
    keywords: ["NLP", "Data Analysis", "Python"],
    overview:
      "Google Review Analysis for User Insights is a comprehensive project designed to help restaurant clients uncover actionable insights from their customer feedback. By analyzing a large dataset of 10,000 Google reviews, the project helps businesses understand what customers are saying and what key trends influence their opinions.",
    features: [
      "Comprehensive Review Analysis: Analyzed 10,000 Google reviews to uncover trends, patterns, and key sentiments.",
      "Sentiment and Feedback Evaluation: Identified both positive and negative feedback, helping to highlight customer satisfaction levels.",
      "Actionable Insights: Delivered detailed reports with clear recommendations on how restaurants can improve services and adapt to customer needs.",
      "Strategic Guidance: Empowered restaurant owners with the data-driven insights needed to make informed decisions.",
      "Custom Reports: Generated reports tailored to the specific needs and goals of each client.",
    ],
    technology_stack: {
      data_analysis:
        "Python - Used for sentiment analysis, trend detection, and pattern recognition in the review data.",
      reporting:
        "Customized report generation tools to present actionable insights and recommendations.",
      data_visualization:
        "Matplotlib, Plotly - Visualized trends and patterns in customer feedback for easy understanding.",
    },
  },
  {
    title: "Translator App",
    description:
      "A document translation tool powered by GPT-4. Users can upload files in any language, and the app translates them into multiple languages for easy download.",
    main_image: "transs_lang_1.png",
    images: ["transs_lang_1.png"],
    keywords: ["AI", "NLP", "Streamlit","GPT"],
    overview:
      "The Translator App is an AI-powered application designed to translate documents into multiple languages. Users can upload files in various formats, and the app generates translations in all selected languages, streamlining the translation process for businesses and individuals.",
    features: [
      "Multi-Language Translation: Users can upload documents in any language, and the app will translate them into selected languages.",
      "Bulk File Upload: Supports multiple file uploads at once for faster translation of large projects.",
      "GPT-4 Integration: Ensures accurate and contextually relevant translations for various documents.",
      "Document Formatting: After translation, the tool generates well-formatted documents in the target languages.",
      "User-Friendly Interface: Intuitive design allows users to easily upload files, select languages, and download translations.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a clean and easy interface for file uploads and language selection.",
      back_end:
        "FastAPI - Handles document translation requests and manages the processing pipeline.",
      database:
        "MongoDB - Stores user preferences, translation data, and history for faster performance.",
      ai_integration:
        "GPT-4 - Powers the translation process for high-quality results across multiple languages.",
    },
  },
  {
    title: "ResurgeMed",
    description:
      "An MVP platform designed to collect and analyze post-surgery information from patients. It uses a chatbot to collect data and sends updates to doctors.",
    main_image: "resurge_1.png",
    images: ["resurge_1.png", "resurge_2.png", "resurge_3.png",
    "resurge_4.png", "resurge_5.png"],
    keywords: ["AI", "NLP", "Python", "GPT","FastAPI","React","Chatbot"],
    overview:
      "The ResurgeMed platform is built to collect post-surgery information from patients and analyze their recovery. Patients interact with an AI-powered chatbot that collects relevant data and sends real-time updates to doctors for better post-surgery care.",
    features: [
      "Chatbot-Driven Data Collection: The chatbot interacts with patients to gather data on their recovery.",
      "Multiple Input Methods: Patients can send voice messages, text messages, or upload images of their condition.",
      "Real-Time Updates: The platform provides doctors with real-time updates on the patient's recovery progress.",
      "MVP Tool for Investor Pitch: This version is built as an MVP, showcasing the tool's potential for further development.",
      "Summary Report Generation: Automatically compiles patient data into concise reports for doctors to review.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides a user-friendly interface for patients to interact with the chatbot and upload data.",
      back_end:
        "FastAPI - Manages real-time data collection and communication between patients and doctors.",
      database:
        "MongoDB - Securely stores patient data and updates for fast access.",
      ai_integration:
        "Custom chatbot - Collects data from patients and adapts questions based on responses.",
    },
  },
  {
    title: "Negotiator Bot",
    description:
      "A chatbot designed to help students practice negotiation skills by simulating property selection and guiding them through real-time negotiations.",
    main_image: "negotiator_1.png",
    images: ["negotiator_1.png"],
    keywords: ["AI", "Chatbot", "GPT"],
    overview:
      "The Negotiator Bot is an AI-powered chatbot that helps students improve their negotiation skills by engaging them in simulated property negotiations. The bot guides the student through the negotiation process, offering feedback and evaluation at the end of the session.",
    features: [
      "Real-Time Negotiation Simulations: Students negotiate property terms with the bot as part of their skill development.",
      "Guided Conversations: The bot leads the negotiation, helping students stay focused on key negotiation strategies.",
      "Performance Evaluation: After each session, the bot evaluates the student's negotiation skills and provides feedback.",
      "Customizable Scenarios: Students can select various property and location parameters to make each simulation unique.",
      "Skill Development: Helps students practice essential negotiation strategies such as persuasion and compromise.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides an intuitive and responsive interface for students to engage with the bot.",
      back_end:
        "FastAPI - Manages real-time processing of conversations and the negotiation flow.",
      database:
        "MongoDB - Stores user scenarios, negotiation data, and performance scores.",
      ai_integration:
        "GPT models - Power the chatbot's ability to simulate negotiations and offer real-time feedback.",
    },
  },
  {
    title: "Lenny Loan Recommendation Tool",
    description:
      "An AI tool for analyzing loan requirements based on a client's financial background. It recommends suitable loan options and explains the reasoning behind each recommendation.",
    main_image: "ai_bank.jpg",
    images: ["ai_bank.jpg"],
    keywords: ["AI","Python","FastAPI"],
    overview:
      "The Lenny Loan Recommendation Tool is an AI-powered solution designed to analyze a client's loan requirements based on their financial background, including balance sheets and personal information. The tool evaluates multiple loan options and recommends the most suitable one.",
    features: [
      "Personalized Loan Recommendations: The tool offers tailored loan suggestions based on a client's financial data, ensuring that the loan fits their specific needs and circumstances.",
      "Detailed Loan Analysis: It assesses multiple loans from a predefined set and explains the reasoning behind the selected recommendation.",
      "Financial Background Integration: By using inputs such as balance sheets and personal details, the tool provides accurate loan options.",
      "User-Friendly Interface: The tool is designed for ease of use, helping clients make informed financial decisions without requiring extensive financial expertise.",
    ],
    technology_stack: {
      front_end:
        "React.js - Delivers a dynamic and user-friendly interface for smooth interaction.",
      back_end:
        "FastAPI - Ensures fast and reliable data processing and API interaction to handle loan assessments.",
      database:
        "MongoDB - Stores user data securely and enables fast, scalable performance.",
      ai_integration:
        "GPT models - Power the recommendation engine to analyze loan options.",
    },
  },
  {
    title: "EazyBot.AI",
    description:
      "A custom tool for integrating chatbots on websites for lead generation and user interaction. It allows for chatbot training via uploaded files and manual Q&A.",
    main_image: "eazy_bot_1.png",
    images: ["eazy_bot_1.png", "eazy_bot_2.png", "eazy_bot_3.png",
    "eazy_bot_4.png", "eazy_bot_5.png", "eazy_bot_6.png", "eazy_bot_7.png"],
    keywords: ["AI", "NLP", "Python", "Next.js", "FastAPI","GPT"],
    overview:
      "The Website Bot Tool allows users to create and integrate customized chatbots into their websites to improve lead generation and interaction. It includes features to upload files for training, manually input custom Q&A, and fully customize the chatbot's appearance.",
    features: [
      "File and Q&A Integration: Upload files to train the chatbot and add custom Q&A entries for tailored responses.",
      "Fully Customizable Appearance: Users can adjust the chatbot's design to match their website's look and feel.",
      "Lead Generation and User Interaction: The chatbot is optimized for engaging website visitors and capturing leads through interaction.",
      "Conversation Analytics Dashboard: Track and store user conversations in a dedicated dashboard to gain insights into user behavior and improve engagement.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides a dynamic and customizable interface for setting up and styling the chatbot.",
      back_end:
        "FastAPI - Manages chatbot training, Q&A integration, and data processing for lead generation.",
      database:
        "MongoDB - Stores user interactions and chatbot conversation data for analysis.",
      dashboard:
        "Displays key metrics and interaction details to help businesses analyze and optimize chatbot performance.",
    },
  },
  {
    title: "Resume Analyzer Pro",
    description:
      "An AI-powered tool that analyzes batches of resumes based on customizable criteria. It simplifies resume screening for efficient candidate selection.",
    main_image: "resume_1.png",
    images: ["resume_1.png", "resume_2.png", "resume_3.png", "resume_4.png", "resume_5.png",
    "resume_6.png", "resume_7.png", "resume_8.png"],
    keywords: ["AI", "NLP", "Python", "GPT","GPT","React"],
    overview:
      "Resume Analyzer Pro is an AI-powered tool designed to efficiently analyze batches of resumes based on customizable criteria, helping users select the right candidates for a job. The tool offers customizable analysis options, such as weighted scoring or a true/false classification.",
    features: [
      "Batch Resume Upload: Upload multiple resumes at once for efficient screening.",
      "Customizable Analysis: Users can choose between two types of analysis—weighted scoring or true/false classification based on set criteria.",
      "Entity Extraction: Select key entities to extract, such as name, phone number, and email, for more precise analysis.",
      "Detailed Report Generation: The tool provides a comprehensive report with scores or classifications for each candidate based on the criteria.",
    ],
    technology_stack: {
      front_end:
        "React.js - Delivers a clean and intuitive interface for uploading resumes and selecting analysis options.",
      back_end:
        "FastAPI - Manages resume uploads, analysis, and report generation with fast and efficient performance.",
      database: "MongoDB - Securely stores uploaded resumes and analysis data.",
      ai_integration:
        "GPT models - Power the analysis process and the interactive chatbot for enhanced user experience.",
    },
  },
  {
    title: "Website Bots",
    description:
      "A custom website chatbot for a digital marketing company, Mediaforce, designed to enhance user interaction and lead generation by answering FAQs and collecting leads.",
    main_image: "media_force_1.png",
    images: ["media_force_1.png", "media_force_2.png", "media_force_3.png","media_force_4.png"],
    keywords: ["Chatbot", "Python", "GPT"],
    overview:
      "I developed a custom website chatbot for Mediaforce, a digital marketing company, to enhance user interaction and lead generation on their website. The chatbot is integrated and trained with frequently asked questions (FAQs) and service-related information.",
    features: [
      "FAQ and Service Integration: The chatbot is trained to respond to frequently asked questions and provide information about the company's services.",
      "User Interaction: Engages with website visitors, answering their queries and guiding them through available services.",
      "Lead Generation: Collects and stores user information for follow-up and lead generation, contributing to Mediaforce's marketing efforts.",
      "Seamless Website Integration: Successfully embedded into the company's website without disrupting user experience.",
    ],
    technology_stack: {
      front_end:
        "React.js - Provides an intuitive interface for users to interact with the chatbot seamlessly.",
      back_end:
        "FastAPI - Ensures efficient data processing and handling of user interactions and lead generation.",
      database:
        "MongoDB - Stores user interaction data for future analysis and lead follow-up.",
      ai_integration:
        "FAQ and service information training to ensure accurate and relevant responses to user queries.",
    },
  },
  {
    title: "Bulk Image Creator",
    description:
      "A Streamlit application that generates multiple AI images based on a user-defined topic and parameters. Users can customize image quality, size, and the number of images.",
    main_image: "img_gen_1.png",
    images: ["img_gen_1.png", "img_gen_2.png", "img_gen_3.png",
    "img_gen_4.png", "img_gen_5.png", "img_gen_6.png"],
    keywords: ["Streamlit", "AI", "Python"],
    overview:
      "Bulk Image Creator is a Streamlit application designed to generate multiple AI images based on a user-defined topic and parameters. Users can select the AI model, specify the number of images, and choose the image quality and size.",
    features: [
      "Topic-Based Image Generation: Enter a topic and generate AI images related to the provided input.",
      "Customizable Parameters: Select the AI model, specify the number of images, and choose the quality and size of the images.",
      "Bulk Image Creation: Generate multiple images in one go, ideal for users needing large batches of visuals.",
      "Downloadable Zip File: All generated images are compiled into a zip file for quick and easy downloading.",
      "User-Friendly Interface: Simple and intuitive, allowing users to generate images with just a few clicks.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a clean and easy-to-use interface for inputting topics and parameters.",
      back_end:
        "AI models - Generates high-quality images based on the topic and input parameters.",
      file_processing:
        "Automatically compiles the generated images into a downloadable zip file for convenience.",
    },
  },
  {
    title: "Blog Automation Tool",
    description:
      "A Streamlit application that automates blog writing and posting on Blogger. It scrapes content based on a keyword and generates blogs, complete with images and editable HTML.",
    main_image: "blog_auto_1.png",
    images: ["blog_auto_1.png","blog_auto_2.png","blog_auto_3.png"],
    keywords: ["Streamlit", "Python", "Web scraping", "AI","GPT"],
    overview:
      "The Blog Automation Tool is a Streamlit application designed to automate the process of writing and posting blogs on Blogger.com. The tool scrapes the web to find trending topics and generates a comprehensive blog post.",
    features: [
      "Topic Selection: Users can enter a keyword, and the tool scrapes the web to find trending topics related to the input.",
      "Automatic Blog Generation: The tool generates a fully written blog post based on the selected topic, combining content from multiple sources.",
      "Image Generation: An accompanying image is automatically generated for the blog post.",
      "Editable HTML Area: Users can make manual edits to the blog post in an editable HTML format before publishing.",
      "Direct Blog Posting: After finalizing the post, users can upload it directly to Blogger through the tool, simplifying the publishing process.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a simple interface for topic selection, content editing, and blog publishing.",
      web_scraping:
        "Python-based web scraping is used to gather relevant content and topics from the web.",
      ai_integration:
        "GPT models - Generate blog posts and accompanying images based on the selected topics.",
      blogger_integration:
        "Automates the posting process to Blogger.com directly from the tool.",
    },
  },
  {
    title: "Debate Companion",
    description:
      "A Streamlit application designed to facilitate structured debates. Users can input a topic and set up roles, or use AI to generate arguments and roles automatically.",
    main_image: "debate_ai_1.png",
    images: ["debate_ai_1.png", "debate_ai_2.png", "debate_ai_3.png",
    "debate_ai_4.png", "debate_ai_5.png"],
    keywords: ["Streamlit", "Python", "AI"],
    overview:
      "Debate Companion is a Streamlit application designed to facilitate structured debates on any given topic. Users can input a topic and set up roles for an opponent, proponent, and moderator.",
    features: [
      "Customizable Debate Setup: Enter a topic and define the roles of opponent, proponent, and moderator.",
      "AI-Generated Participants: Users can opt to have the AI generate arguments for the opponent and proponent, streamlining the debate preparation process.",
      "Manual Character Input: If preferred, users can manually type in the character's arguments and roles.",
      "Automated Debate Flow: Once the debate starts, the conversation proceeds automatically, ensuring a smooth and engaging experience.",
      "User-Friendly Interface: Simple and intuitive design, making it easy to set up and run debates in minutes.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides a user-friendly interface for entering topics and managing debate roles.",
      back_end:
        "Python with AI Integration - Powers the debate logic and AI-generated responses.",
      ai_integration:
        "GPT models - Generate realistic arguments for both the opponent and proponent, ensuring balanced debates.",
    },
  },
  {
    title: "Song Language Identifier",
    description:
      "A streamlined application to detect the language of a song. Users can upload a song or provide a Spotify URL, and the app will detect the language using AI.",
    main_image: "song_lang_1.png",
    images: ["song_lang_1.png", "song_lang_2.png"],
    keywords: ["Streamlit", "Python","AI","GPT"],
    overview:
      "The Song Language Identifier is a streamlined application built to detect the language of any song. Users can either upload a song file directly or provide a Spotify URL for the song.",
    features: [
      "File Upload or URL Input: Users can either upload a song file or paste a Spotify URL for the language detection process.",
      "Accurate Language Detection: The app employs a language detection algorithm to determine the song's language with high accuracy.",
      "Fast and Streamlined: Built for speed and ease of use, the application provides quick results without requiring complex user inputs.",
      "User-Friendly Interface: Simple and intuitive, making it accessible for both casual users and professionals needing quick results.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides an easy-to-use and minimalistic interface for file uploads or URL submissions.",
      back_end:
        "Python with AI-based algorithm - Powers the language detection process.",
    },
  },
  {
    title: "Tax GPT",
    description:
      "A WhatsApp chatbot developed to answer tax-related questions in the UAE. Users can ask in any language, and the bot responds in the same language.",
    main_image: "tax_gpt_1.png",
    images: ["tax_gpt_1.png", "tax_gpt_2.png", "tax_gpt_3.png"],
    keywords: ["Chatbot", "Chatbot", "GPT"],
    overview:
      "Tax GPT is a WhatsApp-based chatbot developed to provide users with accurate answers to tax-related questions in the UAE. The chatbot allows users to ask questions in any language, and it responds in the same language, making it a versatile tool for a diverse user base.",
    features: [
      "Multilingual Support: Users can ask tax-related questions in any language, and the bot responds in the same language.",
      "Instant Tax Information: Provides instant answers to queries about UAE tax regulations, deadlines, and compliance.",
      "User-Friendly Interface: Accessible via WhatsApp, making it easy for users to interact and get quick responses.",
      "High User Engagement: More than 1,000 users have successfully interacted with the bot, showcasing its reliability and effectiveness.",
      "Automated Conversations: The chatbot is capable of handling multiple queries at once, offering a seamless experience for users seeking tax advice.",
    ],
    technology_stack: {
      front_end:
        "WhatsApp API - Integrates the chatbot into WhatsApp for real-time user interaction.",
      back_end:
        "GPT-based AI model - Handles natural language processing to understand and respond to tax-related questions.",
      multilingual_nlp:
        "Enables the bot to communicate in various languages, ensuring wide accessibility.",
    },
  },
  {
    title: "Real Estate Data Analysis",
    description:
      "A data analysis tool for real estate professionals. It provides insights into property prices, trends, and performance based on location and property type.",
    main_image: "realestate_analysis_1.png",
    images: ["realestate_analysis_1.png"],
    keywords: ["Data Analysis","Python"],
    overview:
      "The Real Estate Data Analysis project is designed to help real estate professionals analyze property data efficiently. This tool provides insights into various real estate metrics such as property prices, location-based trends, and property types.",
    features: [
      "Property Price Analysis: Provides a breakdown of property prices based on location, size, and type.",
      "Market Trend Insights: Identifies trends in real estate demand and supply for specific regions.",
      "Property Type Evaluation: Compares different property types (e.g., residential, commercial) to assess performance and investment potential.",
      "Location-Based Analysis: Offers a detailed view of real estate performance in specific neighborhoods or cities.",
      "Time-Series Data Visualization: Displays property trends over time to help users identify market patterns and growth opportunities.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Provides an interactive platform for analyzing real estate data.",
      back_end:
        "Python with data processing libraries - Performs real estate data analysis and generates insights.",
      visualization_tools:
        "Matplotlib, Plotly - Visualizes property data and trends with dynamic charts and graphs.",
    },
  },
  {
    title: "Inventory Data Analysis",
    description:
      "A tool to manage and analyze inventory data. It provides insights into stock levels, demand trends, and restocking requirements, helping optimize inventory management.",
    main_image: "inventory_analysis_1.png",
    images: ["inventory_analysis_1.png"],
    keywords: ["Dashboard", "Power BI", "Data Analysis"],
    overview:
      "The Inventory Data Analysis project is developed to help businesses manage and analyze their inventory data efficiently. This tool enables users to track inventory levels, monitor stock movement, and analyze demand trends.",
    features: [
      "Stock Level Monitoring: Tracks current inventory levels, providing real-time updates on stock availability.",
      "Demand Trend Analysis: Analyzes product demand trends to help businesses forecast future inventory needs.",
      "Stock Turnover Insights: Evaluates the turnover rate of products to identify slow-moving or high-demand items.",
      "Restocking Recommendations: Provides insights into when and how much to restock based on sales trends and stock movement.",
      "Supply Chain Optimization: Helps businesses optimize their supply chain by identifying gaps in product availability and restocking processes.",
    ],
    technology_stack: {
      front_end:
        "Streamlit - Offers a user-friendly interface for tracking and analyzing inventory data.",
      back_end:
        "Python with data analysis libraries - Analyzes inventory data and generates actionable insights.",
      visualization_tools:
        "Matplotlib, Plotly - Creates visual reports on inventory trends, stock levels, and demand patterns.",
    },
  },
  {
    title: "Finance Data Dashboard",
    description:
      "A comprehensive dashboard for financial analysts to visualize and compare financial year data, including KPIs, income statements, balance sheets, and cash flow.",
    main_image: "finance_dashboard_1.png",
    images: ["finance_dashboard_1.png","finance_dashboard_2.png"],
    keywords: ["Dashboard","Django"],
    overview:
      "The Finance Data Dashboard is a comprehensive tool built for financial analysts to visually explore and analyze financial year data. The dashboard allows clients to select various financial parameters, such as income statements, KPIs, balance sheets, and cash flow, to view and compare their financial data across different periods.",
    features: [
      "Parameter-Based Visualization: Users can select from various financial parameters, including KPIs, income statements, balance sheets, and cash flow, to generate visual reports.",
      "Year-over-Year (YoY) Analysis: Offers insights into year-over-year performance to track growth, profitability, and financial stability.",
      "Budget vs. Actuals Comparison: Provides a detailed comparison between budgeted figures and actual financial performance for better forecasting.",
      "Interactive Dashboard: Easy-to-navigate tabs allow users to switch between different sections, offering a clear view of each financial metric.",
      "Customizable Reports: Users can filter data to focus on specific time periods or financial indicators that matter most to their analysis.",
    ],
    technology_stack: {
      front_end:
        "Interactive interface for financial data visualization, providing a user-friendly experience for navigating through various financial metrics.",
      data_visualization:
        "Python libraries like Matplotlib, Plotly, or Power BI - Used to create dynamic charts and graphs representing financial data.",
      back_end:
        "Python-based data processing, ensuring real-time updates and accurate financial analysis for decision-making.",
    },
  },
  {
    title: "Football Blog Generator",
    description:
      "An automation tool that scrapes football match data and generates match summaries, reducing the time needed to manually write blog posts for each game.",
    main_image: "blog_generator_1.png",
    images: ["blog_generator_1.png","blog_generator_2.png"],
    keywords: ["Web Scraping","Automation","GPT"],
    overview:
      "The Football Blog Generator is an automation tool designed to streamline the process of generating blogs for each football match. Developed for a client, this tool automatically scrapes match data from designated websites and generates a blog post based on the gathered information.",
    features: [
      "Automated Data Scraping: Scrapes football match data from specified websites to gather relevant information for each match.",
      "Automatic Blog Generation: Automatically writes blog posts based on the scraped data, covering match details, key events, and player performances.",
      "Time-Saving Tool: Eliminates the need for manual blog writing, allowing staff to focus on other tasks while ensuring consistent blog output for each match.",
      "Customizable Templates: Allows customization of blog templates to match the desired style and tone of the client's website.",
      "Efficient Workflow: Reduces the workload on content creators, making the blog generation process more efficient.",
    ],
    technology_stack: {
      data_scraping:
        "Python libraries such as BeautifulSoup and Scrapy - Used to scrape match data from specific websites.",
      blog_generation:
        "AI-based text generation models - Create match reports and blog content from the scraped data.",
      automation:
        "Custom automation scripts handle the entire process from data scraping to blog publishing.",
    },
  },
  {
    title: "Production Data Dashboard",
    description:
      "A Power BI dashboard designed to analyze bakery production and returns, helping manufacturers optimize production and delivery routes.",
    main_image: "production_dashboard_1.png",
    images: ["production_dashboard_1.png", "production_dashboard_2.png"],
    keywords: ["Dashboard","Data Analysis","Power BI"],
    overview:
      "I created a dashboard for a bakery manufacturing project to analyze their production and return data. The dashboard helps manufacturers understand how much production should be managed and which delivery routes should be optimized. It provides insights into the efficiency of the production process and return rates, helping the business streamline operations and reduce waste.",
    features: [
      "Production Analysis: Tracks daily production to ensure the right amount is produced based on demand.",
      "Return Data Insights: Analyzes returned products to identify potential issues and reduce future returns.",
      "Delivery Route Optimization: Provides recommendations for optimizing delivery routes based on production and return data.",
      "Power BI Dashboard: Visualizes all the key metrics in an easy-to-use, interactive format.",
      "Data-Driven Decisions: Helps the bakery make informed decisions regarding production volumes and logistics.",
    ],
    technology_stack: {
      dashboard_tool:
        "Power BI - Used to create interactive visualizations and reports based on production and return data.",
      data_analysis:
        "Data processing for bakery production and return analysis to guide decision-making.",
      visualization:
        "Power BI visualizations to display production efficiency, return rates, and delivery route optimization.",
    },
  },
];
