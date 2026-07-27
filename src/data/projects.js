const projects = [
    {
        id: 1,
        title: "B.U.S.",
        description:
            "Vehicle valuation & inspection platform for Norwegian and Swedish markets. Designed the BUStest P3 GraphQL API, built a React core components library, and contributed to the all-new Platform 3 launched in 2025.",
        timeline: "Oct 2023 – Present",
        url: "https://www.bus.no",
        image: "/assets/img/BUSLogo.png",
        tags: ["React", "GraphQL", ".NET", "Azure"],
        details: [
            "Designed, developed, and maintained high-performance enterprise applications for BUSkvalitet, BUSpek, and BUStest, delivering end-to-end features across frontend, backend, database, and Azure cloud infrastructure.",
            "Built scalable GraphQL APIs using HotChocolate and integrated Apollo GraphQL, developing cloud-native solutions with .NET 8, Entity Framework Core, Azure Service Bus (Topics/Queues), and Blob Storage.",
            "Optimized application and database performance through efficient LINQ, transactions, and query optimization.",
            "Contributed across the full SDLC — architecture, development, unit testing, CI/CD, production support, and performance optimization while adhering to layered architecture, PDD practices, and engineering standards.",
            "Developed AI-powered engineering tools, including an Impact Area Analyzer, and helped drive Spec-Driven Development through GitHub Copilot, Agentic AI workflows, and AI-DLC practices.",
            "Managed Azure DevOps CI/CD pipelines and release processes while serving as both DevOps Lead and Scrum Master, facilitating Agile ceremonies and sprint planning.",
            "Improved software quality by conducting code reviews, promoting best practices, and collaborating with cross-functional teams in an Agile Scrum environment.",
        ],
    },
    {
        id: 2,
        title: "Parkly",
        description:
            "Resolved frontend & backend bugs in C#/.NET. Built a domain-specific chatbot using Azure OpenAI trained on project docs, enabling devs and QA to clarify domain queries efficiently.",
        timeline: "Dec 2022 – Oct 2023",
        url: "https://www.parkly.no/",
        image: "/assets/img/ParklyLogo.jpeg",
        tags: ["C#", ".NET", "Azure", "OpenAI"],
        details: [
            "Designed and developed cloud-native parking management solutions using C#, .NET, Azure services, and RESTful APIs.",
            "Implemented scalable backend features while resolving frontend and backend production issues, contributing throughout the full software development lifecycle from development to deployment and production support.",
            "Developed an Azure OpenAI-powered domain chatbot by training AI models on project documentation, improving productivity for developers and QA teams.",
            "Collaborated with cross-functional teams in an Agile Scrum environment, participating in code reviews and promoting engineering best practices to improve software quality and maintainability.",
        ],
    },
    {
        id: 3,
        title: "DevGrade",
        description:
            "Implemented MCQ integration, AI-generated question creation, and full UI/UX revamp. Worked with Node.js, Angular, and AWS (Lambda, user management). Key contributor to Hacktitude 2023 in Malaysia.",
        timeline: "July 2021 – Oct 2023",
        url: "https://devgrade.io/",
        image: "/assets/img/DevGradeLogo.png",
        tags: ["Node.js", "Angular", "AWS", "AI"],
        details: [
            "Designed and developed key platform features, including MCQ integration, AI-generated question creation, and a complete UI/UX modernization using Angular, Node.js, and AWS services.",
            "Built and maintained scalable enterprise web applications, leveraging AWS Lambda, Amazon Cognito, and other cloud technologies to improve performance, reliability, and user experience.",
            "Contributed across the full software development lifecycle, from feature implementation and testing to deployment, production support, and continuous product improvements in an Agile Scrum environment.",
            "Applied engineering best practices through code reviews, debugging, and adherence to development standards.",
            "Served as a core organizer of Hacktitude 2023, an international undergraduate hackathon hosted in Malaysia.",
        ],
    },
    {
        id: 4,
        title: "Wheelsperer",
        description:
            "Conversational AI-based personalized vehicle recommendation system. Built a knowledge-based filtering engine integrated with Rasa and OpenAI Assistant API for natural language understanding, enabling users to describe their vehicle needs in plain English and receive tailored model suggestions with advertisements.",
        timeline: "Sep 2022 – Jan 2023",
        image: "/assets/img/Wheelsperer.jpeg",
        tags: ["Rasa", "OpenAI", "Python", "NLP", "Machine Learning"],
        details: [
            "Built a conversational AI system that understands natural language vehicle queries and recommends the best matching car models.",
            "Developed a knowledge-based filtering engine integrated with Rasa for intent classification and entity extraction.",
            "Integrated OpenAI Assistant API for advanced natural language understanding and dialog management.",
            "Designed the system to generate tailored vehicle suggestions along with contextual advertisements based on user preferences.",
        ],
    },
    {
        id: 5,
        title: "SnapFix",
        description:
            "Vehicle exterior damage detection and repair cost estimation using few-shot learning. Built three models combining Prototypical Networks and MAML for damage level classification (70.8% accuracy), damage type classification (79.89%), and cost estimation — trained on minimal labelled data with CNN backbones like ResNet and Mask R-CNN.",
        timeline: "Sep 2024 – Feb 2025",
        image: "/assets/img/SnapFix.png",
        tags: ["Python", "PyTorch", "Few-Shot Learning", "Computer Vision", "CNN", "MAML"],
        details: [
            "Developed a vehicle exterior damage detection system using few-shot learning techniques to work with minimal labelled data.",
            "Built three specialized models: damage level classification (70.8% accuracy), damage type classification (79.89%), and repair cost estimation.",
            "Combined Prototypical Networks and MAML (Model-Agnostic Meta-Learning) for efficient learning from limited examples.",
            "Used CNN backbones including ResNet and Mask R-CNN for feature extraction and damage localization.",
        ],
    },
    {
        id: 6,
        title: "Libraria",
        description:
            "A comprehensive desktop application built with C# and WPF for managing library operations. Features include book cataloguing, member management, borrowing and returns tracking with due date alerts, and fine calculation — all wrapped in a clean, intuitive interface designed for librarians and library staff.",
        image: "/assets/img/libraria.jpg",
        tags: ["C#", "WPF", "Desktop"],
        details: [
            "Built a full-featured library management system with book cataloguing, member management, and borrowing/returns tracking.",
            "Implemented due date alerts and automatic fine calculation for overdue items.",
            "Designed a clean, intuitive WPF interface tailored for librarians and library staff with a focus on usability.",
        ],
    },
    {
        id: 7,
        title: "WarrantyPal",
        description:
            "A fully responsive web application that helps households organize and track warranty information for appliances, electronics, and other purchases. Features receipt upload, expiry notifications, warranty claim status tracking, and a searchable inventory dashboard — ensuring no warranty ever goes unused.",
        image: "/assets/img/warranty.jpg",
        tags: ["Web", "Responsive"],
        details: [
            "Developed a web application for households to organize and track warranty information for appliances, electronics, and other purchases.",
            "Implemented receipt upload functionality, expiry notifications, and warranty claim status tracking.",
            "Built a searchable inventory dashboard that ensures users never miss a warranty expiration.",
        ],
    },
];

export default projects;
