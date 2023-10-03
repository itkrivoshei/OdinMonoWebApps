import React from 'react';

interface StatusPanelProps {
  numLockFlash: boolean;
  volume: number;
  gitFlash: boolean;
}

const StatusPanel: React.FC<StatusPanelProps> = ({
  numLockFlash,
  volume,
  gitFlash,
}) => {
  return (
    <div className='statusPanel'>
      <div>
        Num
        <br />
        Lock
        <div className={`light ${numLockFlash ? 'flash' : ''}`}></div>
      </div>
      <div>
        Volume
        <div className={`light ${volume ? 'flash' : ''}`}></div>
      </div>
      <div>
        Git
        <br />
        Check
        <div className={`light ${gitFlash ? 'flash' : ''}`}></div>
      </div>
    </div>
  );
};

export default StatusPanel;
