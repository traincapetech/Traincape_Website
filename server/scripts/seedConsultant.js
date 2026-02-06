// server/scripts/seedConsultants.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Consultant from '../model/consultant.model.js';

dotenv.config({ path: '../.env' }); // Adjust path to find your .env

const seed = async () => {
  try { 
    // 1. Connect to Local Mongo
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/TraincapeData');
    console.log("Connected to MongoDB...");

    // 2. Clear existing (optional)
    await Consultant.deleteMany({});

    // 3. Add fresh consultants
    const consultants = [
      { name: "John (Support)", isOnline: true, activeToken: null },
      { name: "Sarah (Sales)", isOnline: true, activeToken: null },
      { name: "Tech Expert", isOnline: false, activeToken: null }
    ];

    await Consultant.insertMany(consultants);
    console.log("✅ Seeded 3 consultants successfully!");
    
    process.exit();
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
};

seed();