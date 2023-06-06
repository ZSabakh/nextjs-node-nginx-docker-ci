pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                echo 'Initializing project...'
                echo 'Cloning GitHub repository'
                git branch: 'main', url: 'https://github.com/ZSabakh/nginx_node_compose'
            }
        }

        stage('Build Nginx Dockerfile') {
            steps {
                echo 'Building Nginx Dockerfile...'
                dir('nginx') {
                    sh 'docker build -t my-nginx-image .'
                }
            }
        }

        stage('Build Nodejs Dockerfile') {
            steps {
                echo 'Building Nodejs Dockerfile...'
                dir('node') {
                    sh 'docker build -t my-nodejs-image .'
                }
            }
        }

        stage('Deploy Docker Compose') {
            steps {
                echo 'Removing running containers... '
                sh 'docker-compose down'
                echo 'Deploying with Docker Compose...'
                sh 'docker-compose up -d'
            }
        }
    }
}