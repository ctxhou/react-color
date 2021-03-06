'use strict'

import { React, TestUtils, expect, chai, spies, defaultProps } from '../config'

import { Compact } from '../../src/components/compact/Compact'

let props

describe('Compact', () => {

  beforeEach(() => {
    props = defaultProps
  })

  it('should be able to take custom swatches', () => {
    const CompactComponent = TestUtils.renderIntoDocument(<Compact {...props} colors={['#fff', '#999', '#222']} />)
    let colors = CompactComponent.refs.colors._reactInternalComponent._renderedChildren
    let colorCount = 0
    for (var color in colors) {
      colorCount += 1
    }

    expect(CompactComponent.props.colors).to.exist
    expect(colorCount).to.equal(4)
  })

  it('should pass up data on change', () => {
    props.onChange = chai.spy((data) => {
      expect(data.hex).to.eql('#333')
    })
    const CompactComponent = TestUtils.renderIntoDocument(<Compact {...props} colors={['#fff', '#999', '#222']} />)
    CompactComponent.handleChange({ hex: '#333' })
    expect(props.onChange).to.have.been.called
  })
})
