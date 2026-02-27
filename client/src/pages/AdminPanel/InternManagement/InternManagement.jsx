import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Search, Edit2, Trash2, X, Image as ImageIcon, Briefcase, GraduationCap, Code } from "lucide-react";
import toast from "react-hot-toast";
import API_BASE_URL from "../../../config/api"; // Assumes api base url exists like other pages

const InternManagement = () => {
    const [interns, setInterns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        college: "",
        degree: "",
        techStack: "",
        photo: null,
    });
    const [photoPreview, setPhotoPreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchInterns();
    }, []);

    const fetchInterns = async () => {
        try {
            setLoading(true);
            // Assuming server runs on the standard internal setup, typically on 8080 or port configured in API_BASE_URL
            // Just in case API_BASE_URL is relative, or defaults
            const baseUrl = API_BASE_URL || "http://localhost:3001";
            const { data } = await axios.get(`${baseUrl}/interns`);
            if (data.success) {
                setInterns(data.interns);
            }
        } catch (err) {
            console.error("Failed to fetch interns:", err);
            toast.error("Failed to fetch interns");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, photo: file }));
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.college || !formData.degree || !formData.techStack) {
            return toast.error("All text fields are required.");
        }
        if (!isEditing && !formData.photo) {
            return toast.error("Photo is required for new interns.");
        }

        setSubmitting(true);
        try {
            const baseUrl = API_BASE_URL || "http://localhost:3001";
            const submitData = new FormData();
            submitData.append("fullName", formData.fullName);
            submitData.append("college", formData.college);
            submitData.append("degree", formData.degree);
            submitData.append("techStack", formData.techStack);
            if (formData.photo) {
                submitData.append("photo", formData.photo);
            }

            if (isEditing) {
                await axios.put(`${baseUrl}/interns/${editingId}`, submitData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Intern updated successfully");
            } else {
                await axios.post(`${baseUrl}/interns`, submitData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Intern added successfully");
            }

            closeModal();
            fetchInterns();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error(error.response?.data?.message || "Operation failed.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this intern?")) return;
        try {
            const baseUrl = API_BASE_URL || "http://localhost:3001";
            await axios.delete(`${baseUrl}/interns/${id}`);
            toast.success("Intern deleted successfully");
            fetchInterns();
        } catch (err) {
            console.error("Delete error:", err);
            toast.error("Failed to delete intern.");
        }
    };

    const openAddModal = () => {
        setIsEditing(false);
        setEditingId(null);
        setFormData({ fullName: "", college: "", degree: "", techStack: "", photo: null });
        setPhotoPreview(null);
        setIsModalOpen(true);
    };

    const openEditModal = (intern) => {
        setIsEditing(true);
        setEditingId(intern._id);
        setFormData({
            fullName: intern.fullName,
            college: intern.college,
            degree: intern.degree,
            techStack: intern.techStack,
            photo: null,
        });
        const baseUrl = API_BASE_URL || "http://localhost:3001";
        setPhotoPreview(`${baseUrl}/interns/${intern._id}/photo`);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setFormData({ fullName: "", college: "", degree: "", techStack: "", photo: null });
            setPhotoPreview(null);
        }, 300);
    };

    const filteredInterns = interns.filter((i) =>
        i.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.techStack.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.college.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full p-4 sm:p-6 bg-slate-50 min-h-screen rounded-lg">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Intern Management</h1>
                        <p className="text-slate-500 text-sm mt-1">Manage intern profiles dynamically for the public site.</p>
                    </div>
                    <button
                        onClick={openAddModal}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-all font-medium shadow-md shadow-indigo-200 active:scale-95"
                    >
                        <Plus size={18} /> Add Intern
                    </button>
                </div>

                {/* Search */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, college, or tech..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all bg-white"
                    />
                </div>

                {/* Loading State or Grid */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : filteredInterns.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                        <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-700">No interns found</h3>
                        <p className="text-slate-500">Add an intern to see them listed here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredInterns.map((intern) => (
                            <div key={intern._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group relative">
                                {/* Image Section */}
                                <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
                                    <img
                                        src={`${API_BASE_URL || "http://localhost:3001"}/interns/${intern._id}/photo`}
                                        alt={intern.fullName}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=No+Photo"; }}
                                    />
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => openEditModal(intern)}
                                            className="p-2 bg-white/90 backdrop-blur rounded-full text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(intern._id)}
                                            className="p-2 bg-white/90 backdrop-blur rounded-full text-red-600 hover:bg-red-50 transition-colors shadow-sm"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="p-5 space-y-3">
                                    <h3 className="font-bold text-lg text-slate-800 line-clamp-1">{intern.fullName}</h3>
                                    <div className="space-y-2 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap size={16} className="text-slate-400 shrink-0" />
                                            <span className="line-clamp-1" title={intern.college}>{intern.college}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-slate-400 shrink-0" />
                                            <span className="line-clamp-1">{intern.degree}</span>
                                        </div>
                                        <div className="flex items-start gap-2 pt-2 border-t border-slate-50">
                                            <Code size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                                            <span className="font-medium text-indigo-900 leading-tight">
                                                {intern.techStack}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

            {/* Modal / Slider */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center p-6 border-b border-slate-100">
                            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                                {isEditing ? <Edit2 className="text-indigo-500" size={20} /> : <Plus className="text-indigo-500" size={20} />}
                                {isEditing ? "Edit Intern" : "Add New Intern"}
                            </h2>
                            <button onClick={closeModal} className="p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-5">

                            {/* Photo Upload area */}
                            <div className="flex justify-center">
                                <label className="relative cursor-pointer group w-32 h-32 rounded-full overflow-hidden border-2 border-dashed border-slate-300 hover:border-indigo-400 bg-slate-50 transition-colors">
                                    {photoPreview ? (
                                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-slate-400 group-hover:text-indigo-500">
                                            <ImageIcon size={28} className="mb-1" />
                                            <span className="text-[10px] font-medium">Upload Photo</span>
                                        </div>
                                    )}
                                    <input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} className="hidden" />

                                    {/* Overlay for change photo */}
                                    {photoPreview && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white text-xs font-medium">Change</span>
                                        </div>
                                    )}
                                </label>
                            </div>

                            {/* Text Fields */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all bg-slate-50 focus:bg-white"
                                        placeholder="e.g., John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">College/University</label>
                                    <input
                                        type="text"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all bg-slate-50 focus:bg-white"
                                        placeholder="e.g., MIT, Stanford"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Degree/Field</label>
                                    <input
                                        type="text"
                                        name="degree"
                                        value={formData.degree}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all bg-slate-50 focus:bg-white"
                                        placeholder="e.g., B.Tech Computer Science"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Tech Stack</label>
                                    <input
                                        type="text"
                                        name="techStack"
                                        value={formData.techStack}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all bg-slate-50 focus:bg-white"
                                        placeholder="e.g., React, Node.js, MongoDB"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="w-full py-2.5 rounded-xl font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-2.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 shadow-md shadow-indigo-200 transition-all"
                                >
                                    {submitting ? "Saving..." : isEditing ? "Update Intern" : "Add Intern"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InternManagement;
