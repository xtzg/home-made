import axios from 'axios'

export default async function getHitokoto() {
    const res = await axios.get('https://v1.hitokoto.cn/')
    return res.data
}
