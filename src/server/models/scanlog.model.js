const mongoose = require('mongoose');

const scanLogSchema = require('../schemas/scanlog.schema');

const ScanLog = mongoose.model('ScanLog', scanLogSchema);

module.exports = ScanLog;
