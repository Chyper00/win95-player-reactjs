import React from 'react';

import {  Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import './win95.css'

const clientId = 'q241TWlfmzYAESNz2Y7GNCbSGeQ6mKL2';
const resolveUrl = 'https://soundcloud.com/superfly600/aesthetic-1-hour-vaporwave-mix';

const WindowHead = (props) => {
    return (
        <div className="windows-header">
            <div className="windows-title">                                
            <span className="cd-player"></span>CD player -  {props.title}                              
            </div> 
        </div>
    );
};

const Windown = () => {
    return (
        <div className="overlay-win"> Not Ready</div>

    );
};

const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, track ,currentTime } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div className=""><div className="center-align"><img src= 'https://cdn140.picsart.com/268237737024211.png?r1024x1024' alt =''    width="23px"/></div></div>;
  }
 

  return (
    <div>

        

      <div className="container">

      
            <br/>
            <div className="windows-box">
                <div className="windows">
                    <WindowHead title={track.title}/>
                    <div className="windows-container">
                        <ul className="windows-toolbar">  
                            <li className="toolbar-item"> <a href="!#" className="windows-link">Disc </a> </li> 
                            <li className="toolbar-item"> <a href="!#" className="windows-link">View </a></li>                            
                            <li className="toolbar-item"> <a href="!#" className="windows-link">Option </a> </li>
                            <li className="toolbar-item"> <a href="!#" className="windows-link">Help </a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div className="row">
                    <div className="col s6">
                        <div className="clock-display">
                                <span className="text-clock-display"> 
                                  <Timer  className="custom-player-timer"
                                  duration={track ? track.duration / 1000 : 0} 
                                  currentTime={currentTime} 
                                  {...props} />
                                </span>                        
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="player-control">
                                <button className="play-button" 
                                onClick={() => play()}><i class="tiny material-icons ">play_arrow</i> </button>
                                <button className="player-button" onClick={() => play()}> <i class="tiny material-icons">pause</i> </button>
                                <button className="player-button"> <i class="tiny material-icons">stop</i></button>
                                <button className="player-button"> <i class="tiny material-icons">skip_previous</i></button>
                                <button className="player-button"> <i class="tiny material-icons">fast_rewind</i></button>
                                <button className="player-button"> <i class="tiny material-icons">fast_forward</i></button>
                                <button className="player-button"> <i class="tiny material-icons">skip_next</i></button> 
                        </div>
                    </div>
                </div>


                <div className="row">
                   <div className="windows-row">
                        <div className="col s1">Title</div>
                        <div className="col s11"><div className="player-input truncate" > {track.title ? track.title : `Data or no disc  [D:]`}</div></div>
                    </div>
                    <div className="windows-row">
                        <div className="col s1">Artist</div>
                        <div className="col s11"><div className="player-input-of truncate" >Many</div></div>
                    </div> 
                    <div className="windows-row">
                        <div className="col s1">Genre</div>
                        <div className="col s11"><div className="player-input" >{track.genre} </div></div>
                    </div> 
                </div>
                <div className="row ">
                    <div className="windows-row">
                        <div className="col s6"><div className="player-input-of">Total Play: {currentTime} m:s</div></div>
                        <div className="col s6"><div className="player-input-of">Track: {track.duration} m:s</div></div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
});


class App extends React.Component {

    constructor () {
        super();
        this.state = {
            help:true
        }
    }
    render() {
        
      return <div>
          
          <CustomPlayer
            resolveUrl={resolveUrl}
            clientId={clientId}
            help = {this.state.help}
            onReady={() => {
                console.log('player url ready!');
            }} />
      </div>;
    }
  }
export default App;
