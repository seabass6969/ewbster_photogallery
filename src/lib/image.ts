import { image_url_real } from './image_url'
import {getRandom} from './random'
export const getRandom_image_url = () => {
    const random = getRandom(0, image_url.length - 1)
    return image_url[random]
}
export const image_url= image_url_real