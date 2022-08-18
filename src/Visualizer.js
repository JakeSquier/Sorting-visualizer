import React, { Component} from 'react';
import Navbar from './components/NavBar';
import { bubbleSort, mergeSort, quickSort, insertionSort } from './sortingAlgorithims';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/visualizer.css'


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class Visualizer extends Component{

    state = {
        array: [],
        arrRange: 300,
        arrSize: 50,
        animationSpeed: 16,
        play: false,
        animations: [],
        currAnimations: [],
        isSorted: false,
        showNav: true,
        isSorting: false,
        currAlg: 'Bubble-Sort',
        fadeIn: false,
        cout: 0
    };

    componentDidMount() {
        this.resetArray();
        document.getElementsByClassName('.slider').value = this.state.arrSize
    }

    previousArr = []

    resetArray = (e, newArr=null) => {
        this.state.fadeIn = false
        var arr = [];
        let amt = this.state.arrSize
        if(newArr===null){
            for (let i = 0; i < amt - 1; i++){
                arr.push(this.randomIntFromInterval(10, this.state.arrRange));
            }
        } else {
            arr = newArr
        }
        console.log(arr)
        setTimeout(() => {
            const arrBars = document.getElementsByClassName('arr-bar')
            for(let i = 0; i < arrBars.length; i++){
                arrBars[i].style.backgroundColor = '#19bc8b'
            }
        }, 200)
        const progressBar = document.querySelector('#bar')
        progressBar.value = 0
        progressBar.max = arr.length
        this.previousArr = arr
        this.setState({array: arr, isSorted: false, fadeIn: true});
    }

    repeatArr = () => {
        const newArr = this.previousArr
        this.resetArray(null, newArr)

    }

    changeArrSize = (e) => {
        this.setState({arrSize: e.target.value})
        this.resetArray()
    }

    changeAnimationSpeed = (e) => {
        this.setState({animationSpeed: e.target.value})
    }

    randomIntFromInterval(min, max) {
        var _min = Math.floor(min);
        var _max = Math.ceil(max);
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    animateBubbleSort = async (e, remaining=[]) =>{
        if(!this.state.isSorted){
            this.state.isSorted = true
            this.state.isSorting = true
            let arr = [...this.state.array]
            let len = this.state.array.length;
            let animations = [];
            const progressBar = document.querySelector('#bar')
            if(remaining.length < 1){
                for(let i = 0;i < this.state.arrSize; i++){
                    bubbleSort(arr, animations, i, (i+1===arr.length));
                    arr = [...arr]  
                    progressBar.max = animations.length
                    this.state.animations = animations
                }
            } else {
                animations = remaining
                this.state.play = true
            }
            for(let i = 0; i < animations.length; i++){
                if(this.state.play === true){
                    const arrBars = document.getElementsByClassName('arr-bar');
                    var currAnime = animations[i];
                    const barOne = arrBars[currAnime[0]];
                    const barTwo = arrBars[currAnime[1]];
                    if(currAnime[2]){
                        barOne.style.backgroundColor = 'red';
                        barTwo.style.backgroundColor = 'aquamarine';
                        await sleep(this.state.animationSpeed);
                        var temp = barOne.style.height;
                        barOne.style.height = barTwo.style.height;
                        barTwo.style.height = temp;
                        barOne.style.backgroundColor = 'aquamarine';
                    } else {
                        barOne.style.backgroundColor = 'aquamarine';
                        barTwo.style.backgroundColor = 'aquamarine';
                        await sleep(i*this.state.animationSpeed);
                    }
                    progressBar.value++
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateBubbleSort, i, animations]
                } else {
                    this.state.isSorting = false
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateBubbleSort, i, animations]
                    return
                }
            }
            this.handleFinish()
        } else {
            this.setState({isSorted: false})
            this.resetArray()
            return
        } 
    }

    animateMergeSort = async (e, remaining=[], val=0) => {
        if(!this.state.isSorted){
            this.state.isSorted = true;
            this.state.isSorting = true
            var animations = []
            const progressBar = document.querySelector('#bar')
            const arrayBars = document.getElementsByClassName('arr-bar');
            if(remaining.length < 1){
                var arr = [...this.state.array]
                animations = mergeSort(arr)
                progressBar.max = animations.length
                this.state.animations = animations
            } else {
                animations = remaining
                this.state.play = true
            }
            for (let i = 0; i < animations.length; i++) {
                if(this.state.play === true){
                    if (!animations[i][2]) {
                        const barOneIdx = animations[i][0]
                        const barTwoIdx = animations[i][1]
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        var cout = val+i
                        const color = cout % 3 === 0 ? 'red' : 'aquamarine';
                        await sleep(this.state.animationSpeed*2)
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    } else {
                        await sleep(this.state.animationSpeed*2)
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }
                    progressBar.value++
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateMergeSort, i, animations]
                } else {
                    this.state.isSorting = false
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateMergeSort, i, animations]
                    return
                }
            }
            this.handleFinish()
        } else {
            this.setState({isSorted: false})
            this.resetArray()
            return
        }
    }

    animateQuickSort = async (e, remaining=[]) => {
        if(!this.state.isSorted){
            this.state.isSorted = true
            this.state.isSorting = true
            const progressBar = document.querySelector('#bar')
            var animations = [];
            if(remaining.length < 1){
                var arr = [...this.state.array]
                quickSort(arr, 0, this.state.array.length - 1, animations); 
                progressBar.max = animations.length
                this.state.animations = animations
            } else {
                animations = remaining
                this.state.play = true
            }
            for(let i = 0; i < animations.length; i++) {  
                if(this.state.play === true){
                    var animation = animations[i]  
                    const arrBars = document.getElementsByClassName('arr-bar');
                    const barOne = arrBars[animation[0]];
                    const barTwo = arrBars[animation[1]];
                    barOne.style.backgroundColor = 'red';
                    barTwo.style.backgroundColor = 'aquamarine';
                    await sleep(this.state.animationSpeed);
                    var temp = barOne.style.height;
                    barOne.style.height = barTwo.style.height;
                    barTwo.style.height = temp;
                    await sleep(4)
                    barOne.style.backgroundColor = 'aquamarine';
                    progressBar.value++
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateQuickSort, i, animations]
                } else {
                    this.state.isSorting = false
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateQuickSort, i, animations]
                    return
                }
            }
            this.handleFinish()
        } else {
            this.setState({isSorted: false})
            this.resetArray()
            return
        } 
    }

    animateInsertionSort = async (e, remaining=[]) => {
        if(!this.state.isSorted){
            this.state.isSorting = true
            this.state.isSorted = true
            var animations = []
            const progressBar = document.querySelector('#bar')
            if(remaining.length < 1){
                var arr = [...this.state.array]
                insertionSort(arr, animations)
                progressBar.max = animations.length
                this.state.animations = animations
            } else {
                animations = remaining
                this.state.play = true
            }
            for(let i = 0; i < animations.length; i++){
                if(this.state.play === true){
                    var animation = animations[i];
                    const arrBars = document.getElementsByClassName('arr-bar');
                    const barOne = arrBars[animation[0]];
                    const barTwo = arrBars[animation[1]];
                    barOne.style.backgroundColor = 'red';
                    barTwo.style.backgroundColor = 'aquamarine';
                    await sleep(this.state.animationSpeed);
                    var temp = barOne.style.height;
                    barOne.style.height = barTwo.style.height;
                    barTwo.style.height = temp;
                    await sleep(4)
                    barOne.style.backgroundColor = 'aquamarine';
                    progressBar.value++
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateInsertionSort, i, animations]
                } else {
                    this.state.isSorting = false
                    this.state.currAnimations = [[...animations.slice(i, animations.length)], this.animateInsertionSort, i, animations]
                    return
                }
            }
            this.handleFinish()
        } else {
            this.resetArray()
            this.setState({isSorted: false})
            return
        }
    }

    handleFinish = () => {
        this.setState({currAnimations: [], isSorting: false, currAlg: 'null', play: false})
    }

    handlePause = (e) => {
        var curr = this.state.play
        this.setState({play: !curr})
        if(!this.state.isSorted){
            if(this.state.currAlg === 'Bubble-Sort'){
                this.state.play = true
                this.animateBubbleSort()
            } else if(this.state.currAlg === 'Merge-Sort'){
                this.state.play = true
                this.animateMergeSort()
            } else if(this.state.currAlg === 'Quick-Sort'){
                this.state.play = true
                this.animateQuickSort()
            } else if(this.state.currAlg ==='Insertion-Sort'){
                this.state.play = true
                this.animateInsertionSort()
            } else {
                this.state.currAlg = 'null'
            }
        } else {
            if(!curr && this.state.currAnimations != []){
                var remaining = this.state.currAnimations[0]
                var func = this.state.currAnimations[1]
                var i = this.state.currAnimations[2]
                this.state.isSorted = false
                if(this.state.currAnimations[0]){
                    func(null, remaining, i)
                }
            }
        }
    }

    handleSkip = async (e) => {
        const progressBar = document.querySelector('#bar')
        if(!this.state.isSorting && this.state.currAnimations[0].length > 0 && this.state.currAlg != 'Merge-Sort' && !this.state.play){
            const arrBars = document.getElementsByClassName('arr-bar');
            var animations = this.state.currAnimations[0]
            const currSkip = animations[0]
            const barOne = arrBars[currSkip[0]]
            const barTwo = arrBars[currSkip[1]]
            barOne.style.backgroundColor = 'red'
            barTwo.style.backgroundColor = 'aquamarine'
            await sleep(this.state.animationSpeed*2)
            var temp = barOne.style.height;
            barOne.style.height = barTwo.style.height;
            barTwo.style.height = temp;
            await sleep(4)
            barOne.style.backgroundColor = 'aquamarine';
            progressBar.value++
            this.setState({currAnimations: [[...animations.slice(1, animations.length)], this.state.currAnimations[1], this.state.currAnimations[2], currSkip]})
        } else if(this.state.currAlg === 'Merge-Sort' && !this.state.play && this.state.currAnimations[0].length > 0) {
            const arrayBars = document.getElementsByClassName('arr-bar');
            const data = this.state.currAnimations
            var animations = data[0]
            const currSkip = data[0][0]
            if (!currSkip[2]) {
                const barOneIdx = currSkip[0]
                const barTwoIdx = currSkip[1]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = data[2] % 3 === 0 ? 'red' : 'aquamarine';
                await sleep(this.state.animationSpeed*2)
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            } else {
                await sleep(this.state.animationSpeed*2)
                const [barOneIdx, newHeight] = currSkip;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }
            progressBar.value++
            this.setState({currAnimations: [[...animations.slice(1, animations.length)], data[1], data[2], currSkip]})
        }
    }

    handlePrevious = async (e) => {
        const progressBar = document.querySelector('#bar')
        const arrBars = document.getElementsByClassName('arr-bar');
        if(!this.state.isSorting && this.state.currAnimations[0] && this.state.currAlg != 'Merge-Sort' && !this.state.play && this.state.currAnimations[0].length > 0) {
            var animations = this.state.animations
            var currAnime = this.state.currAnimations
            var idx = animations.length - currAnime[0].length
            var newAnimations = [...animations.slice(idx-1, animations.length)]
            console.log(newAnimations.length, animations.length)
            if(newAnimations.length === 1){
                this.setState({isSorted: false, isSorting: false})
                for(let i = 0; i < arrBars.length; i++){
                    await sleep(50)
                    arrBars[i].style.backgroundColor = '#19bc8b'
                }
                return
            }
            const barOne = arrBars[newAnimations[0][0]]
            const barTwo = arrBars[newAnimations[0][1]]
            barOne.style.backgroundColor = '#19bc8b'
            barTwo.style.backgroundColor = '#19bc8b'
            await sleep(this.state.animationSpeed*2)
            var temp = barOne.style.height;
            barOne.style.height = barTwo.style.height;
            barTwo.style.height = temp;
            await sleep(4)
            barOne.style.backgroundColor = 'aquamarine';
            progressBar.val--
            this.setState({currAnimations: [newAnimations, this.state.currAnimations[1], this.state.currAnimations[2], newAnimations[0]]})
        } else if(this.state.currAlg === 'Merge-Sort' && !this.state.play) {
            const arrayBars = document.getElementsByClassName('arr-bar');
            const data = this.state.currAnimations
            var animations = this.state.animations
            var idx = animations.length - data[0].length
            var newAnimations = [...animations.slice(idx-1, animations.length)]
            var currSkip = newAnimations[0]
            if(newAnimations.length === 1){
                this.setState({isSorted: false, isSorting: false})
                for(let i = 0; i < arrBars.length; i++){
                    await sleep(50)
                    arrBars[i].style.backgroundColor = '#19bc8b'
                }
                return
            }
            console.log(currSkip)
            if (!currSkip[2]) {
                const barOneIdx = currSkip[0]
                const barTwoIdx = currSkip[1]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = data[2] % 3 === 0 ? '#19bc8b' : '#19bc8b';
                await sleep(this.state.animationSpeed*2)
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            } else {
                await sleep(this.state.animationSpeed*2)
                const barOneIdx = currSkip[0]
                const newHeight = currSkip[3]
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }
            progressBar.value--
            this.setState({currAnimations: [newAnimations, this.state.currAnimations[1], this.state.currAnimations[2], newAnimations[0]]})
        }
    }

    handleNavToggle = (e) => {
        this.setState({showNav: !this.state.showNav})
    }
