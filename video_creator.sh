
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc

sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  


rm image*.mp4
rm image/*.ts
rm image/*.mp4
rm image/*.jpg

yt-dlp -f 22 https://www.youtube.com/watch?v=jkAcNHwM_4k -o image1.mp4

mkdir image 

ffmpeg -i image1.mp4 -vf fps=1/10 image/img%03d.jpg


rm image*.mp4

for (( i=10 ; i<=99; i++ )); 
do
    ffmpeg -framerate 30 -loop 1 -i image/img0$i.jpg -t 00:00:02 -vf format=yuv420p image/video$i.mp4
done

for (( i=10 ; i<=99; i++ )); 
do
    ffmpeg -i image/video$i.mp4  -acodec copy -vcodec copy -vbsf h264_mp4toannexb -f mpegts image/video$i.ts

done


ffmpeg -i "https://de2wa.com/video/introclick.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"

for (( f=1 ; f<=20; f++ )); 
do
rm mylist.txt 

echo "file 'introclick.ts'" >> mylist.txt

for (( i=1 ; i<=$(shuf -i 2500-3600 -n 1); i++ ));  do echo "file 'image/video$(shuf -i 10-99 -n 1).ts'" >> mylist.txt; done

ffmpeg -f concat -i mylist.txt -vcodec copy viral_movie_video$f.mp4

done

