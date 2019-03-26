This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Forex Mini App

### Instalation

```sh
$ git clone https://github.com/arisros/forex-mini.git
$ cd fore-mini
```
with yarn
```sh
$ yarn install
```

with npm
```sh
$ npm install
```

### Development

in root directory
with yarn
```sh
$ yarn start
```
with npm
```sh
$ npm run start
```

#### Run test
in root directory
with yarn
```sh
$ yarn test
```
with npm
```sh
$ npm run test
```

#### Build in docker container
in root directory
build with name
```sh
$ docker build -t forex-mini-app .
```
run into a container port 7788
```sh
$ docker run -d -p 7788:80 --name forex-container -t forex-mini-app
```

### Todos

 - Write MORE Tests

