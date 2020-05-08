# Node js Microservices Demo

This project is used for understanding microservices using Docker and kubernetes and nodejs express-mysql APi development.

## Getting Started

- Clone this repo to your local machine
- run `docker-compose up` to start all the microservices

### Prerequisites

Things you need to install

- `Docker` (in case you want to try out microservices)
- `minikube` (to run kubernetes locally)
- `nodejs` (for developing api independent of docker)
- `mysql-server` (if you dont want to use the database container)

## Deployment

Things to note,

- Based on the target kubernetes environment (on-premise/cloud), the ingress-nginx installation varies. Please refer offical docs
- The kube config files can be reused for any environment

## Nodejs API Built With

- [Express](https://expressjs.com/) - To handle request and response
- [Sequelize](https://sequelize.org/) - ORM for mysql

## Contributing

Please feel free to fork the repo and enhance the features by submitting pull requests.

## Authors

- **Balasubramanian S** - [Git](https://github.com/sbalasubramanian14)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
