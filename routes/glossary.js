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
    },
    {
        term: 'DevOps Cycle',
        description: 'The DevOps Cycle is a continuous process that combines software development (Dev) and IT operations (Ops) to enable efficient and collaborative software delivery. It encompasses stages such as planning, coding, building, testing, deployment, monitoring, and feedback, aiming to accelerate development, improve quality, and enhance communication between development and operations teams.',
        reference: 'https://testsigma.com/blog/devops-life-cycle/'
    },
    {
        term: 'Agile Methodology',
        description: 'Agile Methodology is a flexible and iterative approach to software development that emphasizes collaboration, adaptability, and customer involvement. It breaks down the development process into smaller, manageable cycles called sprints, where cross-functional teams work together to deliver incremental improvements. Agile promotes regular feedback, continuous integration, and a focus on delivering valuable features quickly.',
        reference: 'https://asana.com/resources/agile-methodology'
    },
    {
        term: 'Monitoring and Observability',
        description: 'Monitoring involves tracking the performance and health of applications and infrastructure in real-time. Observability goes beyond monitoring by providing insights into the internal workings of systems, helping to troubleshoot issues more effectively.',
        reference: 'https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability'
    },
    {
        term: 'Feedback Loop',
        description: 'A Feedback Loop refers to the process of collecting, evaluating, and incorporating input or information from various sources into a continuous cycle of improvement. In software development, feedback loops can occur at different stages, such as during code reviews, testing, user acceptance testing, and post-deployment monitoring. These loops help teams identify issues, make necessary adjustments, and refine their processes or products based on the received feedback',
        reference: 'https://www.bmc.com/blogs/devops-feedback-loops/'
    },
    {
        term: 'Minimum Viable Product (MVP)',
        description: 'A Minimum Viable Product (MVP) is the initial version of a software or product that includes only essential features and functionalities. It is developed and deployed quickly to gather user feedback and validate assumptions, enabling iterative development and improvement based on real-world usage.',
        reference: 'https://www.boldare.com/blog/mvp-what-why-how/'
    },
    {
        term: 'Definition of Done (DoD)',
        description: 'The Definition of Done (DoD) in DevOps is a set of criteria that outlines the requirements for completing a development task or user story. It encompasses coding, testing, documentation, and other necessary steps to ensure that work is fully finished and ready for deployment.',
        reference: 'https://devops.com/the-definition-of-done-why-its-important-for-success/'
    },
    {
        term: 'IT Service Management (ITSM)',
        description: 'IT Service Management (ITSM) in DevOps refers to the set of practices and processes for designing, delivering, managing, and improving IT services within an organization. It involves aligning IT services with business needs, optimizing processes, and maintaining a customer-centric approach to service delivery.',
        reference: 'https://blog.seibert-media.com/2023/01/10/what-is-itsm-itil-devops/'
    },
    {
        term: 'DevOps Agile Skills Association (DASA)',
        description: 'The DevOps Agile Skills Association (DASA) is a global organization that provides training, certifications, and frameworks to promote DevOps and Agile practices. It aims to enhance skills and knowledge in areas such as DevOps principles, culture, automation, and continuous delivery.',
        reference: 'https://www.devopsagileskills.org/'
    },
    {
        term: 'Containers',
        description: 'Containers in DevOps are lightweight, standalone software packages that contain all the necessary code, runtime, libraries, and settings needed to run an application. They offer consistent and isolated environments across different stages of development, from testing to production, facilitating portability and scalability.',
        reference: 'https://www.netapp.com/devops-solutions/what-are-containers/'
    },
    {
        term: 'Docker',
        description: ' Docker is a platform and toolset used in DevOps to develop, deploy, and manage applications using containerization technology. It allows developers to package an application along with its dependencies, libraries, and runtime environment into a standardized container. These containers can be easily transported between different environments, such as development, testing, and production, ensuring consistent behavior and simplifying deployment. ',
        reference: 'https://osswangxining.github.io/files/docker-mta/WP_Docker%20and%20the%203%20ways%20devops.pdf'
    },
        {
        term: 'Containerization',
        description: 'Containerization is a method of packaging applications along with their dependencies into isolated, portable units known as containers. These containers ensure consistent and efficient deployment across various computing environments, simplifying application management and scalability.',
        reference: 'https://www.papertrail.com/solution/tips/what-are-containers-and-containerization-in-devops/'
    },
        {
        term: 'Kubernetes',
        description: 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides a powerful set of tools for maintaining the health and performance of application containers, making it easier to manage large-scale container deployments.',
        reference: 'https://intellipaat.com/blog/kubernetes-and-devops/'
    },
        {
        term: 'Repositories',
        description: 'Repositories are centralized storage locations where developers store and manage code, application artifacts, or container images. They serve as version control systems, facilitating collaboration among development teams and enabling the tracking of changes to code and artifacts over time.',
        reference: 'https://www.javatpoint.com/azure-devops-repository/'
    },
        {
        term: 'Orchestration',
        description: 'Orchestration in DevOps involves automating and coordinating various tasks and services in the software development and deployment process. It ensures that all components of an application work seamlessly together, from code building and testing to deployment and scaling, enhancing efficiency and reliability.',
        reference: 'https://www.dynatrace.com/knowledge-base/devops-orchestration/'
    },
        {
        term: 'Cloud-native',
        description: 'Cloud-native refers to the practice of designing and building applications specifically for cloud environments. These applications are typically composed of microservices, packaged in containers, and utilize cloud services like serverless computing, optimizing resource utilization and scalability in the cloud.',
        reference: 'https://www.bmc.com/blogs/cloud-native-devops/'
    },
        {
        term: 'Docker Compose',
        description: 'Docker Compose is a tool that simplifies the deployment of multi-container Docker applications. It allows developers to define the structure and dependencies of a multi-container application in a single YAML file, making it easier to manage complex containerized systems.',
        reference: 'https://docs.docker.com/compose/'
    },
        {
        term: 'Overlay Network',
        description: 'An overlay network is a virtual network created on top of an existing network infrastructure. It enables containers or services to communicate securely across different hosts and networks, abstracting the complexities of the underlying physical network.',
        reference: 'https://www.netmaker.io/resources/network-automation-for-devops-the-future-of-cloud-infrastructure/'
    },
        {
        term: 'Macvlan Network',
        description: 'Macvlan is a Docker network driver that enables containers to connect directly to a physical network, giving them unique MAC addresses and allowing them to appear as independent devices on the network. This is useful for scenarios where containers need direct access to the host network.',
        reference: 'https://www.knowledgehut.com/blog/devops/docker-networking/'
    },
        {
        term: 'Bridge Network',
        description: 'A bridge network is the default Docker network mode that establishes a private, internal network on a host. Containers connected to this network can communicate with each other and with the host, while remaining isolated from the external network, providing a level of network security and control.',
        reference: 'https://docs.docker.com/network/drivers/bridge/'
    },
        {
        term: 'Hypertext Transfer Protocol',
        description: 'In DevOps, HTTP (Hypertext Transfer Protocol) plays a crucial role in enabling the seamless integration and communication between various components of a software delivery pipeline. It facilitates the transfer of code, artifacts, and configuration files between development, testing, and production environments.',
        reference: 'https://blog.devgenius.io/devops-in-linux-http-protocol-f5863e4f98b2'
    }
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
