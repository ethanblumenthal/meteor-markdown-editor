import React, { Component } from 'react'

class BinsShare extends Component {
  onShareClick = () => {
    const email = this.refs.email.value
  }

  render() {
    return (
      <footer className="bins-share">
        <div className="input-group">
          <input className="form-control" ref="email" />
          <div className="input-group-btn">
            <button className="btn btn-default" onClick={this.onShareClick}>Share Bin</button>
          </div>
        </div>
      </footer>
    )
  }
}

export default BinsShare