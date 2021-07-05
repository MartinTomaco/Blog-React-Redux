import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as tareasActions from "../../actions/tareasActions";

//Lo destructuro
const { traerTodas } = tareasActions;

class Tareas extends Component {
    componentDidMount() {
        this.props.traerTodas()
    }
    render() {
        console.log(this.props);
        return (
            <div>
                Tareas
            </div>
        )
    }
}

const mapStateToProps = ({tareasReducer}) => tareasReducer;

const mapDispatchToProps = {
  traerTodas,
};

export default connect(mapStateToProps,mapDispatchToProps)(Tareas);

