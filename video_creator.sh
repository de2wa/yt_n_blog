
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc


for (( i=1 ; i<=20 ; i++ )); 
do
    ffmpeg -i "https://de2wa.com/video/intro$1.mp4"  -t 10 -crf $(( ( RANDOM % 28)  + 12 )) -b:v $(( ( RANDOM % 6)  + 2 ))  -vf "eq = brightness = 0.0$i" -vf "eq = contrast = 0.8$i"  "intro$i.mp4"
done


==============================
for (( i=1 ; i<=10 ; i++ )); 
do
    ffmpeg  -i "https://de2wa.com/video/intro.mp4"  -acodec copy  -vcodec copy  -f mpegts "intro$i.ts"
done

ffmpeg -i "input.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "input.ts"

ffmpeg -i "https://de2wa.com/video/introclick.mp4"  -acodec copy  -vcodec copy -vbsf h264_mp4toannexb -f mpegts "introclick.ts"




mkdir aajadi

for (( i=1 ; i<=20 ; i++ )); 
do
    ffmpeg -i "concat:intro$i.ts|introclick.ts||intro$(( ( RANDOM % 10)  + 1 )).ts" -acodec copy -vcodec copy  "aajadi/videofilviral$i.mp4"
done
