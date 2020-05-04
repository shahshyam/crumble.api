const express = require('express');
const router = express.Router();

router.post('/api/events', (req, res) => {
    let machineId = req.body.machineGuid;
    let eventcollection = req.body.clickItems;
    if (machineId && eventcollection) {
        if (eventcollection.length == 0) {
            res.status(400);
            return res.json({ message: "bad request format" });
        } else {
            let successIds = [];
            eventcollection.forEach(item => {
                successIds.push(item.EventId);
            });
            res.status(201);
            return res.json({ message: "The events are created", eventIds: successIds });
        }
    } else {
        res.status(500);
        return res.json({ message: "Unable to process it" });
    }
});
module.exports = router;