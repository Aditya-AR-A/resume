# Portfolio Website

<div align="center">
  <img src="public/portfolio-banner.png" alt="Portfolio Banner" width="800px" />
  <p><i>[ Place a banner image showing your portfolio's hero section here - suggested size: 1600x400px ]</i></p>
</div>

A modern, interactive portfolio website showcasing my skills, projects, and professional experience as a Data Scientist and Python Developer. Built with Next.js and TypeScript, featuring interactive data visualizations and AI-powered components.

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Plotly](https://img.shields.io/badge/Plotly.js-2.0-3F4F75?style=for-the-badge&logo=plotly)](https://plotly.com/javascript/)

</div>

## 🎯 Project Highlights

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="public/screenshots/dashboard.png" alt="Interactive Dashboard" width="200px" /><br />
        <sub><b>Interactive Dashboard</b></sub>
      </td>
      <td align="center">
        <img src="public/screenshots/ml-model.png" alt="ML Model Demo" width="200px" /><br />
        <sub><b>ML Model Demo</b></sub>
      </td>
      <td align="center">
        <img src="public/screenshots/certifications.png" alt="Certification Gallery" width="200px" /><br />
        <sub><b>Certification Gallery</b></sub>
      </td>
    </tr>
  </table>
  <p><i>[ Replace these placeholder images with actual screenshots - suggested size: 400x300px each ]</i></p>
</div>

## 🚀 Features

- **Interactive Dashboard**: Real-time data visualization using Plotly.js
- **ML Model Demo**: Live loan approval prediction model
- **Project Showcase**: Dynamic loading of project components
- **Certification Gallery**: Interactive display of professional certifications
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Theme**: Automatic theme switching based on system preferences

## 🛠️ Technology Stack

<div align="center">
  <table>
    <tr>
      <th>Category</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td>Frontend Framework</td>
      <td>
        <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js" />
        <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript" />
        <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React" />
      </td>
    </tr>
    <tr>
      <td>Data Visualization</td>
      <td>
        <img src="https://img.shields.io/badge/Plotly.js-2.0-3F4F75?logo=plotly" alt="Plotly.js" />
        <img src="https://img.shields.io/badge/React--Plotly-latest-3F4F75" alt="React-Plotly" />
      </td>
    </tr>
    <tr>
      <td>Styling</td>
      <td>
        <img src="https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css" alt="TailwindCSS" />
        <img src="https://img.shields.io/badge/CSS_Modules-latest-000000" alt="CSS Modules" />
      </td>
    </tr>
    <tr>
      <td>State Management</td>
      <td>
        <img src="https://img.shields.io/badge/React_Hooks-latest-61DAFB?logo=react" alt="React Hooks" />
      </td>
    </tr>
    <tr>
      <td>Typography</td>
      <td>
        <img src="https://img.shields.io/badge/Geist-Sans%20%26%20Mono-000000" alt="Geist Fonts" />
      </td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>
        <img src="https://img.shields.io/badge/Vercel-latest-000000?logo=vercel" alt="Vercel" />
      </td>
    </tr>
  </table>
</div>

## 🏗️ Project Structure


<details>
<summary>Click to expand project structure</summary>

```
src/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable UI components
│   │   ├── About.tsx     # Professional background
│   │   ├── AIAgent.tsx   # AI integration component
│   │   ├── Contact.tsx   # Contact information
│   │   ├── InteractiveDashboard.tsx  # Data visualization
│   │   └── InteractiveMLModel.tsx    # ML model demo
│   ├── projects/         # Project showcase components
│   │   ├── items/       # Individual project components
│   │   │   ├── ChessHelper.tsx
│   │   │   ├── CopilotExtension.tsx
│   │   │   ├── GenderEmotionDetection.tsx
│   │   │   ├── LinkedInSentiment.tsx
│   │   │   └── RealEstatePrice.tsx
│   │   ├── Projects.tsx # Projects container
│   │   └── index.ts    # Project definitions
│   ├── sections/         # Main page sections
│   │   ├── Intro/      # Introduction section
│   │   ├── Jobs/       # Work experience
│   │   └── Skills/     # Technical skills
│   └── api/             # API routes
├── data/                 # Static data
│   └── certificates.json # Certification metadata
└── public/              # Static assets
    ├── Certificates/    # PDF certificates
    ├── certificate_thumbnails/ # Certificate previews
    └── screenshots/     # Project screenshots
        ├── dashboard.png
        ├── ml-model.png
        └── certifications.png
```

</details>

### 📸 Key Directories Overview

<div align="center">
  <table>
    <tr>
      <th>Directory</th>
      <th>Purpose</th>
      <th>Key Files</th>
    </tr>
    <tr>
      <td><code>components/</code></td>
      <td>Core UI Components</td>
      <td>
        <img src="public/screenshots/components.png" alt="Components" width="200px" />
        <br /><i>[Add component preview]</i>
      </td>
    </tr>
    <tr>
      <td><code>projects/</code></td>
      <td>Project Showcases</td>
      <td>
        <img src="public/screenshots/projects.png" alt="Projects" width="200px" />
        <br /><i>[Add projects preview]</i>
      </td>
    </tr>
    <tr>
      <td><code>public/</code></td>
      <td>Static Assets</td>
      <td>
        <img src="public/screenshots/assets.png" alt="Assets" width="200px" />
        <br /><i>[Add assets preview]</i>
      </td>
    </tr>
  </table>
</div>

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-AR-A/resume.git
   cd resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Key Components & Features

### 🎨 Interactive Dashboard
<div align="center">
  <img src="public/screenshots/dashboard-detail.png" alt="Dashboard Detail" width="600px" />
  <p><i>[Add detailed dashboard screenshot - suggested size: 1200x600px]</i></p>
</div>

- Real-time data visualization using Plotly.js
- Multiple chart types: line, bar, and pie charts
- Dynamic data updates
- Responsive layout
- Custom themes and styling

### 🤖 ML Model Demo
<div align="center">
  <img src="public/screenshots/ml-model-detail.png" alt="ML Model Detail" width="600px" />
  <p><i>[Add ML model interface screenshot - suggested size: 1200x600px]</i></p>
</div>

- Interactive loan approval prediction
- Real-time probability calculation
- Risk factor analysis
- Visual feedback system
- Responsive form controls

### 🎓 Certification Gallery
<div align="center">
  <img src="public/screenshots/certifications-detail.png" alt="Certifications Detail" width="600px" />
  <p><i>[Add certification gallery screenshot - suggested size: 1200x600px]</i></p>
</div>

- Dynamic certificate loading
- PDF preview integration
- Categorized display
- Search and filter capabilities
- Responsive grid layout

### 💼 Project Showcase
<div align="center">
  <img src="public/screenshots/projects-detail.png" alt="Projects Detail" width="600px" />
  <p><i>[Add projects showcase screenshot - suggested size: 1200x600px]</i></p>
</div>

Featured Projects:
1. **ChessHelper** - AI-powered chess analysis tool
2. **CopilotExtension** - VS Code extension with AI integration
3. **GenderEmotionDetection** - ML-based emotion recognition
4. **LinkedInSentiment** - Social media sentiment analysis
5. **RealEstatePrice** - Property price prediction model

## � Performance Metrics

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="public/screenshots/lighthouse.png" alt="Lighthouse Score" width="200px" />
        <br />
        <sub><b>Lighthouse Score</b></sub>
        <br />
        <i>[Add Lighthouse performance screenshot]</i>
      </td>
      <td align="center">
        <img src="public/screenshots/coverage.png" alt="Code Coverage" width="200px" />
        <br />
        <sub><b>Code Coverage</b></sub>
        <br />
        <i>[Add code coverage report]</i>
      </td>
      <td align="center">
        <img src="public/screenshots/bundle.png" alt="Bundle Size" width="200px" />
        <br />
        <sub><b>Bundle Analysis</b></sub>
        <br />
        <i>[Add bundle size analysis]</i>
      </td>
    </tr>
  </table>
</div>

## �📄 License & Contributing

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Contact & Social

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="mailto:adityaraj.anshukumar50@gmail.com">
          <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Aditya-AR-A">
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
        </a>
      </td>
      <td align="center">
        <a href="https://www.linkedin.com/in/aditya-raj-921a08352/">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
      </td>
    </tr>
  </table>
</div>

---

<div align="center">
  <sub>Built with ❤️ by Aditya Raj</sub>
  <br />
  <sub>Last updated: July 2025</sub>
</div>
