import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text } from '@tarojs/components'
// import { AtList, AtListItem } from 'taro-ui'

import 'taro-ui/dist/style/index.scss'
import './index.scss'

import { getArticles } from '../../store/actions'


// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }

// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
// }

// type PageOwnProps = {}

// type PageState = {}

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// interface Index {
//   props: IProps;
// }

const Index = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.article.loading)
  const myList = useSelector(state => state.article.list)

  useEffect(() => {
    dispatch(getArticles())
  }, [])
  return (
    <View>
      {/* <AtList> */}
        {
          myList.map(item => <View>{item.title}</View>)
        }
      {/* </AtList> */}
    </View>
  )
}

export default Index

