const express = require('express');
const router = express.Router();

router.post('/api/events', (req, res) => {
    let id = req.body.EventId;
    let createdAt = req.body.CreatedAt;
    let name = req.body.Name;
    if (id && createdAt && name) {
        res.status(200);
        return res.json({ message: "event is created", eventId: id });
    } else {
        res.status(500);
        return res.json({ message: "Invalid data is passed" });
    }
});
module.exports = router;