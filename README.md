# Course Content

The course duration will be of 9 weeks each with a 2 hour class.

**1. Kickoff, Overview, Setup and Expectations (2h)**

1.1. Presentation:
  - We will get to briefly know each other.
  - We will present the course content and an example of the final application they will achieve.
  - We will present the expectations we have of them and what they can achieve for the end of the course.
  - We will make together the necessary setup on their machine.
  
1.2. Practical:
  - Install Node.js
  - Install Angular Cli
  - Install Git
  - Install Nx
  - Install MySql Workbench
  - Install Webstorm
  
**2. Introduction into basic principles for Web Development**

2.1. Presentation:
  - Client-Server and how the communicate (HTTP, WS)
  - Application Architecture
  - Design patterns we will use in the application (e.g.: Dependency Injection)
  - JavaScript & TypeScript Introduction
  - SCSS/CSS Introduction
  - Git Basics

2.2. Practical:
  - Clone sample typescript/css applications
  

**3. Backend: Setting up the API**

3.1. Presentation:
  - Brief presentation on NX
    - Mono-repo vs Multi-repo
  - Presentation on Nest.js
  - Modules, Controllers, Services
  - Setting up OpenAPI
  
3.2. Practical:
  - Initialize application with Nx (we will have a sample in the Repository)
  - Create model schema for Questions and Answers
  - Create a CRUD Endpoints for Question
  - Create a CRUD Endpoints for Answers
  - Test the endpoints using Postman
  

**4. Backend: Connecting to a database**
 
4.1. Presentation:
  - Presentation on what is an ORM
  - Setting up the database
  - Explanation on DTO, Models and the contract between the UI and the API
  - Explain Nx internal libraries
  
4.2. Practical:
  - Connect to the database
  - Initialize Schema using TypeORM
  - Create DTO and mappers 
  - Creating a repository and using it for the API endpoints
  - Create internal library to share types with the UI
  - Test the endpoints using Postman

4.3 Homework
  - Create endpoint for retrieving the total rating of a User (All Question Rating + All Answer Rating)


**5. Backend: Authentication and authorization**

4.1. Presentation:
  - Explaining how authentication works
    - Types of authentications (Basic, JWT)
  - Explaining authorization
  - Explain what the Admin User role can do

4.2. Practical:
  - Create a register and login endpoint
  - Setting up a JWT Token authentication
    - Creating a guard for the endpoint
  - Testing Authentication through Postman and OpenApi
  - Setting up an Admin User role (Delete)
  - Finish with a filter query endpoint on topic
  
5.3 Homework
  - Create a filter query endpoint on the following: "Topic", "Title", "PostedBy"
  
**6. Frontend: Angular setup**
  - Architecture Overview (services, directives and components)
  - SPA (Single Page App) vs SSR (Server Side Rendering)
  - Create a starting point app
  - Observable vs Promise
  - Create first components and connect with the backend (HttpClient)


**7. Frontend: CRUD pages and authentication**
  - Login page
  - Reactive forms
  - Routings, guards
8. Frontend: Admin Application
  - Shared components library (we can provide a starting point)
    - understand why it's important to separate this app
  - Resource management (users, data...)
  - Security
9. Frontend: Final Application Review
  - Student Project Code Review
  - Feedback and Discussions

## Course Application

The example application will be a "Stack Overflow" variant in which you will be able to:
- Register and Authenticate
- CRUD on Questions
- CRUD on Answers
- Rating Question/Answers and counting total for a User
- Search Questions & Answers

And for the people wanting to do more:
- Badge Rewards

### Modelling

```typescript

export enum QuestionTopic {
  JavaScript = 'JavaScript',
  Java = 'Java',
  Go = 'Go',
  Rust = 'Rust',
  WebAssembly = 'WebAssembly'
}

export interface IQuestion {
  id?: string;
  title: string;
  postedBy: string;
  content: string;
  topic: string;
  rating?: number;
  creationDate: string;
}

export interface IAnswer {
  id?: string;
  parentId: string;
  postedBy: string;
  content: string;
  rating?: number;
  creationDate: string;
}

export interface IStackUser {
  id?: string;
  email: string;
  password: string;
}

```
