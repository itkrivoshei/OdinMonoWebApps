import React, { useEffect, useRef } from 'react';
import './DrumKit.scss';

type DrumKeyProps = {
  keyChar: string;
  soundName: string;
  keyCode: number;
};

const DrumKey: React.FC<DrumKeyProps> = ({ keyChar, soundName, keyCode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const keyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const playSound = (event: KeyboardEvent) => {
      if (event.keyCode !== keyCode) return;

      if (keyRef.current && audioRef.current) {
        keyRef.current.classList.add('playing');
        audioRef.current.currentTime = 0;
        try {
          audioRef.current.play();
        } catch (err) {
          console.error('Failed to play:', err);
        }
      }
    };

    window.addEventListener('keydown', playSound);

    return () => {
      window.removeEventListener('keydown', playSound);
    };
  }, [keyCode]);

  useEffect(() => {
    const removeTransition = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') return;

      const target = event.target as HTMLElement;
      target.classList.remove('playing');
    };

    if (keyRef.current) {
      keyRef.current.addEventListener('transitionend', removeTransition);
    }
  }, []);

  return (
    <>
      <div ref={keyRef} data-key={keyCode} className='key'>
        <kbd>{keyChar}</kbd>
        <span className='sound'>{soundName}</span>
      </div>
      <audio
        ref={audioRef}
        data-key={keyCode}
        src={`./DrumKit/sounds/${soundName}.wav`}
        onError={(e) => {
          const target = e.target as HTMLAudioElement;
          console.error(
            `Error playing ${target.src}: ${target.error?.message}`
          );
        }}
      ></audio>
    </>
  );
};

const DrumKit: React.FC = () => {
  return (
    <div className='drum-kit-container'>
      <DrumKey keyChar='A' soundName='clap' keyCode={65} />
      <DrumKey keyChar='S' soundName='hihat' keyCode={83} />
      <DrumKey keyChar='D' soundName='kick' keyCode={68} />
      <DrumKey keyChar='F' soundName='openhat' keyCode={70} />
      <DrumKey keyChar='G' soundName='boom' keyCode={71} />
      <DrumKey keyChar='H' soundName='ride' keyCode={72} />
      <DrumKey keyChar='J' soundName='snare' keyCode={74} />
      <DrumKey keyChar='K' soundName='tom' keyCode={75} />
      <DrumKey keyChar='L' soundName='tink' keyCode={76} />
    </div>
  );
};

export default DrumKit;
