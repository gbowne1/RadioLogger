const boom = require('@hapi/boom')
const logger = require('../../../utils/logger')
const vhflogService = require('../../../services/vhflog.service')

// GET all VHF logs
exports.getVHFLogs = async (req, res, next) => {
  try {
    const logs = await vhflogService.getAll()
    res.status(200).json({ data: logs })
  } catch (err) {
    logger.error('Error fetching VHF logs:', err)
    next(boom.badImplementation(err.message))
  }
}

// ADD a new VHF log
exports.addVHFLog = async (req, res, next) => {
  try {
    const log = await vhflogService.create(req.body)
    res.status(201).json({ data: log })
  } catch (err) {
    logger.error('Error creating VHF log:', err)
    next(boom.badRequest(err.message))
  }
}

// DELETE a VHF log
exports.deleteVHFLog = async (req, res, next) => {
  try {
    const { id } = req.params
    await vhflogService.remove(id)
    res.status(200).json({ message: 'VHF log deleted' })
  } catch (err) {
    logger.error('Error deleting VHF log:', err)
    next(boom.badRequest(err.message))
  }
}
