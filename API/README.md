# Node.js Backend
Node.js Packages Used


1. express: A minimal and flexible Node.js web application framework that provides a robust set of features    for web and mobile applications.

2. body-parser: Middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
npm install express body-parser mssql cookie-parser cors

3. mssql: Microsoft SQL Server client for Node.js, used to connect to and interact with MSSQL databases.
4. cookie-parser: Middleware to parse Cookie header and populate req.cookies with an object keyed by the cookie names.
5. cors: Middleware to enable Cross-Origin Resource Sharing (CORS) in Express.

# Api End Pooints  ----------------------
GET /api/questions - Fetch all questions.
POST /api/saveAnswer - Save user's answer.