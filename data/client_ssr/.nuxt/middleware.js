const middleware = {}

middleware['visitor'] = require('../middleware/visitor.js')
middleware['visitor'] = middleware['visitor'].default || middleware['visitor']

export default middleware
