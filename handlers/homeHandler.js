import { VIEWS, IMAGE_PREFIX } from '../core/constants.js'

const homeHandler = (_, res) => res.render(VIEWS.INDEX, { IMAGE_PREFIX })

export default homeHandler;