// Import Envelopes Data
const { data } = require('../db/envelopes-db');
// Import Helper Functions
const { fetchEnvelopes, generateID, findByID } = require("../helpers/helpers");

// Retrieve all envelopes
// @path GET "http://localhost:3000/envelopes/"
const getAllEnvelopes = async (_, res) => {
    try {
        const allEnvelopes = await fetchEnvelopes(data);

        if (!allEnvelopes) {
            res.status(404).send("Error 404. Page Not Found.");
        } else {
            res.status(200).send(allEnvelopes);
        }
    } catch (e) {
        res.status(404).send(e);
    }
};

// Retrieve a single envelope by ID
// @path GET "http://localhost:3000/envelopes/:id"
const getEnvelopeByID = async (req, res) => {
    try {
        const { id } = req.params;

        const allEnvelopes = await fetchEnvelopes(data);
        const envelope = await findByID(allEnvelopes, Number(id));

        if (!envelope) {
            return res.status(404).send("Envelope does not exist.");
        } else {
            res.status(200).send(envelope);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};

// Create a new envelope
// @path POST "http://localhost:3000/envelopes"
const addNewEnvelope = async (req, res) => {
    try {
        const { title, budget } = req.body;

        if (!title) {
            return;
        }

        let allEnvelopes = await fetchEnvelopes(data);

        let id = generateID(allEnvelopes);

        let newEnvelope = {
            id,
            title,
            budget,
            used: 0,
            balance: budget
        };

        allEnvelopes.push(newEnvelope);

        res.status(201).send(newEnvelope);
    } catch (e) {
        res.status(500).send(e);
    }
};

// Update an envelope by ID
// @path GET "http://localhost:3000/envelopes/:id"
const updateEnvelopeByID = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, budget, used } = req.body;

        let allEnvelopes = await fetchEnvelopes(data);
        let envelope = await findByID(allEnvelopes, Number(id));

        if (!envelope) {
            res.status(404).send("Envelope does not exist.");
        } else {
            if (title) {
                envelope["title"] = title;
            }
            if (budget) {
                // update budget
                envelope["budget"] = budget;
                // update balance
                envelope["balance"] = budget - envelope["used"];
            }
            if (used) {
                // update used amount
                envelope["used"] = used;
                // update balance
                envelope["balance"] -= used;
            }

            res.status(201).send(envelope);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};

// Update budgets transferred from one envelope to another
// @path PUT "http://localhost:3000/envelopes/:senderID/transfer/:recieverID"
const transferEnvelopeBudget = async (req, res) => {
    try {
        const { senderID, recieverID } = req.params;
        const { budget } = req.body;

        const allEnvelopes = fetchEnvelopes(data);
        const senderEnvelope = findByID(allEnvelopes, Number(senderID));
        const recieverEnvelope = findByID(allEnvelopes, Number(recieverID));

        if (!senderEnvelope || !recieverEnvelope) {
            res.status(404).send("Envelope does not exist.");
        } else {
            // update budgets
            senderEnvelope["budget"] -= budget;
            recieverEnvelope["budget"] += budget;
            // update balances
            senderEnvelope["balance"] -= budget;
            recieverEnvelope["balance"] += budget;

            res.status(201).send(allEnvelopes);
        }
    } catch (e) {
        res.status(500).send(e);
    }
};

// Delete an envelope by ID
// @path DELETE "http://localhost:3000/envelopes/:id"
const deleteEnvelopeByID = async (req, res) => {
    try {
        const { id } = req.params;

        let allEnvelopes = await fetchEnvelopes(db);
        let envelope = await findByID(allEnvelopes, Number(id));

        if (!envelope) {
            res.status(404).send("Envelope does not exist.");
        } else {
            let i = allEnvelopes.findIndex((element) => element["id"] === Number(id));
            allEnvelopes.splice(i, 1);

            res.status(200).send(envelope);
        }
    } catch (error) {
        res.status(500).send(e);
    }
};

module.exports = {
    getAllEnvelopes,
    getEnvelopeByID,
    addNewEnvelope,
    updateEnvelopeByID,
    transferEnvelopeBudget,
    deleteEnvelopeByID
};