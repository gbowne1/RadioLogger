const boom = require('@hapi/boom')
const logger = require('../../../utils/logger')
const swllogService = require('../../../services/swllog.service')

// GET all SWL logs
exports.getSWLLogs = async (req, res, next) => {
  try {
    const logs = await swllogService.getAll()
    res.status(200).json({ data: logs })
  } catch (err) {
    logger.error('Error fetching SWL logs:', err)
    next(boom.badImplementation(err.message))
  }
}

// ADD a new SWL log
exports.addSWLLog = async (req, res, next) => {
  try {
    const log = await swllogService.create(req.body)
    res.status(201).json({ data: log })
  } catch (err) {
    logger.error('Error creating SWL log:', err)
    next(boom.badRequest(err.message))
  }
}

// DELETE an SWL log
exports.deleteSWLLog = async (req, res, next) => {
  try {
    const { id } = req.params
    await swllogService.remove(id)
    res.status(200).json({ message: 'SWL log deleted' })
  } catch (err) {
    logger.error('Error deleting SWL log:', err)
    next(boom.badRequest(err.message))
  }
}
