import React, { Component } from 'react'
import Particles from 'react-particles-js'

class HandleParticles extends React.PureComponent {
    render() {
        return (
            <Particles 
              className="particles"
              params={{
                  particles: {
                      number: {
                          value: 150,
                          density: {
                              enable: true,
                              value_area: 800
                          }
                      }
                  }
              }}
            />
        )
    }
}

export default HandleParticles