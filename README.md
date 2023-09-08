# udacity-cloud-devops-capstone\

This project using AWS, K8S (EKS), cloudformation and circleCI

### CircleCI Status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Dienvm/udacity-cloud-devops-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Dienvm/udacity-cloud-devops-capstone/tree/main)

## Load Balancer Endpoint

http://a489bb1e3ab144db08edd84110c481cb-2055171584.us-east-1.elb.amazonaws.com/

## github link

- https://github.com/Dienvm/udacity-cloud-devops-capstone

## dockerhub link

- https://hub.docker.com/repository/docker/dienvm1/devops-capstone/general

## How to run

### Pre-setup

#### Setup network cloudformation:

```sh
# Create network
./cloudformation/template.sh devops-capstone-network ./cloudformation/network.yml ./cloudformation/network.json

# Update network
./cloudformation/template.sh devops-capstone-network ./cloudformation/network.yml ./cloudformation/network.json
```

#### Setup cluster cloudformation:

```sh
# Create cluster
./cloudformation/template.sh devops-capstone-cluster ./cloudformation/cluster.yml ./cloudformation/cluster.json

# Update cluster
./cloudformation/template.sh devops-capstone-cluster ./cloudformation/cluster.yml ./cloudformation/cluster.json
```

### Deploy app

```sh
# Update cluster config
aws eks update-kubeconfig --region us-east-1 --name devops-capstone-cluster

# Deploy cluster
kubectl apply -f k8s
```
