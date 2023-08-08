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
    }
];

router.get('/', (req, res) => {
    res.render('glossary', { glossaryTerms });
});

module.exports = router;
