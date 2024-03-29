import {
  SET_ARTICLE,
  SET_ARTICLES,
  SET_ARTICLE_LIST,
  SET_LOADING,
} from '../constants'

const INITIAL_STATE = {
  list: [],
  article: {},
  loading: true,
}

export default function article(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ARTICLES:
      const { list } = action.payload
      return { ...state, list }

    case SET_ARTICLE:
      const { articles } = action.payload
      return { ...state, articles }

    case SET_ARTICLE_LIST:
      const { list: articleList } = action.payload
      return { ...state, list: articleList }

    case SET_LOADING:
      const { loading } = action.payload
      return { ...state, loading }
    default:
      return state
  }
}
