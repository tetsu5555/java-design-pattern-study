EXISTS=$(docker image ls | awk '{print $1}' | grep -E '^java$')
if [ $EXISTS = "1" ]
then
  docker pull java
fi

# Containerがすでに存在すれば削除する
CONTAINER_ID=$(docker container ls -a | grep java-design-pattern | awk '{print $1}')
if [ -n "$CONTAINER_ID" ]
then
  docker stop $CONTAINER_ID
  docker rm $CONTAINER_ID
  echo "delete container"
fi

# javaイメージを使ってコンテナを実行
docker  container run -v $(pwd):/home/share --name java-design-pattern -it java

