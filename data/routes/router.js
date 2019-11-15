const express = require("express");
const router = express();
const stockInfoController = require("../controllers/controllers.js");

router.get("/stock", stockInfoController.index);
router.get("/stock/:id", stockInfoController.showId);
router.get("/stock/symbol/:symbol", stockInfoController.showSymbol);
router.get("/stock/name/:name", stockInfoController.showName);
router.get("/stock/sector/:sector", stockInfoController.showSector);
router.post("/stock", stockInfoController.create);
router.put("/stock/symbol/:symbol", stockInfoController.edit);
router.delete("/stock/:id", stockInfoController.delete);
router.delete("/stock/symbol/:symbol", stockInfoController.delete);

module.exports = router;
