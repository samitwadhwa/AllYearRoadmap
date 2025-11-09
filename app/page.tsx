"use client";

import { useState } from "react";

interface Topic {
  title: string;
  timeline: string;
  description: string;
  resources?: string[];
}

interface YearData {
  year: string;
  title: string;
  cgpa?: string;
  topics: Topic[];
  activities: string[];
  focus: string;
}

const roadmapData: YearData[] = [
  {
    year: "1st Year",
    title: "Foundation & Domain Exploration",
    cgpa: "6.5+ CGPA",
    focus: "Hard and Complex (It's OK to Feel this)",
    topics: [
      {
        title: "Programming Language (Python or C)",
        timeline: "3-4 months",
        description: "Not just pass but understand deeply. Master fundamentals, syntax, and problem-solving approach.",
        resources: ["YouTube tutorials", "Online courses", "Offline classes"]
      },
      {
        title: "Domain Exploration",
        timeline: "Ongoing throughout year",
        description: "Explore different domains: Web Development, Data Analytics, Data Science, Cybersecurity, Blockchain. Focus on AI, Generative AI, Agentic AI if interested in AI/ML track.",
        resources: ["Research online", "Join communities", "Attend webinars"]
      },
      {
        title: "Competitive Programming Basics",
        timeline: "2-3 months (after programming basics)",
        description: "Start with basic problem-solving on platforms like HackerRank, CodeChef, LeetCode (Easy problems).",
        resources: ["HackerRank", "CodeChef", "LeetCode Easy"]
      },
      {
        title: "Networking & Community",
        timeline: "Ongoing",
        description: "Join groups, LinkedIn, and Twitter. Start building your professional network early.",
        resources: ["LinkedIn", "Twitter/X", "Tech communities"]
      }
    ],
    activities: [
      "Maintain 6.5+ CGPA (Use YouTube, Courses, Offline resources)",
      "Master one programming language (Python recommended for AI/ML)",
      "Figure out your domain interest",
      "Join tech groups and communities",
      "Start building LinkedIn and Twitter presence"
    ]
  },
  {
    year: "2nd Year",
    title: "Core Skills & Project Building",
    cgpa: "Maintain 6.5+ CGPA",
    focus: "Build Foundation & Start Building",
    topics: [
      {
        title: "Data Structures & Algorithms (DSA) ⭐⭐⭐",
        timeline: "6-8 months",
        description: "High priority! Learn Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables. Start solving basic DSA problems.",
        resources: ["GeeksforGeeks", "LeetCode", "Codeforces"]
      },
      {
        title: "Core CS Subjects",
        timeline: "Throughout academic year",
        description: "Focus on OS, DBMS, CN (Computer Networks), OOPS. These are crucial for interviews and understanding systems.",
        resources: ["University courses", "NPTEL", "Gate Smashers"]
      },
      {
        title: "Domain Fundamentals",
        timeline: "4-6 months",
        description: "Deep dive into your chosen domain. If AI/ML: Learn ML basics, statistics, linear algebra. If Web Dev: HTML, CSS, JavaScript, frameworks.",
        resources: ["Domain-specific courses", "Documentation", "Projects"]
      },
      {
        title: "Competitive Programming (Intermediate)",
        timeline: "Ongoing (2-3 hours/week)",
        description: "Solve 100+ problems. Participate in weekly contests on CodeChef, Codeforces. Focus on problem-solving patterns.",
        resources: ["Codeforces", "CodeChef", "AtCoder"]
      },
      {
        title: "Mini Projects",
        timeline: "2-3 months per project",
        description: "Build 2-3 mini projects in your domain. Apply what you've learned practically.",
        resources: ["GitHub", "Tutorials", "Documentation"]
      },
      {
        title: "Use AI in Learning",
        timeline: "Ongoing",
        description: "Leverage AI tools (ChatGPT, Claude, GitHub Copilot) to enhance your learning and coding efficiency.",
        resources: ["ChatGPT", "GitHub Copilot", "AI coding assistants"]
      }
    ],
    activities: [
      "Master Data Structures & Algorithms (High Priority)",
      "Build 2-3 mini projects in your domain",
      "Start solving DSA questions (basics)",
      "Participate in your first Hackathon",
      "Create and optimize your LinkedIn profile",
      "Start sharing learning on LinkedIn & X (Twitter)",
      "Build your first Resume",
      "Send 100+ connection requests on LinkedIn",
      "Engage: Post content, comment, cold DM",
      "Look for off-campus opportunities"
    ]
  },
  {
    year: "3rd Year",
    title: "Advanced Skills & Complex Projects",
    cgpa: "7+ CGPA",
    focus: "Build Complex Projects & Increase Difficulty",
    topics: [
      {
        title: "Advanced DSA (Medium-Hard)",
        timeline: "6-8 months",
        description: "Increase difficulty to medium-hard problems. Focus on dynamic programming, advanced graph algorithms, segment trees, etc.",
        resources: ["LeetCode Medium/Hard", "Codeforces Div 2/3"]
      },
      {
        title: "Complex Projects",
        timeline: "3-4 months per project",
        description: "Build 1-2 complex, full-stack projects. Make them live (deploy). These should showcase your domain expertise.",
        resources: ["Deployment platforms", "Cloud services", "GitHub"]
      },
      {
        title: "Core Subjects Mastery",
        timeline: "Throughout year",
        description: "Deep understanding of DBMS, OOPS, CN, OS. These are frequently asked in interviews.",
        resources: ["InterviewBit", "GeeksforGeeks", "System Design resources"]
      },
      {
        title: "Competitive Programming (Advanced)",
        timeline: "Ongoing (3-4 hours/week)",
        description: "Participate in regular contests. Aim for Codeforces Expert/Specialist, CodeChef 3-4 star rating. Solve 200+ medium problems.",
        resources: ["Codeforces", "CodeChef", "LeetCode Contests"]
      },
      {
        title: "Aptitude & Soft Skills",
        timeline: "2-3 months",
        description: "Prepare for aptitude tests. Practice quantitative, logical reasoning, verbal ability.",
        resources: ["Aptitude books", "Online practice tests", "Mock tests"]
      }
    ],
    activities: [
      "Maintain 7+ CGPA",
      "Build 1-2 complex projects (make them live)",
      "Participate in more Hackathons",
      "Solve medium-hard DSA problems regularly",
      "Participate in coding contests (weekly)",
      "Master core subjects: DBMS, OOPS, CN, OS",
      "Prepare for aptitude tests",
      "Continue building online presence"
    ]
  },
  {
    year: "4th Year",
    title: "Placement Preparation & Opportunities",
    cgpa: "Maintain 7+ CGPA",
    focus: "Grab Opportunities & Don't Give Up",
    topics: [
      {
        title: "Company-wise Preparation",
        timeline: "Ongoing",
        description: "Research each company: Syllabus, Interview Process, Mock Tests. Prepare company-specific questions.",
        resources: ["Glassdoor", "InterviewBit", "GeeksforGeeks Company Prep"]
      },
      {
        title: "Mock Interviews",
        timeline: "2-3 months before placements",
        description: "Practice mock interviews. Get feedback on technical and HR rounds.",
        resources: ["Pramp", "InterviewBit Mock", "Peer practice"]
      },
      {
        title: "Competitive Programming (Maintain)",
        timeline: "Ongoing (2-3 hours/week)",
        description: "Keep practicing to stay sharp. Participate in contests to maintain problem-solving skills.",
        resources: ["Weekly contests", "Problem-solving practice"]
      },
      {
        title: "Networking & Referrals",
        timeline: "Ongoing",
        description: "Use your network for referrals. Reach out to connections, alumni, and professionals.",
        resources: ["LinkedIn", "Alumni network", "Tech communities"]
      }
    ],
    activities: [
      "Grab opportunities on campus & off campus",
      "Prepare company-wise: Syllabus, Process, Mock Tests",
      "Don't give up - Rejection is normal",
      "Use your network → Get referrals",
      "Apply to 100+ companies",
      "Practice mock interviews regularly",
      "Keep learning and improving",
      "Take care of yourself (mental & physical health)",
      "Stay away from: Drugs, Bad Influence, Toxic friends"
    ]
  }
];

