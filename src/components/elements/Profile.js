import React from 'react'
import { connect } from 'react-redux'
import styles from './Profile.scss'
import { IndexLink } from 'react-router'

@connect(
  state => ({
    username: state.sendbird.user_name
  })
)
export default class Profile extends React.Component {

  render() {
    return (
      <nav className="text-center">
        <div className={styles.userContainer}>
          <span className={styles.user}>
            {this.props.username}
            <IndexLink to="/" className={styles.signout} />
          </span>
        </div>
      </nav>
    )
  }
}
