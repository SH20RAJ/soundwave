# SoundWave Audio Player

SoundWave is a simple, customizable HTML5 audio player library designed to be lightweight and easy to integrate into any web project.

## Features
- Play/Pause control
- Progress bar for seeking
- Current time and duration display
- Lightweight and easy to customize

## Demo
Check out the [live demo](https://github.com/SH20RAJ/soundwave).

## Installation

Clone the repository:
```bash
git clone https://github.com/SH20RAJ/soundwave.git
```

Include the SoundWave CSS and JavaScript files in your project:

```html
<link rel="stylesheet" href="path/to/css/soundwave.css">
<script src="path/to/js/soundwave.js"></script>
```

## Usage

1. Create a container in your HTML where the audio player will be rendered:
    ```html
    <div id="audio-player-container"></div>
    ```

2. Initialize the SoundWave player with your audio file:
    ```html
    <script>
        const audioPlayer = new SoundWave({
            container: '#audio-player-container',
            audioSrc: 'path/to/your/audio/file.mp3'
        });
    </script>
    ```

## Configuration Options

The `SoundWave` class accepts the following options:

- `container`: A CSS selector for the container where the audio player will be rendered.
- `audioSrc`: The source URL of the audio file to be played.

Example:
```javascript
const audioPlayer = new SoundWave({
    container: '#audio-player-container',
    audioSrc: 'path/to/your/audio/file.mp3'
});
```

## Customization

You can customize the appearance of the SoundWave player by modifying the `soundwave.css` file. The default CSS classes are:

- `.soundwave-player`: The main container for the player.
- `.soundwave-button`: The play/pause button.
- `.soundwave-slider`: The progress bar.
- `.soundwave-timestamp`: The current time and duration display.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or suggestions, please open an issue or reach out to [SH20RAJ](https://github.com/SH20RAJ).
