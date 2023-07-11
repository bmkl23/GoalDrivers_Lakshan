import React from 'react';
import './Booliuon.css';
import { Link } from 'react-router-dom';

const BOindone = ({ onKeepEditing, onDiscard }) => {
  return (
    <div className="discard-card">
      <div className="discard-card-header">
        <h4>Discard your Address?</h4>
      </div>
      <div className="discard-card-body">
        <p>If you have not finished your detail feilds of your address</p>
      </div>
      <div className="discard-card-footer">
        <button className="keep-editing-btn" onClick={onKeepEditing}>
          Keep Editing
        </button>
       <Link to="/"><button className="discard-btn" onClick={onDiscard}>
          Discard
        </button>
        </Link> 
      </div>
    </div>
  );
};

export default BOindone;
