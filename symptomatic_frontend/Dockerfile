# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN rm package-lock.json
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM node:8
RUN yarn global add serve
COPY --from=react-build /app/build /app/build
WORKDIR /app
EXPOSE 5000
CMD ["serve", "-s", "build"]