const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import cors

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors()); // Use cors middleware

// Configure database connection
const dbConfig = {
    user: 'examtestportal_user',
    password: '91yY4xk0*',
    server: 'P3NWPLSK12SQL-v07.shr.prod.phx3.secureserver.net',
    database: 'ExamTestPortal',
    options: {
        encrypt: false,
        trustServerCertificate: false,
    },
};
sql.connect(dbConfig)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch(err => {
        console.log('Database connection failed', err);
    });


// Get questions
app.get('/api/questions', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Questions');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Save user answers
app.post('/api/saveAnswer', async (req, res) => {
    const { email, questionId, answer } = req.body;
    try {
        const query = `INSERT INTO UserAnswers (Email, QuestionID, Answer) VALUES ('${email}', ${questionId}, '${answer}')`;
        await sql.query(query);
        res.send('Answer saved');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
