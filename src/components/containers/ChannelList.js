/* global className */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './ChannelList.scss'
import { listChannels } from '../../redux/actions/channels'

@connect(
  state => ({
    channels: state.channels
  }),
  dispatch => ({
    listChannels: () => dispatch(listChannels())
  })
)
export default class ChannelList extends Component {

  componentWillMount() {
    this.props.listChannels()
  }

  renderChannel(channel) {
    return (<div><strong> {channel.name} </strong> M:{channel.member_count}</div>)
  }

  render() {

    return (
      <div className={styles.container}>
        <div className={styles.list}>
        {
         (Object.values(this.props.channels.list) || {}).map( (channel) => this.renderChannel(channel))
          }
        </div>
      </div>
    )
  }
}
