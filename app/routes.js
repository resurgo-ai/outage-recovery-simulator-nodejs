const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

router.get('/user/:userid', (req, res) => {
  const db = new sqlite3.Database(req.app.get('config').DATABASE);
  const userid = req.params.userid;

  if (!userid) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  db.get("SELECT * FROM users WHERE id = ?", [userid], (err, row) => {
    db.close();
    if (err) throw err;

    if (row) {
      res.json({ id: row.id, name: row.name, email: row.email });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

router.post('/user/', (req, res) => {
  const db = new sqlite3.Database(req.app.get('config').DATABASE);
  const data = req.body;

  db.run("INSERT INTO users (name, email) VALUES (?, ?)", [data.name, data.email], function(err) {
    db.close();
    if (err) throw err;

    res.status(201).json({ message: 'User created', id: this.lastID });
  });
});

module.exports = router;
