import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../../config/api";

const CreateAssignment = ({ role, selectedCourse: propSelectedCourse }) => {
    const [selectedCourse, setSelectedCourse] = useState(propSelectedCourse || "");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedSubTopic, setSelectedSubTopic] = useState("");
    const [questions, setQuestions] = useState([
        { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [existingQuestions, setExistingQuestions] = useState([]);
    const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);

    // Mapping of courses to sub-topics (with name and value)
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
                name: "Microsoft 365 Associate",
                value: "Microsoft365Associate",
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
                name: "Microsoft 365",
                value: "Microsoft365",
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

    // Handle course selection
    const handleCourseChange = (e) => {
        const course = e.target.value;
        setSelectedCourse(course);
        setSelectedSubTopic(""); // Reset sub-topic when course changes
    };

    // Fetch existing questions for the selected course
    useEffect(() => {
        const fetchExistingQuestions = async () => {
            if (!selectedCourse) {
                setExistingQuestions([]);
                setIsLoadingQuestions(false);
                return;
            }
            
            try {
                setIsLoadingQuestions(true);
                const response = await axios.get(`${API_ENDPOINTS.QUESTIONS}?course=${selectedCourse}`);
                setExistingQuestions(response.data || []);
            } catch (error) {
                console.error("Error fetching existing questions:", error);
            } finally {
                setIsLoadingQuestions(false);
            }
        };

        fetchExistingQuestions();
    }, [selectedCourse]);

    // Handle sub-topic selection
    const handleSubTopicChange = (e) => {
        setSelectedSubTopic(e.target.value);
    };

    // Handle level selection
    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
    };

    // Handle question text change
    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].questionText = value;
        setQuestions(updatedQuestions);
    };

    // Handle option change
    const handleOptionChange = (index, optionIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    // Handle correct answer change
    const handleCorrectAnswerChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].correctAnswer = value;
        setQuestions(updatedQuestions);
    };

    // Handle add question
    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
        ]);
    };

    // Handle remove question
    const handleRemoveQuestion = (index) => {
        if (questions.length > 1) {
            const updatedQuestions = questions.filter((_, i) => i !== index);
            setQuestions(updatedQuestions);
        }
    };

    // Validate form
    const validateForm = () => {
        if (!selectedCourse) {
            setErrorMessage("Please select a course");
            return false;
        }
        if (!selectedSubTopic) {
            setErrorMessage("Please select a sub-topic");
            return false;
        }
        if (!selectedLevel) {
            setErrorMessage("Please select a difficulty level");
            return false;
        }

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            if (!question.questionText.trim()) {
                setErrorMessage(`Question ${i + 1} is required`);
                return false;
            }
            if (question.options.some(option => !option.trim())) {
                setErrorMessage(`All options for question ${i + 1} are required`);
                return false;
            }
            if (!question.correctAnswer) {
                setErrorMessage(`Please select correct answer for question ${i + 1}`);
                return false;
            }
        }
        return true;
    };

    // Handle form submission and API call
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous messages
        setErrorMessage("");
        setSuccessMessage("");

        // Validate form
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Loop through each question and send it to the API
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                const { questionText, options, correctAnswer } = question;

                // Prepare data to send to the backend
                const questionData = {
                    questionText,
                    course: selectedCourse,
                    subTopic: selectedSubTopic,
                    level: selectedLevel,
                    options,
                    correctAnswer,
                };

                // Post the data to the backend
                const response = await axios.post(
                    API_ENDPOINTS.ADD_QUESTION,
                    questionData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(`Question ${i + 1} added successfully:`, response.data);
            }

            // Reset form
            setSelectedLevel("");
            setSelectedSubTopic("");
            setQuestions([
                { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
            ]);

            setSuccessMessage(`Successfully created ${questions.length} question(s) for ${selectedCourse} - ${selectedSubTopic}`);

            // Refresh existing questions
            const response = await axios.get(`${API_ENDPOINTS.QUESTIONS}?course=${selectedCourse}`);
            setExistingQuestions(response.data || []);

        } catch (error) {
            console.error("Error adding question:", error);
            setErrorMessage(error.response?.data?.message || "Failed to create assignment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Create Assignment</h1>
                {role && (
                    <div className="text-sm text-gray-600">
                        Logged in as: <span className="font-semibold">{role}</span>
                        {propSelectedCourse && (
                            <span> | Pre-selected Course: <span className="font-semibold">{propSelectedCourse}</span></span>
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
            {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {errorMessage}
                </div>
            )}

            {/* Existing Questions Summary */}
            {selectedCourse && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Existing Questions Summary</h3>
                    {isLoadingQuestions ? (
                        <p className="text-blue-700">Loading existing questions...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Total Questions:</span> {existingQuestions.length}
                            </div>
                            <div>
                                <span className="font-medium">Unique Sub-topics:</span> {new Set(existingQuestions.map(q => q.subTopic)).size}
                            </div>
                            <div>
                                <span className="font-medium">Difficulty Levels:</span> {new Set(existingQuestions.map(q => q.level)).size}
                            </div>
                        </div>
                    )}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course Selection */}
                <div className="grid grid-cols-1 lg:flex gap-6">
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Select Course
                        </label>
                        <select
                            className="w-fit p-2 border rounded-md"
                            value={selectedCourse}
                            onChange={handleCourseChange}
                            required
                        >
                            <option value="">Select a Course</option>
                            <option value="AWS">AWS</option>
                            <option value="Cisco">CISCO</option>
                            <option value="comptia">CompTIA</option>
                            <option value="Microsoft">Microsoft</option>                            
                            <option value="PECB">PECB</option>
                            <option value="Internal">Internal</option>
                        </select>
                    </div>

                    {selectedCourse && (
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">
                                Select Sub-Topic
                            </label>
                            <select
                                className="p-2 border rounded-md"
                                value={selectedSubTopic}
                                onChange={handleSubTopicChange}
                                required
                            >
                                <option value="">Select a Sub-Topic</option>
                                {courseSubTopics[selectedCourse]?.map((subTopic, index) => (
                                    <option key={index} value={subTopic.value}>
                                        {subTopic.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Difficulty Level Selection */}
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Select Difficulty Level
                        </label>
                        <select
                            className="w-fit p-2 border rounded-md"
                            value={selectedLevel}
                            onChange={handleLevelChange}
                            required
                        >
                            <option value="">Select Difficulty Level</option>
                            <option value="easy">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                {/* Questions Section */}
                {questions.map((question, index) => (
                    <div key={index} className="border p-4 rounded-md space-y-4 bg-white">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Question {index + 1}</h3>
                            {questions.length > 1 && (
                                <button
                                    type="button"
                                    className="bg-red-500 px-3 py-1 text-white rounded-md text-sm hover:bg-red-600"
                                    onClick={() => handleRemoveQuestion(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                        
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Question Text
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-md"
                                value={question.questionText}
                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                placeholder="Enter your question here..."
                                rows="3"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">Options</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex items-center space-x-2">
                                        <span className="text-sm font-medium w-8">{(optionIndex + 1).toString() + '.'}</span>
                                        <input
                                            type="text"
                                            className="flex-1 p-2 border rounded-md"
                                            value={option}
                                            onChange={(e) =>
                                                handleOptionChange(index, optionIndex, e.target.value)
                                            }
                                            placeholder={`Option ${optionIndex + 1}`}
                                            required
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Correct Answer
                            </label>
                            <select
                                className="w-full p-2 border rounded-md"
                                value={question.correctAnswer}
                                onChange={(e) =>
                                    handleCorrectAnswerChange(index, e.target.value)
                                }
                                required
                            >
                                <option value="">Select Correct Answer</option>
                                {question.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option || `Option ${optionIndex + 1}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={handleAddQuestion}
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Add Another Question
                    </button>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`py-2 px-4 text-white rounded-md transition-colors ${
                            isLoading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-green-500 hover:bg-green-600'
                        }`}
                    >
                        {isLoading ? 'Creating Assignment...' : 'Submit Assignment'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;