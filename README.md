Node.js Packages Used(Backend)

1. express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

2. body-parser: Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property. npm install express body-parser mssql cookie-parser cors

3. mssql: Microsoft SQL Server client for Node.js, used to connect to and interact with MSSQL databases.

4. cookie-parser: Middleware to parse Cookie header and populate req.cookies with an object keyed by the cookie names.

5. cors: Middleware to enable Cross-Origin Resource Sharing (CORS) in Express.

Api End Points ----------------------
GET /api/questions - Fetch all questions.
POST /api/saveAnswer - Save user's answer.

## Development server(FrontEnd)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Setup and Install Packages:
1. Create server.js:

Initialize Express server.
Configure database connection.
Define API endpoints for fetching questions and saving answers.

2. Setup and Install Angular CLI:
ng generate component BeginTest
ng generate component QuestionPage
ng generate component ExamResult.

3. Set Up Routing in app-routing.module.ts
4. Create API Service
5. Call The all Api
