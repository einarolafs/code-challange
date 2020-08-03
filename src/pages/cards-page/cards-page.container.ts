/* eslint-disable filenames/match-regex */

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { State } from '../../store/types'
import { getCards, addPage, updatePage, changeCardStatus } from '../../store/actions'
import { cardsByStatus } from '../../selectors'

import CardsPage from './cards-page'

const mapStateToProps = (state: State) => ({
  cards: cardsByStatus(state),
  dragging: state.pages.cards?.dragging
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({ getCards, addPage, updatePage, changeCardStatus }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage)
