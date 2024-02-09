const db = require('../persistence');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
    const item = {
        id: uuidv4(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    console.log("[INFO] Added todo item " + item.id + " to database: [" + req.body.name + "]");
    res.send(item);
};
