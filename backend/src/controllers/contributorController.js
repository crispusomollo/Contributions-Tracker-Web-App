const db = require("../config/db");

// Get All Contributors
exports.getAllContributors = (req, res) => {

  const query = "SELECT * FROM contributors ORDER BY created_at DESC";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });

};

// Get Single Contributor
exports.getContributor = (req, res) => {

  const { id } = req.params;

  const query = "SELECT * FROM contributors WHERE id = ?";

  db.query(query, [id], (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(results[0]);

  });

};

// Create Contributor
exports.createContributor = (req, res) => {

  const { name, phone, email, address } = req.body;

  const query = `
    INSERT INTO contributors (name, phone, email, address)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [name, phone, email, address], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contributor created successfully"
    });

  });

};

// Update Contributor
exports.updateContributor = (req, res) => {

  const { id } = req.params;
  const { name, phone, email, address } = req.body;

  const query = `
    UPDATE contributors
    SET name=?, phone=?, email=?, address=?
    WHERE id=?
  `;

  db.query(query, [name, phone, email, address, id], (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contributor updated successfully"
    });

  });

};

// Delete Contributor
exports.deleteContributor = (req, res) => {

  const { id } = req.params;

  const query = "DELETE FROM contributors WHERE id = ?";

  db.query(query, [id], (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contributor deleted successfully"
    });

  });

};

