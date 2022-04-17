import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Settings from "./Settings";

let mapDispatchToProps = (dispatch) =>{

    return {
        // addNewDoc: (name) =>{
        //     dispatch(addNewDoc(name))
        // },
    }
}
let mapStateToProps = (state) =>{
    return {
        state: state
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);