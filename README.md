### adaptive bitrate video on demand

#### Requirements
- FFMPEG
- Nodejs

- install `ffmpeg`
```shell
sudo apt update
sudo apt install ffmpeg
```

- start FFMPEG transcode process that generates HLS files and playlists for four different video sizes (360p, 480p, 720p, 1080p). You can download mp4 example video here https://www.videezy.com/abstract/19648-clock-countdown-ticking-midnight-20-seconds-with-black-background
```shell
./hls jam.mp4 jam
```

- start Nodejs server
```shell
npm start
```

- visit http://localhost:3000/

- simulate changing bandwidth by changing throttling in developer tools