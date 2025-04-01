# Frontend Mytia

A React-based frontend application for managing and searching movies. This project is Dockerized and uses PrimeReact for UI components.

---

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
  - [Using Docker](#using-docker)
  - [Without Docker](#without-docker)
- [Routing](#routing)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features
- Search for movies using an external API.
- Pagination for search results.
- Responsive design using PrimeReact and PrimeFlex.
- Dockerized for easy deployment.

---

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frontend-mytia.git
   cd frontend-mytia

2. Install dependecias
    yarn install

3. Create a .env file in the root directory and add the following environment variables:

  VITE_API_KEY=your_api_key
  VITE_API_SEARCH=https://api.example.com/search

Running the Application
  Using Docker
  1. Build and run the Docker container:
      docker-compose up --build

  2. OpenAccess the application in your browser at:
     http://localhost:3000/

Without Docker
  1. Start the development server:
    yarn run dev

  2. Open the application in your browser at:
     http://localhost:3000/


Routing
The application uses react-router-dom for routing. Below are the main routes:

  1. Home Page (/):
     Displays the main menu and navigation options.
  2. Search Page (/search/?q=<query>):
    Displays search results for movies based on the query parameter q.
    Example: /search/?q=Inception