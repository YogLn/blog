import { Map } from 'immutable'
import * as actionTypes from './constants'

const initState = Map({
  articleList: [],
  total: 0,
  labelList: [],
  userInfo: {},
  hotList: [],
  playList: [
    {
      name: '霜雪千年',
      id: 36496389,
      ar: [
        {
          id: 1132127,
          name: '萧忆情Alex',
          tns: [],
          alias: []
        }
      ],
      al: {
        id: 3288038,
        name: ' 热门华语281',
        picUrl:
          'https://p2.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg',
        tns: [],
        pic_str: '109951166361218466',
        pic: 109951166361218460
      },
    },
    {
      name: '有何不可',
      id: 167876,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212
      },
    },
    {
      name: '雅俗共赏',
      id: 411214279,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl:
          'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764
      },
    },
    {
      name: '麻雀',
      id: 1407551413,
      ar: [
        {
          id: 4292,
          name: '李荣浩',
          tns: [],
          alias: []
        }
      ],
      al: {
        id: 83878976,
        name: '麻雀',
        picUrl:
          'https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg',
        tns: [],
        pic_str: '109951165182029540',
        pic: 109951165182029540
      },
    },
    {
      name: '消愁',
      id: 569200213,
      ar: [
        {
          id: 12138269,
          name: '毛不易',
          tns: [],
          alias: []
        }
      ],
      al: {
        id: 39483040,
        name: '平凡的一天',
        picUrl:
          'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
        tns: [],
        pic_str: '109951163350929740',
        pic: 109951163350929740
      },
    }
  ]
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set('articleList', action.articleList)
    case actionTypes.CHANGE_ARTICLE_TOTAL:
      return state.set('total', action.total)
    case actionTypes.CHANGE_LABELS_LIST:
      return state.set('labelList', action.labelList)
    case actionTypes.CHANGE_USER_INFO:
      return state.set('userInfo', action.userInfo)
    case actionTypes.CHANGE_HOT_LIST:
      return state.set('hotList', action.hotList)
    default:
      return state
  }
}

export default reducer
