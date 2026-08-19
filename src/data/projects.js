import { contactConfig } from './contact'

const defaultGithubUrl = contactConfig.github

export const projects = [
  {
    id: 'dockerized-application-deployment-on-aws-ecs',
    title: 'Dockerized Application Deployment on AWS ECS',
    overview:
      'A container deployment workflow for packaging an application with Docker and running it on Amazon ECS using Amazon ECR as the image registry.',
    description:
      'Containerized an application using Docker and deployed it to Amazon ECS using Amazon ECR.',
    problem:
      'The application needed a consistent deployment model that reduced environment drift and aligned with AWS-native container hosting.',
    solution:
      'Docker was used to standardize the runtime, Amazon ECR stored build artifacts, and Amazon ECS handled service deployment inside a controlled AWS network boundary.',
    technologies: ['AWS', 'ECS', 'ECR', 'Docker', 'IAM', 'VPC'],
    architecture: ['GitHub', 'Docker Build', 'ECR', 'ECS', 'Application'],
    implementation:
      'The workflow starts from source control, builds a container image, pushes it to ECR, and updates an ECS service so the application can run in a managed cluster environment.',
    challenges:
      'Container deployment on AWS requires coordination across image delivery, task definitions, permissions, and networking. The implementation focused on keeping those dependencies predictable and repeatable.',
    result:
      'The project established a clear container delivery path on AWS with a reusable deployment pattern for future application updates.',
    githubUrl: defaultGithubUrl,
  },
  {
    id: 'aws-infrastructure-with-terraform',
    title: 'AWS Infrastructure with Terraform',
    overview:
      'An infrastructure-as-code project for provisioning foundational AWS resources with Terraform instead of manual console configuration.',
    description:
      'Provisioned AWS infrastructure using Terraform Infrastructure as Code.',
    problem:
      'Manually creating cloud infrastructure makes changes harder to audit, repeat, and maintain across environments.',
    solution:
      'Terraform definitions were used to declare AWS networking, compute, and access-related resources in version-controlled configuration files.',
    technologies: ['Terraform', 'AWS', 'EC2', 'VPC', 'Security Groups', 'IAM', 'S3'],
    architecture: ['Terraform', 'VPC', 'Subnet', 'Security Group', 'EC2'],
    implementation:
      'Terraform modules and resource definitions can provision the VPC, subnets, security groups, IAM dependencies, storage, and EC2 resources in a structured workflow.',
    challenges:
      'Infrastructure as code requires careful dependency planning and consistent configuration naming so the resulting AWS resources remain understandable and maintainable.',
    result:
      'The project created a repeatable infrastructure baseline that can be reviewed, updated, and reapplied through source-controlled configuration.',
    githubUrl: defaultGithubUrl,
  },
  {
    id: 'kubernetes-application-deployment',
    title: 'Kubernetes Application Deployment',
    overview:
      'A Kubernetes deployment project centered on running containerized workloads with deployment manifests, services, and cluster-native configuration.',
    description:
      'Deployed containerized applications using Kubernetes deployments, services, and configuration manifests.',
    problem:
      'The application needed a deployment model that supported container orchestration, service exposure, and repeatable cluster configuration.',
    solution:
      'Kubernetes manifests were used to define deployments and services so the application could be scheduled, managed, and exposed in a structured cluster environment.',
    technologies: ['Docker', 'Kubernetes', 'kubectl', 'YAML'],
    architecture: ['Docker Image', 'Kubernetes', 'Deployment', 'Pods', 'Service'],
    implementation:
      'Container images are referenced by Kubernetes YAML manifests, applied with kubectl, and managed through deployments that create pods and expose the service layer.',
    challenges:
      'Kubernetes introduces multiple moving parts including manifests, service discovery, and runtime orchestration, so the setup emphasized clarity in configuration and deployment flow.',
    result:
      'The project demonstrated a practical Kubernetes application delivery pattern that can be adapted for future cluster-based workloads.',
    githubUrl: defaultGithubUrl,
  },
  {
    id: 'cicd-pipeline-for-containerized-application',
    title: 'CI/CD Pipeline for Containerized Application',
    overview:
      'An automated workflow for building container images from source control changes and delivering them to an AWS runtime environment.',
    description:
      'Created an automated CI/CD workflow for building Docker images and deploying applications to AWS.',
    problem:
      'Manual build and deployment steps slow down delivery and make release processes harder to reproduce consistently.',
    solution:
      'A CI/CD pipeline links source control activity to Docker image creation, registry publishing, and AWS deployment updates for a smoother release path.',
    technologies: ['Git', 'GitHub', 'CI/CD', 'Docker', 'ECR', 'ECS', 'AWS'],
    architecture: ['Developer', 'GitHub', 'CI/CD', 'Docker Build', 'ECR', 'ECS', 'Production'],
    implementation:
      'The pipeline flow begins with developer changes in GitHub, triggers a CI/CD job, builds a Docker image, pushes it to ECR, and prepares deployment into ECS.',
    challenges:
      'Pipeline design has to coordinate source control, build logic, registry access, and deployment permissions without introducing fragile manual steps.',
    result:
      'The project set up a cleaner automated release workflow for containerized application delivery into AWS production environments.',
    githubUrl: defaultGithubUrl,
  },
]
