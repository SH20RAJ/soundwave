class SoundWave {
    constructor(options) {
        this.container = document.querySelector(options.container);
        this.audioSrc = options.audioSrc;
        this.createPlayer();
    }

    createPlayer() {
        this.audio = new Audio(this.audioSrc);

        const player = document.createElement('div');
        player.classList.add('soundwave-player');

        const playButton = document.createElement('button');
        playButton.classList.add('soundwave-button');
        playButton.innerHTML = this.getIcon('play');
        playButton.addEventListener('click', () => this.togglePlay());

        const progressBar = document.createElement('input');
        progressBar.classList.add('soundwave-slider');
        progressBar.type = 'range';
        progressBar.min = 0;
        progressBar.max = 100;
        progressBar.value = 0;
        progressBar.addEventListener('input', (e) => this.seek(e.target.value));

        const timestamp = document.createElement('div');
        timestamp.classList.add('soundwave-timestamp');
        timestamp.innerHTML = '00:00';

        this.audio.addEventListener('timeupdate', () => {
            const currentTime = this.formatTime(this.audio.currentTime);
            const duration = this.formatTime(this.audio.duration);
            timestamp.innerHTML = `${currentTime} / ${duration}`;
            progressBar.value = (this.audio.currentTime / this.audio.duration) * 100;
        });

        player.appendChild(playButton);
        player.appendChild(progressBar);
        player.appendChild(timestamp);
        this.container.appendChild(player);
    }

    togglePlay() {
        if (this.audio.paused) {
            this.audio.play();
            this.container.querySelector('.soundwave-button').innerHTML = this.getIcon('pause');
        } else {
            this.audio.pause();
            this.container.querySelector('.soundwave-button').innerHTML = this.getIcon('play');
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

    getIcon(name) {
        switch (name) {
            case 'play':
                return `<img src="assets/play.svg" alt="Play">`;
            case 'pause':
                return `<img src="assets/pause.svg" alt="Pause">`;
            default:
                return '';
        }
    }
}
