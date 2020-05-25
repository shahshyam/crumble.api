const express = require('express');
const builder = require('xmlbuilder');
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
router.get('/api/updateribbon', (req, res) => {
    let tabId = req.query.tabId    
    if (tabId) {
        let doc = builder.create('customUI');
        doc.att('xmlns', 'http://schemas.microsoft.com/office/2009/07/customui')
            .ele('ribbon')
            .ele('tabs')
            .ele('tab')
            .att('id', 'test')
            .att('label', 'HLX Tools')
            .ele('group')
            .att('id', 'MyGroup')
            .att('label', 'Review')
            .ele('button')
            .att('id', 'audit')
            .att('label', 'Audit')
            .att('size', 'normal')
            .att('onAction', 'OnClickAction')
            .up()
        .ele('button')
            .att('id', 'impact')
            .att('label', 'Impact Analysis')
            .att('size', 'normal')
            .att('onAction', 'OnClickAction')
            .up()
        .ele('button')
            .att('id', 'comparison')
            .att('label', 'Compare workbooks')
            .att('size', 'normal')
            .att('onAction', 'OnClickAction')
            .up()
            .ele('button')
            .att('id', 'remote_command')
            .att('label', 'Remote command')
            .att('tag', 'activesheet.newworkbook')
            .att('size', 'normal')
            .att('onAction', 'OnClickAction')
            .up()
            .up()
        .ele('group')
            .att('id', 'MyGroup2')
            .att('label', 'About')
            .ele('button')
            .att('id', 'about')
            .att('label', 'About')
            .att('size', 'large')
            .att('onAction', 'OnClickAction')
        
        res.status(200);
        return res.json({ message: doc.toString({ pretty: false }) });
    } else {
        res.status(500);
        return res.json({ message: "Unable to process it" });
    }
});
module.exports = router;