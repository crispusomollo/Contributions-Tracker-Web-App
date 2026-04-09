const express = require("express");
const router = express.Router();

const contributorController = require("../controllers/contributorController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, contributorController.getAllContributors);

router.get("/:id", authMiddleware, contributorController.getContributor);

router.post("/", authMiddleware, contributorController.createContributor);

router.put("/:id", authMiddleware, contributorController.updateContributor);

router.delete("/:id", authMiddleware, contributorController.deleteContributor);

module.exports = router;
