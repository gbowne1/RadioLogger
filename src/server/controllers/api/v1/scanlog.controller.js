const boom = require('@hapi/boom')
const logger = require('../../../utils/logger')
const scanlogService = require('../../../services/scanlog.service')

exports.getScanLogs = async (req, res, next) => {
  try {
    const logs = await scanlogService.getAll()
    res.status(200).json({ data: logs })
  } catch (err) {
    logger.error('Error fetching scan logs:', err)
    next(boom.badImplementation(err.message))
  }
}

exports.addScanLog = async (req, res, next) => {
  try {
    const log = await scanlogService.create(req.body)
    res.status(201).json({ data: log })
  } catch (err) {
    logger.error('Error creating scan log:', err)
    next(boom.badRequest(err.message))
  }
}
