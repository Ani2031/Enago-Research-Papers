# Enago Research Papers

This is a Next.js project bootstrapped with **create-next-app**.  
The project displays research papers with details such as title, authors, journal, year, and images.  

---

## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/Ani2031/Enago-Research-Papers.git
cd Enago-Research-Papers

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

### Architecture & Decisions
Framework: Next.js.
Styling: Inline styles using SCSS.
Data Handling: Papers are fetched from a local API (fetchPapers) and rendered dynamically.
Image Handling: Next.js Image component is used for optimization and fallback handling.

### Customization & Optimization
Reusable Components: Created Card component for rendering each research paper.
Error Handling: Graceful fallback when data (e.g., image, authors, year) is missing.
Pagination: Added pagination for browsing through large sets of papers.
UI Improvements: Basic grid layout, styled selects, and buttons for navigation.
