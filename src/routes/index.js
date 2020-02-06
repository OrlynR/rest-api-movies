const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    const example ={ titulo: "API" }
  res.json(example);
});


module.exports = router;