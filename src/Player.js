const WindowHead = (props) => {
    return (
        <div className="windows-header">
            <div className="windows-title">                                
            <span className="cd-player"></span>CD player -  {props.title}                              
            </div> 
        </div>
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
    return <div className=""><div className="center-align"><img src= 'https://cdn140.picsart.com/268237737024211.png?r1024x1024' alt =''    width="60px"/></div></div>;
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
                                onClick={() => play()}>&#9658;</button>
                                <button className="player-button" onClick={() => play()}> &#10074;&#10074;</button>
                                <button className="player-button"> &#9724;</button>
                                <button className="player-button"> &#x23EE;</button>
                                <button className="player-button"> &#x23F4;</button>
                                <button className="player-button"> &#x23F5;</button>
                                <button className="player-button"> &#x23ED;</button> 
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
                        <div className="col s11"><div className="player-input-of truncate" >{track.tag_list.split(' ')[0]}</div></div>
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