export default function Home() {
  const [activeYear, setActiveYear] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Student Roadmap by samitknows
          </h1>
          <p className="text-xl text-gray-600">
            A Comprehensive 4-Year Journey from Foundation to Placement
          </p>
        </div>

        {/* Year Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roadmapData.map((year, index) => (
            <button
              key={index}
              onClick={() => setActiveYear(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeYear === index
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-indigo-50 shadow-md"
              }`}
            >
              {year.year}
            </button>
          ))}
        </div>

        {/* Active Year Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                {roadmapData[activeYear].year} - {roadmapData[activeYear].title}
              </h2>
              {roadmapData[activeYear].cgpa && (
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  {roadmapData[activeYear].cgpa}
                </span>
              )}
            </div>
            <p className="text-lg text-indigo-600 font-medium italic">
              {roadmapData[activeYear].focus}
            </p>
          </div>

          {/* Topics Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
              Topics & Timeline
            </h3>
            <div className="space-y-6">
              {roadmapData[activeYear].topics.map((topic, index) => (
                <div
                  key={index}
                  className="border-l-4 border-indigo-500 pl-6 py-4 bg-gradient-to-r from-indigo-50 to-transparent rounded-r-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {topic.title}
                    </h4>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium whitespace-nowrap ml-4">
                      {topic.timeline}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{topic.description}</p>
                  {topic.resources && topic.resources.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        Resources:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {topic.resources.map((resource, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Activities Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
              Key Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {roadmapData[activeYear].activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="text-indigo-600 font-bold mt-1">✓</span>
                  <p className="text-gray-800">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Years Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
            Complete Roadmap Overview
          </h3>
          <div className="space-y-6">
            {roadmapData.map((year, yearIndex) => (
              <div
                key={yearIndex}
                className="border-l-4 border-indigo-400 pl-6 py-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">
                    {year.year} - {year.title}
                  </h4>
                  {year.cgpa && (
                    <span className="text-sm text-gray-600">{year.cgpa}</span>
                  )}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {year.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="text-sm bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="font-semibold text-gray-800 mb-1">
                        {topic.title}
                      </div>
                      <div className="text-indigo-600 text-xs">
                        {topic.timeline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h4 className="font-bold text-yellow-900 mb-2">Important Reminder</h4>
          <p className="text-yellow-800">
            <strong>All four years:</strong> Take care of yourself. Stay away from
            drugs, bad influences, and toxic friends. Your mental and physical
            health is paramount to your success.
          </p>
        </div>
      </div>
    </div>
  );
}
