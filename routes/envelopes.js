const express = require('express');
const envelopesRouter = express.Router();

const { getAllEnvelopes, getEnvelopeByID, addNewEnvelope, updateEnvelopeByID, deleteEnvelopeByID, transferEnvelopeBudget } = require('../controllers/envelopes');

// Retrieve all envelopes
// @path GET "http://localhost:3000/envelopes/"
envelopesRouter.get('/', getAllEnvelopes);

// Retrieve a single envelope by ID
// @path GET "http://localhost:3000/envelopes/:id"
envelopesRouter.get('/:id', getEnvelopeByID);

// Create a new envelope
// @path GET "http://localhost:3000/envelopes"
envelopesRouter.post('/', addNewEnvelope);

// Update an envelope by ID
// @path GET "http://localhost:3000/envelopes/:id"
envelopesRouter.put('/:id', updateEnvelopeByID);

// Update budgets transferred from one envelope to another
// @path PUT "http://localhost:3000/envelopes/:senderID/transfer/:recieverID"
envelopesRouter.put('/:senderID/transfer/:recieverID', transferEnvelopeBudget);

// Delete an envelope by ID
// @path DELETE "http://localhost:3000/envelopes/:id"
envelopesRouter.delete('/:id', deleteEnvelopeByID);

module.exports = envelopesRouter;