// routes/glossary.js
const express = require('express');
const router = express.Router();

const glossaryTerms = [
    {
        term: 'DevOps',
        description: 'DevOps is a set of practices, principles, and cultural philosophies that aim to improve collaboration and communication between software development and IT operations teams. It focuses on automating processes, accelerating software delivery, and ensuring continuous feedback to deliver high-quality software.',
        reference: 'https://www.atlassian.com/devops'
    },
    {
        term: 'Continuous Integration (CI)',
        description: 'Continuous Integration is a DevOps practice where code changes are frequently integrated into a shared repository. Automated build and test processes are triggered upon each integration to identify and address integration issues early in the development lifecycle.',
        reference: 'https://en.wikipedia.org/wiki/Continuous_integration'
    },
    {
        term: 'Continuous Delivery (CD)',
        description: 'Continuous Integration is a DevOps practice where code changes are frequently integrated into a shared repository. Automated build and test processes are triggered upon each integration to identify and address integration issues early in the development lifecycle.',
        reference: 'https://en.wikipedia.org/wiki/Continuous_delivery'
    },
    {
        term: 'Infrastructure as Code (IaC)',
        description: 'Infrastructure as Code is a practice of managing and provisioning infrastructure using code and automation tools. It allows developers to define and manage infrastructure resources (servers, networks, etc.) in a version-controlled manner, enhancing consistency and reproducibility.',
        reference: 'https://en.wikipedia.org/wiki/Infrastructure_as_code'
    },
    {
        term: 'Automation',
        description: 'Automation involves the use of scripts, tools, and processes to replace manual tasks and workflows. It aims to reduce human error, improve efficiency, and ensure consistent and repeatable processes.',
        reference: 'https://www.atlassian.com/devops/devops-tools/test-automation'
    },
    {
        term: 'Containerization',
        description: 'Containerization is a technology that allows applications and their dependencies to be packaged together in a lightweight, isolated environment known as a container. Containers provide consistency across different environments, making deployment and scaling more efficient.',
        reference: 'https://geekflare.com/containerization-in-devops/'
    },
    {
        term: 'Version Control',
        description: 'Version Control is the practice of tracking and managing changes to code, documents, and other files over time. It enables collaboration, helps manage conflicts, and provides a history of changes.',
        reference: 'https://learn.microsoft.com/en-us/devops/develop/git/what-is-version-control'
    },
    {
        term: 'Microservices',
        description: 'Microservices is an architectural approach where an application is composed of small, independently deployable and manageable services. Each service focuses on a specific business capability and communicates over well-defined APIs.',
        reference: 'https://www.spiceworks.com/tech/devops/articles/what-are-microservices/'
    },
    {
        term: 'Monitoring and Observability',
        description: 'Monitoring involves tracking the performance and health of applications and infrastructure in real-time. Observability goes beyond monitoring by providing insights into the internal workings of systems, helping to troubleshoot issues more effectively.',
        reference: 'https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability'
    },
    {
        term: 'Release Management',
        description: 'Release Management is the process of planning, scheduling, and coordinating the deployment of software releases into different environments, such as testing, staging, and production. It involves ensuring that the release process is smooth and minimizes disruptions.',
        reference: 'https://www.bmc.com/blogs/devops-release-management/'
    }
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
