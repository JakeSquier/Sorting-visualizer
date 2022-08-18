import React from 'react';
import '../styles/navbar.css'
//
class Navbar extends React.Component{

    render(){

        return(
            <div>
                <div className={this.props.state.showNav ? "navTrigger" : "navTrigger active"} onClick={this.props.handleNavToggle}>
                    <i></i><i></i><i></i>
                </div>
                <div className="nav-container" style={{marginLeft: `${this.props.state.showNav ? '-100%' : '0'}`}}>
                    <div className="sortBtnContainer">
                        <button className="sortBtn" id="bubbleSortBtn" onClick={(e)=>{
                            this.props.handleSelected(e)
                            this.props.state.currAlg = 'Bubble-Sort'
                        }}>Bubble sort</button>
                        <button className="sortBtn" id="mergeSortBtn" onClick={(e)=>{
                            this.props.state.currAlg = 'Merge-Sort'
                            this.props.handleSelected(e)
                        }}>Merge sort</button>
                        <button className="sortBtn" id="quickSortBtn" onClick={(e)=>{
                            this.props.state.currAlg = 'Quick-Sort'
                            this.props.handleSelected(e)
                        }}>Quick sort</button>
                        <button className="sortBtn" id="insertionSortBtn" onClick={(e)=>{
                            this.props.state.currAlg = 'Insertion-Sort'
                            this.props.handleSelected(e)
                        }}>Insertion sort</button>
                    </div>
                    <div className="slideContainer">
                        <input type="range" min="10" max="100" class="slider" id="myRange" onChange={this.props.changeArrSize}/>
                        <p className="slideInfo">Array size: <span className="slideVal">{this.props.state.arrSize}</span></p>
                    </div>
                    <div className="speedSliderContainer">
                        <input type='range' min={1} max={16} class="slider" id="speedSlider" onChange={this.props.changeAnimationSpeed}/>
                        <p className="slideInfo" id="speedSliderInfo">Speed: <span className="slideVal">{this.props.state.animationSpeed}</span></p>
                    </div>
                    <button className="sortBtn" id="newArrBtn" onClick={this.props.reset}>New Array</button>
                </div>
            </div>
        )
    }
}

export default Navbar;