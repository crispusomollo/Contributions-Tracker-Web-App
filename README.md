
# Contributions Tracker Web App

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)

A simple and powerful web-based Contributions Management System designed to help 
groups, friends, or organizations track monthly contributions, generate reports, 
and export data to PDF and Excel.

--------------------------------------------------

FEATURES

Core Features
- Add contributors
- Record contributions
- Edit/Delete contributions
- View contribution history
- Filter by Month, Year, Contributor

Reporting
- Monthly reports
- Yearly reports
- Contributor reports
- Custom date filtering

Export Options
- Export to PDF
- Export to Excel
- Print-friendly reports

Dashboard
- Total contributions
- Monthly contributions
- Top contributors
- Contribution trends

--------------------------------------------------

TECH STACK

Frontend
- HTML
- CSS
- JavaScript
- Chart.js

Backend
- Node.js
- Express.js

Database
- MySQL

Reporting
- PDFKit
- ExcelJS

--------------------------------------------------

PROJECT STRUCTURE
```
contributions-system
│
├── backend
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── services
│   └── app.js
│
├── frontend
│   ├── dashboard.html
│   ├── contributors.html
│   ├── contributions.html
│   └── reports.html
│
├── README.txt
└── .gitignore
```
--------------------------------------------------

INSTALLATION

1. Clone Repository
```
git clone https://github.com/crispusomollo/Contributions-Tracker-Web-App.git

cd contributions-tracker-web-app
```
2. Install Dependencies
```
cd backend
npm install
```
3. Configure Database

Create MySQL database:
```
CREATE DATABASE contributions_db;
```
Update database credentials:
```
backend/config/db.js
```
4. Run Application
```
node app.js
```
Server runs on:
```
http://localhost:5000
```
5. Open Frontend

Open:
```
frontend/dashboard.html
```
--------------------------------------------------

API ENDPOINTS

Contributors
```
GET     /api/contributors

POST    /api/contributors

PUT     /api/contributors/:id

DELETE  /api/contributors/:id
```
Contributions
```
GET     /api/contributions

POST    /api/contributions

PUT     /api/contributions/:id

DELETE  /api/contributions/:id
```
Reports
```
GET /api/reports/monthly

GET /api/reports/yearly

GET /api/reports/contributor

GET /api/reports/export/pdf

GET /api/reports/export/excel
```
--------------------------------------------------

FUTURE ENHANCEMENTS

- User authentication
- Email notifications
- Multi-group support
- Mobile responsive UI
- Cloud deployment
- Role-based access control

--------------------------------------------------

USE CASES

- Family contribution groups
- Chamas / Savings groups
- Welfare groups
- Church contributions
- Investment groups

--------------------------------------------------

PORTFOLIO VALUE

This project demonstrates:

- Full Stack Development
- REST API Design
- MySQL Database Design
- Report Generation
- Dashboard Analytics
- Real-world Business Solution

