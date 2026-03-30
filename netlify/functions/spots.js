import { getStore } from "@netlify/blobs";

// --- 1. Your Initial Data (from spots.json) ---
const INITIAL_DATA = {
  "exteriorLogo": {
    "name": "Exterior Logo",
    "layoutImages": ["images/2.jpg"],
    "spots": {
      "EX1": { "name": "EX1", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX2": { "name": "EX2", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX3": { "name": "EX3", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX4": { "name": "EX4", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX5": { "name": "EX5", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX6": { "name": "EX6", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX7": { "name": "EX7", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" },
      "EX8": { "name": "EX8", "size": "1920x1080px", "price": 30000, "status": "Available", "bookedBy": "" }
    }
  },
  "exteriorSticker": {
    "name": "Exterior Sticker",
    "layoutImages": ["images/exterior_sticker.jpg"],
    "spots": {
      "FST-1": { "name": "FST-1", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-2": { "name": "FST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-3": { "name": "FST-3", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-4": { "name": "FST-4", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "FST-5": { "name": "FST-5", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" }
    }
  },
  "interiorSticker": {
    "name": "Interior Sticker",
    "layoutImages": ["images/ist-1.jpg", "images/ist-2-5.jpg", "images/ist-6-8.jpg", "images/ist-9.jpg"],
    "spots": {
      "IST-1": { "name": "IST-1", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-2": { "name": "IST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-3": { "name": "IST-3", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "IST-4": { "name": "IST-4", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-5": { "name": "IST-5", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-6": { "name": "IST-6", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-7": { "name": "IST-7", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-8": { "name": "IST-8", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" },
      "IST-9": { "name": "IST-9", "size": "3m x 1.5m", "price": 35000, "status": "Available", "bookedBy": "" }
    }
  },
  "interiorLogo": {
    "name": "Interior Logo",
    "layoutImages": ["images/6.jpg", "images/11.jpg", "images/12.jpg", "images/9.jpg"],
    "spots": {
      "A1": { "name": "A1 - CPU", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A2": { "name": "A2 - CPU", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A3": { "name": "A3 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A4": { "name": "A4 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A5": { "name": "A5 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A6": { "name": "A6 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A7": { "name": "A7 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A8": { "name": "A8 - Case & Cooling", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A9": { "name": "A9 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A10": { "name": "A10 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A11": { "name": "A11 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A12": { "name": "A12 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A13": { "name": "A13 - DIY", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A14": { "name": "A14 - Gaming Gear", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A15": { "name": "A15 - Gaming Gear", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A16": { "name": "A16 - Gaming Gear", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A17": { "name": "A17 - Gaming Gear", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A18": { "name": "A18 - Gaming Gear", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A19": { "name": "A19 - Monitor", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A20": { "name": "A20 - Monitor", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A21": { "name": "A21 - Monitor", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" },
      "A22": { "name": "A22 - Monitor", "size": "3m x 1.5m", "price": 30000, "status": "Available", "bookedBy": "" }
    }
  }
};

export default async (req) => {
    try {
        const spotsStore = getStore("spots");
        
        // Try to get existing data
        let adSpots = await spotsStore.get("spots-data", { type: "json" });

        // --- 2. THE FIX: Initialize if empty! ---
        if (!adSpots) {
            console.log("Database is empty. Initializing with default data...");
            adSpots = INITIAL_DATA;
            await spotsStore.setJSON("spots-data", adSpots);
        }

        return new Response(JSON.stringify(adSpots), { 
            status: 200,
            headers: { "Content-Type": "application/json" } 
        });
    } catch (error) {
        console.error("Error in spots.js:", error);
        return new Response(JSON.stringify({ message: "Error reading data" }), { status: 500 });
    }
};