# Test your node backend on a server

docker build -t node-backend-for-test .
docker run -p 80:80 -it node-backend-for-test

