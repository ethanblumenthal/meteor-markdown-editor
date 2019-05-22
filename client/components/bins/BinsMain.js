import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import BinsEditor from './BinsEditor'
import { Bins } from '../../../imports/collections/Bins'

class BinsMain extends Component {
  render() {
    return (
      <div>
        <BinsEditor bin={this.props.bin} />
      </div>
    )
  }
}

export default withTracker(props => {
  const { binId } = props.match.params
  Meteor.subscribe('bins')
  return { bin: Bins.findOne(binId) }
})(BinsMain)