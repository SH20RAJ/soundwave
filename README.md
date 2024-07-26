
# SoundWave

**SoundWave** is a modern and customizable audio player library for creating sleek audio experiences on the web. With support for various controls and customization options, SoundWave is designed to be flexible and easy to use.


<p align="center">

<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@main/assets/logo.svg" width="50%">

</p>


[![Version](https://img.shields.io/github/release/SH20RAJ/soundwave.svg)](https://github.com/SH20RAJ/soundwave/releases)
[![License](https://img.shields.io/github/license/SH20RAJ/soundwave.svg)](https://opensource.org/licenses/MIT)
[![CDN](https://img.shields.io/badge/CDN-Available-brightgreen.svg)](https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@main/js/soundwave.js)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fsoundwave&labelColor=%232ccce4&countColor=%23ba68c8&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fsoundwave)
[![](https://data.jsdelivr.com/v1/package/gh/SH20RAJ/soundwave/badge)](https://www.jsdelivr.com/package/gh/SH20RAJ/soundwave)

## Preview

![SoundWave Preview](https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@main/assets/screenshot.png)

## Getting Started

### Basic Usage

To get started with SoundWave, include the CSS and JavaScript files:

#### Using CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@main/css/soundwave.min.css">
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@main/js/soundwave.min.js"></script>
```

#### Local Installation

1. Download the latest release from the [GitHub releases page](https://github.com/SH20RAJ/soundwave/releases).
2. Include the CSS and JavaScript files in your project:

```html
<link rel="stylesheet" href="path/to/soundwave.css">
<script src="path/to/soundwave.js"></script>
```

### Basic Player Setup

To initialize a basic SoundWave player, use the following JavaScript code:

```javascript
const player = new SoundWave({
    container: '#audio-player', // CSS selector for the container
    audioSrc: 'path/to/your-audio-file.mp3', // Path to your audio file
    height: '60px', // Height of the player
    width: '400px', // Width of the player
});
```

This setup creates a player with default options. The player will be added to the element with the ID `audio-player`.

---

### Adding Custom SVG Icons

To use custom SVG icons for the player controls, you can specify paths to your SVG files:

```javascript
const player = new SoundWave({
    container: '#audio-player',
    audioSrc: 'path/to/your-audio-file.mp3',
    height: '60px',
    width: '400px',
    svgIcons: {
        play: 'path/to/play.svg',
        pause: 'path/to/pause.svg',
        volume: 'path/to/volume.svg',
        mute: 'path/to/mute.svg',
        speed: 'path/to/speed.svg',
        loop: 'path/to/loop.svg',
        download: 'path/to/download.svg'
    }
});
```

This allows you to customize the icons used in the player.

---

### Showing Volume and Speed Controls

To show additional controls like volume and speed, set the respective options to `true`:

```javascript
const player = new SoundWave({
    container: '#audio-player',
    audioSrc: 'path/to/your-audio-file.mp3',
    height: '60px',
    width: '400px',
    svgIcons: {
        play: 'path/to/play.svg',
        pause: 'path/to/pause.svg',
        volume: 'path/to/volume.svg',
        mute: 'path/to/mute.svg',
        speed: 'path/to/speed.svg',
        loop: 'path/to/loop.svg',
        download: 'path/to/download.svg'
    },
    showVolumeControl: true, // Show volume control
    showSpeedControl: true, // Show playback speed control
});
```

---

### Adding Loop and Download Controls

You can also add loop and download controls:

```javascript
const player = new SoundWave({
    container: '#audio-player',
    audioSrc: 'path/to/your-audio-file.mp3',
    height: '60px',
    width: '400px',
    svgIcons: {
        play: 'path/to/play.svg',
        pause: 'path/to/pause.svg',
        volume: 'path/to/volume.svg',
        mute: 'path/to/mute.svg',
        speed: 'path/to/speed.svg',
        loop: 'path/to/loop.svg',
        download: 'path/to/download.svg'
    },
    showVolumeControl: true,
    showSpeedControl: true,
    showLoopControl: true, // Show loop control
    showDownloadControl: true // Show download control
});
```

---

### Full Example

Here’s the complete configuration with all options enabled:

```javascript
const player = new SoundWave({
    container: '#audio-player',
    audioSrc: 'path/to/your-audio-file.mp3',
    height: '60px',
    width: '400px',
    svgIcons: {
        play: 'path/to/play.svg',
        pause: 'path/to/pause.svg',
        volume: 'path/to/volume.svg',
        mute: 'path/to/mute.svg',
        speed: 'path/to/speed.svg',
        loop: 'path/to/loop.svg',
        download: 'path/to/download.svg'
    },
    showVolumeControl: true, // Show volume control
    showSpeedControl: true, // Show playback speed control
    showLoopControl: true, // Show loop control
    showDownloadControl: true // Show download control
});
```

---

## Customization

Customize the appearance of the player using CSS variables. Here’s an example of how to adjust colors and sizes:

```css
:root {
    --player-bg-color: #fff;
    --player-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    --button-size: 24px;
    --button-hover-bg: #e0e0e0;
    --button-active-bg: #d0d0d0;
    --progress-bg: #eee;
    --progress-bar-color: #007bff;
    --slider-thumb-color: #007bff;
    --timestamp-color: #333;
    --volume-slider-bg: #ddd;
    --volume-slider-thumb-color: #007bff;
    --speed-selector-bg: #fff;
    --loop-color: #007bff; /* Default loop icon color */
}
```

## Contributing

If you have any issues or suggestions, feel free to [open an issue](https://github.com/SH20RAJ/soundwave/issues) or submit a pull request on GitHub.

## License

SoundWave is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](https://github.com/SH20RAJ/soundwave/blob/main/LICENSE) file for details.

