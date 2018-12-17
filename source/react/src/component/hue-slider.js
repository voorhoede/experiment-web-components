import React from 'react'
import ReactWebComponent from 'react-web-component'
import PropTypes from 'prop-types'

import './hue-slider.css'

export default class HueSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: props.hue || '0',
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ hue: value })
  }

  /**
    * props is updated parsed by react-web-component just before invoking this
    * method but react doesn't detect this change to props so copy it to
    * state and use state instead.
    */
  webComponentConstructed() {
    this.setState(this.props)
  }

  render() {
    const { hue } = this.state
    const { children } = this.props

    return (
      <label className="hue-slider">
        <input type="range" min="0" max="360" value={hue} onChange={this.handleChange} />
        <output style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}>
          { children }
        </output>
      </label>
    )
  }
}

HueSlider.propTypes = {
  hue: PropTypes.string,
  children: PropTypes.node,
}

ReactWebComponent.create(<HueSlider />, 'hue-slider-react')
