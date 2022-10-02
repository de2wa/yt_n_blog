
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc


for (( i=1 ; i<=20 ; i++ )); 
do
    ffmpeg -i "https://de2wa.com/video/intro$1.mp4"  -t 10 -crf $(( ( RANDOM % 28)  + 12 )) -b:v $(( ( RANDOM % 6)  + 2 ))  -vf "eq = brightness = 0.0$i" -vf "eq = contrast = 0.8$i"  "intro$i.mp4"
done

for (( i=0 ; i<=9 ; i++ )); 
do
    ffmpeg -ss 00:0$i:00 -to 00:3$i:00  -i "https://de2wa.com/video/input2.mp4"  -acodec copy  -vcodec copy  -f mpegts "input$i.ts"
done



ffmpeg -i "https://de2wa.com/video/introclick.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"


for (( i=1 ; i<=20 ; i++ )); 
do
    ffmpeg -i "intro$i.mp4" -acodec copy -vcodec copy -vbsf h264_mp4toannexb -f mpegts "intro$i.ts"
done

mkdir aajadi

for (( i=1 ; i<=20 ; i++ )); 
do
    ffmpeg -i "concat:intro$i.ts|introclick.ts|input$(( ( RANDOM % 9)  + 1 )).ts|input$(( ( RANDOM % 9)  + 1 )).ts|intro$(( ( RANDOM % 20)  + 1 )).ts|intro$(( ( RANDOM % 20)  + 1 )).ts|intro$(( ( RANDOM % 20)  + 1 )).ts|input$(( ( RANDOM % 9)  + 1 )).ts||input$(( ( RANDOM % 9)  + 1 )).ts|intro$(( ( RANDOM % 20)  + 1 )).ts" -acodec copy -vcodec copy  "aajadi/videofilviral$i.mp4"
done
