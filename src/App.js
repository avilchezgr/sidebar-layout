import React, { Component } from 'react';
import './App.css';


class Layout extends Component {
	constructor(){
		super();
		this.state = ({showSideBar:false});
	}
	
	handleToggleSideBar =() =>{
		this.setState({showSideBar:this.state.showSideBar ? false : true });
	}
	render(){
		const {showSideBar} = this.state;
		return(
		
		<div className="layout">
			{showSideBar && (	
				<SideBar 
				onHide={this.handleToggleSideBar}
				showSideBar={showSideBar}
				/>		
			)}
				
				
			<Content 
				clase ={showSideBar ? "content notFullContent" : "content fullContent"}
				onShow={this.handleToggleSideBar}
				isSideBarVisible={this.state.showSideBar}/>
		</div>
		);
	}
	
}
class Content extends Component {
	render(){	
		return (
			<div className={this.props.clase}>
				<h2>Content</h2>
				{!this.props.isSideBarVisible &&
				<BotonHideSideBar handleToggleSideBar={this.props.onShow}>Show</BotonHideSideBar>
				}
			</div>
		);
	}

}
class SideBar extends Component {
	
	render(){
		
		return (
		<div className="sideBar">
				<h2>SideBar</h2>
		<BotonHideSideBar handleToggleSideBar={this.props.onHide}>Hide</BotonHideSideBar>
				
			</div>
		);
	}
	
}

 const BotonHideSideBar = (props) => {
	 return (
		<button type="button" onClick={props.handleToggleSideBar}>{props.children}</button>
	 );
 }

class App extends Component {
  render() {
    return (
     <Layout/>
    );
  }
}

export default App;
