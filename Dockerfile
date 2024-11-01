# 第一阶段：构建应用
FROM node:20.15.0 as build-stage

WORKDIR /app

# 将项目目录中的所有文件复制到容器内的 /app 目录
COPY . .

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN ls -al
# 安装依赖并构建应用
RUN yarn install && yarn build

# 第二阶段：运行 Nginx 服务器
FROM nginx:alpine

# 设置环境变量
ENV VIRTUAL_HOST=douhaoquan.com


# 复制构建结果到 Nginx 的静态文件目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制 Nginx 配置文件
COPY ./nginx.conf /etc/nginx/nginx.conf


# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
