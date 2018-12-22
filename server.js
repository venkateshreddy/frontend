const express = require('express')
const app = express()

app.get('/home', loadStudentsHtml);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadStudentsHtml(req, res) {
    console.log(__dirname);
    res.sendFile('server_crud.html',{ root: __dirname });
}