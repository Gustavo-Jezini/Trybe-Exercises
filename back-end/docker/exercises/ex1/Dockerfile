FROM nginx
COPY ./missao.html /usr/share/nginx/html
EXPOSE 4545
ENV API=http://localhost:4545/primeiro-teste.html/
WORKDIR /usr/share/nginx/html
ENTRYPOINT [ "npm", "start" ]
RUN ls