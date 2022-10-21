
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc


sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  

rm *.ts
rm *.mp4
yt-dlp -f best https://www.youtube.com/watch?v=h749ShyfnWE -o music.mp4
yt-dlp -f 22 https://www.youtube.com/watch?v=WQmGwmc-XUY -o intro.mp4

ffmpeg -i music.mp4  music.mp3
ffmpeg -i intro.mp4 -vcodec copy -acodec copy -vbsf h264_mp4toannexb -f mpegts intro.ts

ffmpeg -i "https://de2wa.com/video/introclick1.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"

for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i "https://de2wa.com/video/input2.mp4" -i music.mp3  -ss 00:0$(shuf -i 5-9 -n 1):00 -t 00:$(shuf -i 20-30 -n 1):00 -map 0:v -map 1:a  -f mpegts "input$i.ts"
done
for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i "intro.mp4" -t 00:00:$(shuf -i 10-19 -n 1) -vf "eq=brightness=0.02, eq=contrast=0.$(shuf -i 5-8 -n 1)" -preset slow -crf 18 -b:v $(shuf -i 3-6 -n 1).5M  -acodec copy -vcodec copy -f mpegts "intro$i.ts"
done


mkdir aajadi 

for (( i=1 ; i<=50; i++ ));  do 
ffmpeg -i "concat:intro$(shuf -i 1-10 -n 1).ts|introclick.ts|intro$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|intro$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts" -acodec copy -vcodec copy aajadi/kHGGhy$i.mp4
done

