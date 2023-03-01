# Course Content

The course duration will be of 9 weeks each with a 2 hour class.

**1. Kickoff, Overview, Setup and Expectations (2h)**

- 1.1. Presentation:
  - We will get to briefly know each other.
  - We will present the course content and an example of the final application they will achieve.
  - We will present the expectations we have of them and what they can achieve for the end of the course.
  - We will make together the necessary setup on their machine.
  
- 1.2. Practical:
  - Install Node.js
  - Install Angular Cli
  - Install Git
  - Install Nx
  - Install MySql Workbench
  - Install Webstorm
  - Install Postman
  
**2. Introduction into basic principles for Web Development**

- 2.1. Presentation:
  - Client-Server and how the communicate (HTTP, WS)
  - Application Architecture
  - Promises
  - Design patterns we will use in the application (e.g.: Dependency Injection)
  - JavaScript & TypeScript Introduction
  - SCSS/CSS Introduction
  - Git Basics

- 2.2. Practical:
  - Clone sample typescript/css applications
  

**3. Backend: Setting up the API**

- 3.0. Commands
- Run `npx create-nx-workspace@15.5.0 course-project`
  - Select `integrated`
  - Select `apps`
- Run `cd ./course-project`
- Run `npm install -D @nrwl/nest`
- Run `npm install -D @nrwl/angular`
- Run `npx nx g @nrwl/nest:app api`
- Run `npx nx g @nrwl/angular:app ui`
  - Select `Which stylesheet format would you like to use` => `.scss`
  - Select `Would you like to configure routing for this application?` => `No` (false)
- Add the following `scripts` to `package.json`
  - `nx serve --project=api`
  - `nx serve --project=ui`


- 3.1. Presentation:
  - Brief presentation on NX
    - Mono-repo vs Multi-repo
  - Presentation on Nest.js
  - Explanation on DTO, Models, Mappers
  - Modules, Controllers, Services
  - Setting up OpenAPI
  
- 3.2. Practical:
  - Initialize application with Nx (we will have a sample in the Repository)
  - Create model schema for Questions and Answers
  - Create a CRUD Endpoints for Question
  - Create a CRUD Endpoints for Answers
  - Test the endpoints using Postman

- 3.3. Homework
  - Create a module for the Users having the following:
    - A User model
    - Dtos for UserDto, RegisterUserDto, LoginUserDto
      - Add description for Swagger for the dto's 
    - A Mapper mapping a UserModel to UserDto
    - A service with the following methods: `registerUser`, `getUserById`, `getUserByEmail`, `checkLoginCredentials` 

**4. Backend: Connecting to a database**

- 4.0 Commands
  - Run `npm install @nestjs/typeorm typeorm pg`
  - Run `npm install @nestjs/config`
  - Create env file
  - Run `npm install bcrypt`
  - Run `npm install -D @types/bcrypt`
  - Run `npm install dayjs`
  
- 4.1. Presentation:
  - Presentation on what is an ORM
  - Setting up the database
  - Explanation on the contract between the UI and the API
  
- 4.2. Practical:
  - Connect to the database
    - Use `TypeORM.forRootAsync` and `ConfigService` to establish connection
  - Initialize Schema using TypeORM
    - Annotate with `@Entity` and `@Column` the UserModel
    - Implement UsersService and hash passowrd on registration
    - Add a Controller Service for Users (`getUserById`, `getUsers`)
    - Test the controller
  - Create more specific DTO and mappers
    - Add `CreateAnswerDto`, `UpdateAnswerDto`, `CreateQuestionDto`, `UpdateQuestionDto` and a new enum for `RatingUpdateType`
      - Update mappers for the new DTO and service
      - Create new methods (controller/service) for updating rating
  - Initialize schema for the Question and Answers
    - Link Question and Answers through a `one-to-many` to the `User` and between themselves
      - We will need to annotate with `ManyToOne` and `OneToMany` in both sides
    - Implement the services for Question and Answers
  - Test the endpoints using Postman

4.3 Homework
  - Create endpoint for retrieving the total rating of a User (All Question Rating + All Answer Rating)
  - Implement `class-validator` to validate the dtos


**5. Backend: Authentication and authorization**

- 5.0 Commands
  - Run `npm install --save @nestjs/passport passport passport-local`
  - Run `npm install --save-dev @types/passport-local`
  - Run `npm install --save @nestjs/jwt passport-jwt`
  - Run `npm install --save-dev @types/passport-jwt`
  
- 5.1. Presentation:
  - Explaining how authentication works
    - Types of authentications (Basic, JWT)
  - Explaining authorization
  - Explain what the Admin User role can do

- 5.2. Practical:
  - Create a auth module
    - Create a register and login endpoint
    - Import PassportModule
    - Create AuthService to validate
  - Setting up a Local Login
    - Move register endpoint to auth module
    - Create `LocalAuthGuard` and `LocalAuthStrategy`
    - Add `LocalAuthGuard` to the `/login` endpoint
  - Setting up a JWT Token authentication
    - Import JwtModule and import secret and expiration time through the ConfigService
    - Create types for JwtPayload and JwtToken
    - Creating a `JwtStrategy` and `JwtGuard`
    - Add JwtGuard to UsersController and QuestionManagementController
  - Add OpenAPI support for authentication
    - Tag secured controllers with ApiBearerAuth
    - In `main.ts` set addBearerAuth on swaggerConfig
  - Testing Authentication through Postman and OpenApi
  - Setting up an Admin User role (Delete)
  
- 5.3 Homework
  - Create a filter query endpoint on the following: "Topic", "Title", "PostedBy"
  
**6. Frontend: Angular setup**

- 6.1. Presentation:
  - Architecture Overview (services, directives and components)
  - SPA (Single Page App) vs SSR (Server Side Rendering)
  - Observable vs Promise
  - Reactive forms

- 6.2. Practical:
  - Create a starting point app
  - Create first components and connect with the backend (HttpClient)
    - **Disable the BE guard until you have Authentication**
  - Create Question Form
  - Create Answer Form

- 6.3. Homework:  
  - Perform Update on Question/Answer
  - Perform Delete on Question/Answer
  
**7. Frontend: CRUD pages and authentication**

- 7.1. Presentation:
  - Login from the Client Perspective
    - **Add back the BE guard for Authentication**
  - Routings, guards

- 7.2. Practical:
  - Create Login page / Register Page
  - Create List page for Question
  - Create View Question & its Answers

- 7.3. Homework:  
  - Filter on question based on the following: "Topic", "Title", "PostedBy"
  
**8. Frontend: Admin Application**
  - Shared components library (we can provide a starting point)
    - understand why it's important to separate this app
  - Resource management (users, data...)
  - Security
**9. Frontend: Final Application Review**
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

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  roles: UserRole[];
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

```
