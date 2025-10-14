import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/api";
import { Search, Filter, Edit, Trash2, Eye } from "lucide-react";

const ViewAssignments = ({ role, selectedCourse }) => {
  const [course, setCourse] = useState(selectedCourse || "");
  const [level, setLevel] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const courseSubTopics = {
    AWS: [
      { name: "AWS Certified Security", value: "AWSCertifiedSecurity" },
      {
        name: "AWS Certified SysOps Administrator",
        value: "AWSCertifiedSysOpsAdministrator",
      },
      { name: "AWS Certified Developer", value: "AWSCertifiedDeveloper" },
      { name: "AWS Certified DevOps", value: "AWSCertifiedDevOps" },
      {
        name: "AWS Certified Machine Learning",
        value: "AWSCertifiedMachineLearning",
      },
      {
        name: "AWS Certified Data Analytics",
        value: "AWSCertifiedDataAnalytics",
      },
      {
        name: "AWS Certified cloud practitioner",
        value: "AWSCertifiedcloudpractitioner",
      },
      {
        name: "AWS Certified Solutions Architect",
        value: "AWSCertifiedSolutionsArchitect",
      },
      {
        name: "AWS Certified Advanced Networking",
        value: "AWSCertifiedAdvancedNetworking",
      },
    ],
    Microsoft: [
      {
        name: "Microsoft Azure Administrator",
        value: "MicrosoftAzureAdministrator",
      },
      {
        name: "Microsoft Azure AI Fundamentals",
        value: "MicrosoftAzureAIFundamentals",
      },
      {
        name: "Microsoft Azure Developer Associate",
        value: "MicrosoftAzureDeveloperAssociate",
      },
      {
        name: "Microsoft Azure Fundamentals",
        value: "MicrosoftAzureFundamentals",
      },
      {
        name: "Microsoft Dynamics 365",
        value: "MicrosoftDynamics365",
      },
      {
        name: "Microsoft Azure",
        value: "MicrosoftAzure",
      },
      {
        name: "Microsoft 365",
        value: "Microsoft365",
      },
      {
        name: "Microsoft 365 Fundamentals",
        value: "Microsoft365Fundamentals",
      },
      {
        name: "Microsoft security, compliance and Identity",
        value: "MicrosoftsecurityComplianceandIdentity",
      },
      {
        name: "Microsoft Power Platform",
        value: "MicrosoftPowerPlatform",
      },
      {
        name: "Microsoft Azure Data Fundamentals",
        value: "MicrosoftAzureDataFundamentals",
      },
      {
        name: "Microsoft 365 certified teams administrator associate",
        value: "Microsoft365certifiedteamsadministratorassociate",
      },
      {
        name: "Microsoft Power bi",
        value: "MicrosoftPowerbi",
      },
      {
        name: "Microsoft Azure Cosmos DB Developer Specialty",
        value: "MicrosoftAzureCosmosDBDeveloperSpecialty",
      },
      {
        name: "Microsoft Azure for SAP workloads Specialty",
        value: "MicrosoftAzureforSAPworkloadsSpecialty",
      },
      {
        name: "Microsoft Azure Solutions Architect Expert",
        value: "MicrosoftAzureSolutionsArchitectExpert",
      },
      {
        name: "Microsoft Azure Virtual Desktop Specialty",
        value: "MicrosoftAzureVirtualDesktopSpecialty",
      },
      {
        name: "Microsoft Dynamics 365 Sales Functional Consultant Associate",
        value: "MicrosoftDynamics365SalesFunctionalConsultantAssociate",
      },
      {
        name: "Microsoft Cybersecurity Analyst",
        value: "MicrosoftCybersecurityAnalyst",
      },
      {
        name: "Microsoft Ms-900: Microsoft 365 Fundamentals",
        value: "MicrosoftMs-900:Microsoft365Fundamentals",
      },
      {
        name: "Microsoft Pl-300 Microsoft Power Bi Certification Training",
        value: "MicrosoftPl-300MicrosoftPowerBiCertificationTraining",
      },
    ],
    PECB: [
      {
        name: "PECB Computer Forensics",
        value: "PECBComputerForensics"
      },
      {
        name: "PECBCybersecurity Audit Training",
        value: "PECBCybersecurityAuditTraining"
      },
      {
        name: "PECB ISO 9001 Lead Implementer",
        value: "PECBISO9001LeadImplementer"
      },
      {
        name: "PECB ISO 9001",
        value: "PECBISO9001"
      },
      {
        name: "PECB ISO 22301",
        value: "PECBISO22301"
      },
      {
        name: "PECB ISO 31000 Risk Manager",
        value: "PECBISO31000RiskManager",
      },
      {
        name: "PECB ISO 37001",
        value: "PECBISO37001"
      },
      {
        name: "PECB ISO 45001",
        value: "PECBISO45001"
      },
      {
        name: "PECB ISO IEC 27001 Lead Implementer",
        value: "PECBISOIEC27001LeadImplementer"
      },
      {
        name: "PECB ISO IEC 27001",
        value: "PECBISOIEC27001"
      },
      {
        name: "PECB ISO IEC 27005 Risk Manager",
        value: "PECBISOIEC27005RiskManager"
      },
      {
        name: "PECB ISO IEC 27032 Cyber Security",
        value: "PECBISOIEC27032CyberSecurity"
      },
      {
        name: "PECB Certified ISO 27001 Foundation",
        value: "PECBCertifiedISO27001Foundation"
      },
      {
        name: "SCADA Security Manager",
        value: "SCADASecurityManager"
      },
      {
        name: "Go4 Whatsup",
        value: "Go4Whatsup"
      }
    ],
    comptia: [
      { name: "CompTIA A+", value: "CompTIAA+" },
      { name: "CompTIA Network+ N10-008", value: "CompTIANetwork+N10-008" },
      { name: "CompTIA Network+ N10-007", value: "CompTIANetwork+N10-007" },
      { name: "CompTIA Security+ SY0-701", value: "CompTIASecurity+701" },
      { name: "CompTIA Advanced Security", value: "CompTIAAdvancedSecurity" },
      {
        name: "CompTIA Cybersecurity Analyst",
        value: "CompTIACybersecurityAnalyst",
      },
      { name: "CompTIA Cloud Essentials+", value: "CompTIACloudEssentials+" },
      { name: "CompTIA Data+", value: "CompTIAData+" },
      { name: "CompTIA Server+", value: "CompTIAServer+" },
      { name: "CompTIA Cloud+", value: "CompTIACloud+" },
      { name: "CompTIA PenTest+", value: "CompTIAPenTest" },
      { name: "CompTIA Project+ PK0-004", value: "CompTIAProject+004" },
      { name: "CompTIA Project+ PK0-005", value: "CompTIAProject+005" },
      { name: "CompTIA Linux+", value: "CompTIALinux+" },
      { name: "CompTIA Security+ SY0-601", value: "CompTIASecurity+601" },
    ],
    Cisco: [
      {
        name: "Cisco Certified Support Technician (CCST)",
        value: "CiscoCertifiedSupportTechnician(CCST)",
      },
      {
        name: "CCST Cybersecurity",
        value: "CCSTCybersecurity",
      },
      {
        name: "CCST Networking",
        value: "CCSTNetworking",
      },
      {
        name: "Cisco Certified Technician (CCT)",
        value: "CiscoCertifiedTechnician(CCT)",
      },
      {
        name: "CCT Routing & Switching (Exam: 100-490 RSTECH)",
        value: "CCTRouting&Switching(Exam: 100-490 RSTECH)",
      },
      {
        name: "CCT Data Center (Exam: 010-151 DCTECH)",
        value: "CCTDataCenter(Exam: 010-151 DCTECH)",
      },
      {
        name: "Cisco Certified Network Associate (CCNA)",
        value: "CiscoCertifiedNetworkAssociate(CCNA)",
      },
      {
        name: "Cisco Certified CyberOps Associate",
        value: "CiscoCertifiedCyberOpsAssociate",
      },
      {
        name: "CCNP Enterprise",
        value: "CCNPEnterprise",
      },
      {
        name: "CCNP Security",
        value: "CCNPSecurity",
      },            
      {
        name: "CCNP Data Center",
        value: "CCNPDataCenter",
      },
      {
        name: "CCNP Service Provider",
        value: "CCNPServiceProvider",
      },
      {
        name: "CCNP Collaboration",
        value: "CCNPCollaboration",
      },
      {
        name: "CCNP DevNet (Developer)",
        value: "CCNPDevNet(Developer)",
      },
      {
        name:"CCIE Enterprise Infrastructure",
        value:"CCIEEnterpriseInfrastructure",
      },
      {
        name:"CCIE Enterprise Wireless",
        value:"CCIEEnterpriseWireless",
      },
      {
        name:"CCIE Security",
        value:"CCIESecurity",
      },
      {
        name:"CCIE Data Center",
        value:"CCIEDataCenter",
      },
      {
        name:"CCIE Service Provider",
        value:"CCIEServiceProvider",
      },
      {
        name:"CCIE Collaboration",
        value:"CCIECollaboration",
      },
    ],
    Internal: [
      {
        name: "Lead and Sales Assessment",
        value: "Lead-and-Sales-Assessment"
      }
    ],
  };

  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        let url = API_ENDPOINTS.QUESTIONS;
        const params = new URLSearchParams();
        
        if (course) params.append("course", course);
        if (level) params.append("level", level);
        if (subTopic) params.append("subTopic", subTopic);
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        const response = await axios.get(url);
        setQuestions(response.data || []);
        setFilteredQuestions(response.data || []);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to load assignments. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [course, level, subTopic]);

  // Filter questions based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredQuestions(questions);
      return;
    }

    const filtered = questions.filter(question =>
      question.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (question.subTopic && question.subTopic.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredQuestions(filtered);
  }, [searchTerm, questions]);

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setQuestionText(question.questionText);
    setOptions([...question.options]);
    setCorrectAnswer(question.correctAnswer);
  };

  const handleUpdate = async () => {
    if (!editingQuestion) return;

    try {
      setLoading(true);
      setError(null);

      const updatedQuestion = {
        questionText,
        options,
        correctAnswer,
        course: editingQuestion.course,
        subTopic: editingQuestion.subTopic,
        level: editingQuestion.level,
      };

      await axios.put(
        `${API_ENDPOINTS.QUESTIONS}/${editingQuestion._id}`,
        updatedQuestion
      );

      // Update local state
      const updatedQuestions = questions.map(q =>
        q._id === editingQuestion._id ? { ...q, ...updatedQuestion } : q
      );
      setQuestions(updatedQuestions);
      setFilteredQuestions(updatedQuestions);

      setSuccessMessage("Question updated successfully!");
      setEditingQuestion(null);
      setQuestionText("");
      setOptions([]);
      setCorrectAnswer("");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);

    } catch (error) {
      console.error("Error updating question:", error);
      setError("Failed to update question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (questionId) => {
    if (!window.confirm("Are you sure you want to delete this question?")) {
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await axios.delete(`${API_ENDPOINTS.QUESTIONS}/${questionId}`);

      // Update local state
      const updatedQuestions = questions.filter(q => q._id !== questionId);
      setQuestions(updatedQuestions);
      setFilteredQuestions(updatedQuestions);

      setSuccessMessage("Question deleted successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);

    } catch (error) {
      console.error("Error deleting question:", error);
      setError("Failed to delete question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setQuestionText("");
    setOptions([]);
    setCorrectAnswer("");
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case "easy": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading assignments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">View Assignments</h1>
        {role && (
          <div className="text-sm text-gray-600">
            Logged in as: <span className="font-semibold">{role}</span>
            {selectedCourse && (
              <span> | Course: <span className="font-semibold">{selectedCourse}</span></span>
            )}
          </div>
        )}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Course Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select
              className="w-full p-2 border rounded-md"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">All Courses</option>
              <option value="AWS">AWS</option>
              <option value="Microsoft">Microsoft</option>
              <option value="comptia">CompTIA</option>
              <option value="PECB">PECB</option>
              <option value="Cisco">Cisco</option>
              <option value="Internal">Internal</option>
            </select>
          </div>

          {/* Sub-topic Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Sub-topic</label>
            <select
              className="w-full p-2 border rounded-md"
              value={subTopic}
              onChange={(e) => setSubTopic(e.target.value)}
            >
              <option value="">All Sub-topics</option>
              {course && courseSubTopics[course]?.map((subTopic, index) => (
                <option key={index} value={subTopic.value}>
                  {subTopic.name}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Difficulty Level</label>
            <select
              className="w-full p-2 border rounded-md"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="easy">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-medium mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 p-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{filteredQuestions.length}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {new Set(filteredQuestions.map(q => q.course)).size}
            </div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(filteredQuestions.map(q => q.subTopic)).size}
            </div>
            <div className="text-sm text-gray-600">Sub-topics</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {new Set(filteredQuestions.map(q => q.level)).size}
            </div>
            <div className="text-sm text-gray-600">Difficulty Levels</div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="bg-white rounded-lg shadow-md border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Questions ({filteredQuestions.length})</h2>
        </div>
        
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Eye className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No questions found matching your criteria</p>
          </div>
        ) : (
          <div className="divide-y">
            {filteredQuestions.map((question, index) => (
              <div key={question._id} className="p-6">
                {editingQuestion && editingQuestion._id === question._id ? (
                  // Edit Mode
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Question</label>
                      <textarea
                        className="w-full p-2 border rounded-md"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        rows="3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Options</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {options.map((option, optionIndex) => (
                          <input
                            key={optionIndex}
                            type="text"
                            className="p-2 border rounded-md"
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...options];
                              newOptions[optionIndex] = e.target.value;
                              setOptions(newOptions);
                            }}
                            placeholder={`Option ${optionIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Correct Answer</label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                      >
                        <option value="">Select Correct Answer</option>
                        {options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option || `Option ${optionIndex + 1}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdate}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                      >
                        {loading ? "Updating..." : "Update"}
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Question {index + 1}</h3>
                        <p className="text-gray-700 mb-3">{question.questionText}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {question.course}
                          </span>
                          {question.subTopic && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              {question.subTopic}
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-sm ${getLevelBadgeColor(question.level)}`}>
                            {question.level}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-600">Options:</h4>
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded-md text-sm ${
                                option === question.correctAnswer
                                  ? "bg-green-100 text-green-800 border border-green-200"
                                  : "bg-gray-50 text-gray-700"
                              }`}
                            >
                              {optionIndex + 1}. {option}
                              {option === question.correctAnswer && (
                                <span className="ml-2 text-xs font-medium">✓ Correct</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(question)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(question._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAssignments;