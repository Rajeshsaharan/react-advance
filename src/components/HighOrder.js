
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
            return (
                <OriginalComp anyprops = {this.myHOCfunc} name = {this.state.name}></OriginalComp>
            )
        }
    }

    return HighOrder
}

export default shareFunction;