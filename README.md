# ci-cd-project
This project is a hands-on setup of a complete CI/CD pipeline using popular DevOps tools — all built and deployed on AWS using two free-tier EC2 instances using
- Git & GitHub
- Jenkins (on EC2)
- Docker
- AWS ECR
- Terraform (for EKS)
- Kubernetes (on AWS EKS)

Setup Summary

- 'jenkins-server' EC2:
  - Jenkins, Docker, Git, AWS CLI
  - Pulls code → builds & pushes image to ECR → deploys remotely

- 'infra-host' EC2:
  - Terraform, eksctl, kubectl
  - Provisions EKS & applies Kubernetes YAMLs

## Workflow

1. Code pushed to GitHub
2. Jenkins builds and pushes Docker image to ECR
3. Jenkins triggers deployment to EKS via SSH
4. Kubernetes manifests are applied to EKS
5. App is available via LoadBalancer IP
