import React, { useEffect, useRef } from 'react';
import './DrumKit.scss';

import clapSound from '../../assets/DrumKit/sounds/clap.wav';
import hihatSound from '../../assets/DrumKit/sounds/hihat.wav';
import kickSound from '../../assets/DrumKit/sounds/kick.wav';
import openhatSound from '../../assets/DrumKit/sounds/openhat.wav';
import boomSound from '../../assets/DrumKit/sounds/boom.wav';
import rideSound from '../../assets/DrumKit/sounds/ride.wav';
import snareSound from '../../assets/DrumKit/sounds/snare.wav';
import tomSound from '../../assets/DrumKit/sounds/tom.wav';
import tinkSound from '../../assets/DrumKit/sounds/tink.wav';

const soundMap: Record<string, string> = {
  clap: clapSound,
  hihat: hihatSound,
  kick: kickSound,
  openhat: openhatSound,
  boom: boomSound,
  ride: rideSound,
  snare: snareSound,
  tom: tomSound,
  tink: tinkSound,
};

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
        audioRef.current.play().catch((err) => {
          console.error('Failed to play:', err);
        });
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

      if (keyRef.current) {
        keyRef.current.classList.remove('playing');
      }
    };

    keyRef.current?.addEventListener('transitionend', removeTransition);
    return () => {
      keyRef.current?.removeEventListener('transitionend', removeTransition);
    };
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
        src={soundMap[soundName]}
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