//
    handleSelected = async (e) => {
        e.target.className = `${e.target.className} selected`
    }
    
    render(){

        var playVal = this.state.play

        return(
            <div id="mainContainer">
                <Navbar state={this.state} handleSelected={this.handleSelected} handleNavToggle={this.handleNavToggle} handlePause={this.handlePause} reset={this.resetArray} bubbleSort={this.animateBubbleSort} mergeSort={this.animateMergeSort} quickSort={this.animateQuickSort}  insertionSort={this.animateInsertionSort} changeArrSize={this.changeArrSize} changeAnimationSpeed={this.changeAnimationSpeed}/>
                <div className="projectContainer">
                    <div className='visualizer-wrapper'>
                        <div className="infoContainer">
                            <p className='infoStatic'>Current-algorithim: <span className="infoDynamic">{this.state.currAlg}</span></p>
                        </div>
                        <div className="topContainer">
                            <div className="arrContainer">
                                {this.state.array.map((val, idx) => {
                                    return (
                                        <CSSTransition
                                            in={true}
                                            appear={true}
                                            timeout={1000}
                                            classNames="bar-"
                                        >
                                            <div className='arr-bar' id="show" key={idx} style={{height: `${val}px`}}/>
                                        </CSSTransition>
                                    )
                                })}
                            </div>
                            <progress className="progressBar" id='bar' value={0} max={100}/>
                        </div>
                    </div>
                    <div className="controlsContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={this.repeatArr} style={{marginTop: '-2px', marginRight: '5px'}} cursor="pointer" color="aquamarine" width='18' fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                        </svg>
                        <a onClick={this.handlePrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: '5px'}} cursor="pointer" color="aquamarine" width="52" className="previousBtn" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
                                <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"/>
                            </svg>
                        </a>
                        <a className="ppBtn" onClick={this.handlePause}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16" className='playBtn'>
                                {playVal 
                                ? <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                                :  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                }
                            </svg>
                        </a>
                        <a onClick={this.handleSkip}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: '5px'}} cursor="pointer" color="aquamarine" width="50" className="skipBtn" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
                                <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"/>
                            </svg>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={this.resetArray} style={{marginTop: '-2px', marginLeft: '5px'}} cursor="pointer" color="aquamarine" width='16' fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                        </svg>
                        <p className="animated bounce" id="playPrompt" style={{visibility: `${playVal ? 'hidden' : 'visible'}`}}>Click-me!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Visualizer;