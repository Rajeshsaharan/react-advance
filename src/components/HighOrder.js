
import React, {Component} from "react"
const shareFunction = OriginalComp => {


    class HighOrder extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name : "rajesh"
            }
            this.myHOCfunc = this.myHOCfunc.bind(this)
        }

        myHOCfunc(){
            console.log("my any shareable function")
        }

        render() {
            //here we can access this.props.course 
            return (
                <OriginalComp anyprops = {this.myHOCfunc} name = {this.state.name}
                // to pass down other ramaining props to comp
                {...this.props}
                ></OriginalComp>
            )
        }
    }

    return HighOrder
}

export default shareFunction;