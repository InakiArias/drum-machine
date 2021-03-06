const BUTTON_LETTERS = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const SOUND_NAMES = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open-HH",
  "Kick-n'-Hat",
  "Kick",
  "Closed-HH"
];

const SOUND_URLS = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
];

const BUTTONS_DATA = BUTTON_LETTERS.map((elem, i) => ( {
  buttonLetter: BUTTON_LETTERS[i],
  soundName: SOUND_NAMES[i],
  soundUrl: SOUND_URLS[i]
}));

export default BUTTONS_DATA;