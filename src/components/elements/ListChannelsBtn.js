import React, { Component } from 'react'
import styles from './ListChannelsBtn.scss'

export default class ListChannelsBtn extends Component {

  render() {
    return (
      <div onClick={this.props.onClick} className={styles.button}>
        list channels
        <span className={styles.icon} />
      </div>
    )
  }
}
