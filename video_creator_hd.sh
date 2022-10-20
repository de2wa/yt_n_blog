
#!/bin/bash  

#https://shell.cloud.google.com/?hl=en_US&fromcloudshell=true&show=ide%2Cterminal
#docker run -p 6070:80 dorowu/ubuntu-desktop-lxde-vnc


#sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
#sudo chmod a+rx /usr/local/bin/yt-dlp  

rm *.ts
rm *.mp4
yt-dlp -f 22 https://www.youtube.com/watch?v=1FnR2x3E0xo -o inputhd.mp4
#yt-dlp -f 22 https://www.youtube.com/watch?v=5BnfqRmzHC8 -o input1.mp4

ffmpeg -i inputhd.mp4 -t 00:0$(shuf -i 5-9 -n 1):00 -vf "scale=1920:1080, eq=brightness=0.02, eq=contrast=0.8" -preset slow -crf 18 -b:v 6.5M   -f mpegts input1080.ts


ffmpeg -i "https://de2wa.com/video/introclick1.mp4"  -vf scale=1920:1080 -preset slow -crf 18  -f mpegts "introclick.ts"


for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i inputhd.mp4 -t 00:0$(shuf -i 5-9 -n 1):00 -vf "scale=1920:1080, eq=brightness=0.02, eq=contrast=0.$(shuf -i 5-8 -n 1)" -preset slow -crf 18 -b:v $(shuf -i 3-6 -n 1).5M  -an -f mpegts "input$i.ts"
done



mkdir aajadi 

for (( i=1 ; i<=10; i++ ));  do 
ffmpeg -i "concat:input1080.ts|introclick.ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts|input$(shuf -i 1-10 -n 1).ts" -acodec copy -vcodec copy aajadi/kHGGhcy$i.mp4
done
