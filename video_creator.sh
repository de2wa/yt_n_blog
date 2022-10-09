
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc

#sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
#sudo chmod a+rx /usr/local/bin/yt-dlp  


#yt-dlp -f 22 https://www.youtube.com/watch?v=jkAcNHwM_4k -o image1.mp4

ffmpeg -i "https://de2wa.com/video/introclick.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"
ffmpeg -i "https://de2wa.com/video/input.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "input.ts"

for (( f=1 ; f<=40; f++ )); 
do
ffmpeg -i "https://de2wa.com/video/intro$f.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "intro$f.ts"
done

for (( i=1 ; i<=30; i++ ));  do 
ffmpeg -i "concat:intro$$(shuf -i 1-40 -n 1).ts|introclick.ts|input.ts|intro$$(shuf -i 1-30 -n 1).ts" -vcodec copy viral_movie_video$f.mp4
done

