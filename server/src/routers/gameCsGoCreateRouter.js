const router = require('express').Router();
const { Product } = require('../../db/models');

router.post('/newLot/csgo/createAcc', async (req, res) => {
  try {
    const {
      name, price, GameId, CategoryId, image, description,
    } = req.body;
    const createAccCsGo = await Product.create({
      name, price, GameId, CategoryId, image, description,
    });
    res.json(createAccCsGo);
  } catch (error) {
    console.log(error);
  }
});

router.post('/newLot/csgo/servicesCreate', async (req, res) => {
  try {
    const {
      name, price, GameId, CategoryId, image, description,
    } = req.body;
    const createAccCsGo = await Product.create({
      name, price, GameId, CategoryId, image, description,
    });
    res.json(createAccCsGo);
  } catch (error) {
    console.log(error);
  }
});

router.post('/newLot/csgo/skinsCreate', async (req, res) => {
  try {
    const {
      name, price, GameId, CategoryId, image, description,
    } = req.body;
    const createAccCsGo = await Product.create({
      name, price, GameId, CategoryId, image, description,
    });
    res.json(createAccCsGo);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;