import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class Test extends Component {
  state = {
    result: 'Sin Resultados'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
    console.error(data)
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="text-center">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}


export default QrReader;