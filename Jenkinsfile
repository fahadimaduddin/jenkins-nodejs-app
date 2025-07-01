pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/fahadimaduddin/jenkins-nodejs-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Success') {
            steps {
                echo '✅ Build passed!'
            }
        }
    }
}
