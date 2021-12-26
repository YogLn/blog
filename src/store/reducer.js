import { combineReducers } from 'redux-immutable'
import { reducer as articleReducer } from '@/pages/article/store'
import { reducer as detailReducer } from '@/pages/article-detail/store';
import { reducer as photoReducer} from '@/pages/photo/store';
import { reducer as messageReducer} from '@/pages/message/store';
import { reducer as archiveReducer } from '@/pages/time/store';

const reducer = combineReducers({
  article: articleReducer,
  detail: detailReducer,
  photo: photoReducer,
  message: messageReducer,
  archive: archiveReducer
})

export default reducer
