import React, { useState } from "react";
import axios from "axios";


const CreateAssignment = () => {
    // const [assignmentTitle, setAssignmentTitle] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedSubTopic, setSelectedSubTopic] = useState(""); // Track sub-topic
    const [questions, setQuestions] = useState([
        { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);

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
            { name: "CompTIA A+", value: "CompTIAA+" }, //Name of the subtopic is the value and name is displyed on the frontend.
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
    };

    // Handle course selection
    const handleCourseChange = (e) => {
        const course = e.target.value;
        setSelectedCourse(course);
        setSelectedSubTopic(""); // Reset sub-topic when course changes
    };

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
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    // Handle form submission and API call
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Loop through each question and send it to the API
        for (let question of questions) {
            const { questionText, options, correctAnswer } = question;

            // Prepare data to send to the backend
            const questionData = {
                questionText,
                course: selectedCourse,
                subTopic: selectedSubTopic, // Send sub-topic with the question data
                level: selectedLevel,
                options,
                correctAnswer,
            };

            try {
                // Post the data to the backend
                const response = await axios.post(
                    "/questions/addQuestion",
                    questionData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log("Question added successfully:", response.data);
            } catch (error) {
                console.error("Error adding question:", error);
            }
        }

        // setSelectedCourse("");
        // setSelectedLevel("");
        // setSelectedSubTopic("");
        setQuestions([
            { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
        ]);

        // Alert user that the assignment has been created
        alert("Assignment created successfully!");
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-6">Create Assignment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course Selection */}
                <div className="grid grid-cols-1 lg:flex gap-6 ">
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
                    <div key={index} className="border p-4 rounded-md space-y-4">
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Question {index + 1}
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                value={question.questionText}
                                onChange={(e) => handleQuestionChange(index, e.target.value)}
                                placeholder="Enter question"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2">Options</label>
                            {question.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        className="w-1/2 p-2 border rounded-md"
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
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="button"
                            className="bg-red-500 px-4 py-2 text-white rounded-md"
                            onClick={() => handleRemoveQuestion(index)}
                        >
                            Remove Question
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                >
                    Add Another Question
                </button>

                <button
                    type="submit"
                    className="ml-4 py-2 px-4 bg-green-500 text-white rounded-md"
                >
                    Submit Assignment
                </button>
            </form>
        </div>
    );
};

export default CreateAssignment;