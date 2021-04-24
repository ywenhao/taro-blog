import Taro from '@tarojs/taro'

// interface AxiosTypes {
//   (
//     url: string,
//     params?: string | number
//   ): string | object | []
// }

async function Axios(url: string, param?: any) {
  const params = {
    url,
  }
  if (param) params['data'] = param
  const res = await Taro.request({...params})
  return res
}

export default Axios
