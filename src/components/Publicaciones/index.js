import React, { Component } from 'react'


class Publicaciones extends Component {
    render() {

        return (
            
            <div>
               {`Hola ${this.props.match.params.key}`}
            </div>
        )
    }
}

export default Publicaciones;