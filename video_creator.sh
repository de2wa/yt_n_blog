
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc


sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp  

rm *.ts
rm *.mp4
yt-dlp -f 22 https://www.youtube.com/watch?v=mfDfHAO09RY -o input1.mp4
#yt-dlp -f 22 https://www.youtube.com/watch?v=5BnfqRmzHC8 -o input1.mp4


ffmpeg -i "https://de2wa.com/video/introclick.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"

for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i "https://de2wa.com/video/input2.mp4" -ss 00:$(shuf -i 10-59 -n 1):00 -t 00:$(shuf -i 20-40 -n 1):00 -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "input$i.ts"
done
for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i "input1.mp4" -t 00:0$(shuf -i 5-9 -n 1):00 -an  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "intro$i.ts"
done


mkdir aajadi 

for (( i=1 ; i<=40; i++ ));  do 
ffmpeg -i "concat:introclick.ts|intro$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|intro$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts" -acodec copy -vcodec copy aajadi/viral_movie_video$i.mp4
done

