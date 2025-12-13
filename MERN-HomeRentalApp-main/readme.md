Airbnb Clone
A full-stack Airbnb Clone web application built using the MERN stack (MongoDB, Express, React, Node.js). It replicates key features of the Airbnb platform, allowing users to browse listings, make reservations, and manage their stays seamlessly.

🚀 Features
User Authentication – Secure signup and login using JWT & bcrypt.

Property Management – Hosts can create, view, and update listings with images, prices, and descriptions.

Advanced Search & Filters – Find properties based on location, dates, and guest capacity.

Booking System – Real-time booking management with calendar integration.

Image Upload – Supports multiple image uploads via Cloudinary or Firebase storage.

Map Integration – Interactive map previews using Mapbox or Google Maps API.

Responsive UI – Fully responsive design built with React and TailwindCSS for a modern experience.

Review System – Users can rate and review properties after their stay.

Payment Integration (optional) – Integrated Stripe API for secure online payments.

🧠 Tech Stack
Layer	Technology
Frontend	React, React Router, TailwindCSS
Backend	Node.js, Express.js
Database	MongoDB with Mongoose
Authentication	JWT, bcrypt.js
Cloud Services	Cloudinary (for images), Mapbox API (for maps)
Payments	Stripe
Deployment	Render / Vercel / Netlify for frontend, Render / Railway for backend
📦 Installation
Clone the repository:

bash
git clone https://github.com/yourusername/airbnb-clone.git
Navigate into the project directory:

bash
cd airbnb-clone
Install dependencies for both frontend & backend:

bash
cd server && npm install
cd ../client && npm install
Set up environment variables (.env file):

text
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
MAPBOX_API_KEY=your_mapbox_key
STRIPE_SECRET_KEY=your_stripe_key
Run the development servers:

bash
npm run dev
The app will start at http://localhost:3000.

🖼️ Screenshots
Landing Page

Listing Details Page

Booking Page

User Dashboard

(Add your screenshots or demo GIFs here.)

📘 Project Architecture
text
airbnb-clone/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
│
├── server/                # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── server.js
│
├── .env
└── README.md
🌍 Deployment
Frontend: Deployed on Vercel

Backend: Hosted on Render or Railway

Database: MongoDB Atlas


