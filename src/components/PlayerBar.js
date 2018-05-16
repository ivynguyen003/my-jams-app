import React, {Component} from 'react';

class PlayerBar extends Component {
  render () {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button className="previous" onClick={this.props.handlePrevClick} >
            <span className="ion-skip-backward"></span>
          </button>
          <button className="player-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause': 'ion-play' }></span>
          </button>
          <button className="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.currentTime}</div>
          <input 
            type="range" 
            value={(this.props.currentTime / this.props.duration) || 0}
            className="seek-bar"
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">{this.props.duration}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input type="range" value="0" className="seek-bar"/>
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    )
  }
}

export default PlayerBar;