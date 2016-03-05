import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../elements/Profile'
import TeamLogo from '../elements/TeamLogo'
import ChannelList from '../containers/ChannelList'
import ListChannelsBtn from '../elements/ListChannelsBtn'
import JoinedChannelList from '../elements/JoinedChannelList'
import IntroText from '../elements/IntroText'
import styles from './Messenger.scss'

@connect(
  state => ({
    sendbird: state.sendbird
  })
)
export default class Messenger extends Component {

  state = { showChannels: false}
  toggle() {
    this.setState({showChannels: !this.state.showChannels})
  }
  render() {
    const content = this.state.showChannels ? <ChannelList /> : null

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <TeamLogo />
          <Profile />
          <ListChannelsBtn onClick={this.toggle.bind(this)} />
          <JoinedChannelList />
        </div>
        <div className={styles.chat}>

           {content} <IntroText />
        </div>
      </div>
    )
  }
}
