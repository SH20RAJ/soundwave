class SoundWave {
    constructor(options) {
        this.container = document.querySelector(options.container);
        this.audioSrc = options.audioSrc;
        this.height = options.height || '50px';
        this.width = options.width || '300px';
        this.svgIcons = options.svgIcons || {};
        this.showVolumeControl = options.showVolumeControl || false;
        this.showSpeedControl = options.showSpeedControl || false;
        this.showLoopControl = options.showLoopControl || false;
        this.showDownloadControl = options.showDownloadControl || false;
        this.displayRemaining = false; // Default display to current time
        this.createPlayer();
    }

    createPlayer() {
        this.audio = new Audio(this.audioSrc);

        const player = document.createElement('div');
        player.classList.add('soundwave-player');
        player.style.height = this.height;
        player.style.width = this.width;

        const playButton = document.createElement('button');
        playButton.classList.add('soundwave-button');
        playButton.classList.add('play-button');
        playButton.innerHTML = this.getIcon('play');
        playButton.addEventListener('click', () => this.togglePlay());

        const progressContainer = document.createElement('div');
        progressContainer.classList.add('soundwave-progress-container');

        const progressBar = document.createElement('div');
        progressBar.classList.add('soundwave-progress-bar');
        progressContainer.appendChild(progressBar);

        const progressSlider = document.createElement('input');
        progressSlider.classList.add('soundwave-slider');
        progressSlider.type = 'range';
        progressSlider.min = 0;
        progressSlider.max = 100;
        progressSlider.value = 0;
        progressSlider.addEventListener('input', (e) => this.seek(e.target.value));
        progressContainer.appendChild(progressSlider);

        const timestamp = document.createElement('div');
        timestamp.classList.add('soundwave-timestamp');
        timestamp.innerHTML = '00:00 / 00:00';
        timestamp.addEventListener('click', () => this.toggleTimeDisplay());

        this.audio.addEventListener('loadedmetadata', () => {
            const duration = this.formatTime(this.audio.duration);
            timestamp.innerHTML = `00:00 / ${duration}`;
        });

        this.audio.addEventListener('timeupdate', () => {
            const currentTime = this.formatTime(this.audio.currentTime);
            const duration = this.formatTime(this.audio.duration);
            const remainingTime = this.formatTime(this.audio.duration - this.audio.currentTime);
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            timestamp.innerHTML = this.displayRemaining ? `${remainingTime} / ${duration}` : `${currentTime} / ${duration}`;
            progressBar.style.width = `${progress}%`;
            progressSlider.value = progress;
        });

        player.appendChild(playButton);
        player.appendChild(progressContainer);
        player.appendChild(timestamp);

        if (this.showVolumeControl) {
            const volumeButton = document.createElement('button');
            volumeButton.classList.add('soundwave-button');
            volumeButton.classList.add('volume-button');
            volumeButton.innerHTML = this.getIcon('volume');
            volumeButton.addEventListener('click', () => this.toggleMute());
            volumeButton.addEventListener('mouseover', () => volumeSlider.style.display = 'block');
            volumeButton.addEventListener('mouseout', () => volumeSlider.style.display = 'none');

            const volumeSlider = document.createElement('input');
            volumeSlider.classList.add('soundwave-volume');
            volumeSlider.type = 'range';
            volumeSlider.min = 0;
            volumeSlider.max = 100;
            volumeSlider.value = this.audio.volume * 100;
            volumeSlider.addEventListener('input', (e) => this.audio.volume = e.target.value / 100);
            volumeButton.appendChild(volumeSlider);

            player.appendChild(volumeButton);
        }

        if (this.showSpeedControl) {
            const speedButton = document.createElement('button');
            speedButton.classList.add('soundwave-button');
            speedButton.classList.add('speed-button');
            speedButton.innerHTML = this.getIcon('speed');
            speedButton.addEventListener('click', () => speedSelector.style.display = speedSelector.style.display === 'none' ? 'block' : 'none');

            const speedSelector = document.createElement('select');
            speedSelector.classList.add('soundwave-speed-selector');
            [0.5, 1, 1.5, 2].forEach(speed => {
                const option = document.createElement('option');
                option.value = speed;
                option.text = `${speed}x`;
                speedSelector.appendChild(option);
            });
            speedSelector.value = 1;
            speedSelector.addEventListener('change', (e) => this.audio.playbackRate = e.target.value);
            speedButton.appendChild(speedSelector);

            player.appendChild(speedButton);
        }

        if (this.showLoopControl) {
            const loopButton = document.createElement('button');
            loopButton.classList.add('soundwave-button');
            loopButton.classList.add('loop-button');
            loopButton.innerHTML = this.getIcon('loop');
            loopButton.addEventListener('click', () => this.toggleLoop());
            player.appendChild(loopButton);
        }

        if (this.showDownloadControl) {
            const downloadButton = document.createElement('a');
            downloadButton.classList.add('soundwave-button');
            downloadButton.classList.add('download-button');
            downloadButton.innerHTML = this.getIcon('download');
            downloadButton.href = this.audioSrc;
            downloadButton.download = 'audio.mp3';
            player.appendChild(downloadButton);
        }

        this.container.appendChild(player);
    }

    togglePlay() {
        const playButton = this.container.querySelector('.play-button');
        if (this.audio.paused) {
            this.audio.play();
            playButton.innerHTML = this.getIcon('pause');
            playButton.classList.add('fade-in');
        } else {
            this.audio.pause();
            playButton.innerHTML = this.getIcon('play');
            playButton.classList.remove('fade-in');
        }
    }

    seek(value) {
        this.audio.currentTime = (value / 100) * this.audio.duration;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    toggleTimeDisplay() {
        this.displayRemaining = !this.displayRemaining;
    }

    toggleMute() {
        this.audio.muted = !this.audio.muted;
        const volumeButton = this.container.querySelector('.volume-button');
        volumeButton.innerHTML = this.audio.muted ? this.getIcon('mute') : this.getIcon('volume');
    }

    toggleLoop() {
        this.audio.loop = !this.audio.loop;
        const loopButton = this.container.querySelector('.loop-button');
        loopButton.classList.toggle('active', this.audio.loop);
    }

    getIcon(name) {
        const svg = this.svgIcons[name];
        if (svg) {
            return `<img src="${svg}" alt="${name}">`;
        }

        switch (name) {
            case 'play':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/play.svg" alt="Play">`;
            case 'pause':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/pause.svg" alt="Pause">`;
            case 'volume':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/volume.svg" alt="Volume">`;
            case 'mute':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/mute.svg" alt="Mute">`;
            case 'speed':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/speed.svg" alt="Speed">`;
            case 'loop':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/loop.svg" alt="Loop">`;
            case 'download':
                return `<img src="https://cdn.jsdelivr.net/gh/SH20RAJ/soundwave@latest/assets/download.svg" alt="Download">`;
            default:
                return '';
        }
    }
}
