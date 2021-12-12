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
      name: '人间惊鸿客',
      id: 1475091192,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1039314,
          name: '叶里',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 94677368,
        name: '人间惊鸿客',
        picUrl:
          'https://p1.music.126.net/Ud23i1ek4UrtgO3Tq2kB-g==/109951165282438230.jpg',
        tns: [],
        pic_str: '109951165282438230',
        pic: 109951165282438220
      },
      dt: 189705,
      h: {
        br: 320000,
        fid: 0,
        size: 7590765,
        vd: -45897
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4554477,
        vd: -43310
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3036333,
        vd: -41674
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 0,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416569,
      publishTime: 1599148800000
    },
    {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 49,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900
      },
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 14026,
      rtype: 0,
      rurl: null,
      publishTime: 1231516800000
    },
    {
      name: '雅俗共赏',
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: '',
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl:
          'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800
      },
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683
    },
    {
      name: '霜雪千年',
      id: 36496389,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1132127,
          name: '萧忆情Alex',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 0,
      v: 230,
      crbt: null,
      cf: '',
      al: {
        id: 3288038,
        name: ' 热门华语281',
        picUrl:
          'https://p2.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg',
        tns: [],
        pic_str: '109951166361218466',
        pic: 109951166361218460
      },
      dt: 241085,
      h: {
        br: 320000,
        fid: 0,
        size: 9653855,
        vd: -37838
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5792330,
        vd: -37838
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3861567,
        vd: -37838
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 524416,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 230,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 5336575,
      publishTime: 1388505600004
    },
    {
      name: '麻雀',
      id: 1407551413,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 4292,
          name: '李荣浩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 7,
      crbt: null,
      cf: '',
      al: {
        id: 83878976,
        name: '麻雀',
        picUrl:
          'https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg',
        tns: [],
        pic_str: '109951165182029540',
        pic: 109951165182029540
      },
      dt: 252757,
      h: {
        br: 320000,
        fid: 0,
        size: 10112685,
        vd: -47447
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6067629,
        vd: -44879
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4045101,
        vd: -43278
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 7,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416577,
      mv: 10904989,
      publishTime: 0
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
