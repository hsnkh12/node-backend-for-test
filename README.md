Test your node backend on a server

docker build -t node-dock-kub-backend .
docker run -p 80:80 -it node-dock-kub-backend
docker 
