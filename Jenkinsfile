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
                script {
                    def timestamp = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone('UTC'))
                    env.IMAGE_TAG_NGINX = "my-nginx-image:${timestamp}"
                }
                dir('nginx') {
                    sh "docker build -t ${env.IMAGE_TAG_NGINX} ."
                }
            }
        }

        stage('Test') {
            steps {
                dir('node'){
                        sh 'docker build -f dockerfile.test -t node-test-image:test .'
                        sh 'docker run --name node-test-container node-test-image:test'
                    }
                post {
                    always {
                        sh 'docker rm -f node-test-container'
                        sh 'docker rmi node-test-image:test'
                    }
                }
        }
        }

        stage('Build Nodejs Dockerfile') {
            steps {
                echo 'Building Nodejs Dockerfile...'
                script {
                    def timestamp = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone('UTC'))
                    env.IMAGE_TAG_NODEJS = "my-nodejs-image:${timestamp}"
                }
                dir('node') {
                    sh "docker build -t ${env.IMAGE_TAG_NODEJS} ."
                }
            }
        }

        stage('Update .env file') {
            steps {
                echo 'Updating .env file...'
                sh 'rm -f .env'
                sh "echo NGINX_IMG=${env.IMAGE_TAG_NGINX} >> .env"
                sh "echo NODEJS_IMG=${env.IMAGE_TAG_NODEJS} >> .env"
            }
        }

        stage('Deploy Docker Compose') {
            steps {
                echo 'Removing running containers... '
                sh 'docker-compose down'
                echo 'Deploying with Docker Compose...'
                sh 'docker-compose up -d'
                
                echo 'Cleaning up old images...'
                sh 'docker image prune -f --all --filter "until=1h"'
            }
        }
    }
}