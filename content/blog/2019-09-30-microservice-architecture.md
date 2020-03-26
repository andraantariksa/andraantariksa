+++
title = "Microservice Architecture"
date = 2019-09-30
# thumbnail =  "https://res.cloudinary.com/practicaldev/image/fetch/s--seen3BGm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/2697570/49395813-cd094980-f737-11e8-9e9a-6c20db5720c4.jpg"

[taxonomies]
categories = [
  "programming",
  "software engineering"
]
tags = [
  "programming",
  "software",
  "engineering",
  "architecture",
  "design pattern"
]
+++

![Monolithic Architecture vs Microservice Architecture](https://res.cloudinary.com/practicaldev/image/fetch/s--seen3BGm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/2697570/49395813-cd094980-f737-11e8-9e9a-6c20db5720c4.jpg)

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of small independent services, rather than one monstrously huge service ([Monolithic](https://en.wikipedia.org/wiki/Monolithic_application)). And to "combine" the service into one application, they are interacting each other (usually) using application programming interface. [[martinfolwer.com](https://martinfowler.com/articles/microservices.html)]

## Okay, now what is Application Programming Interface (API) ?

![Pizza Purchasing API](https://qph.fs.quoracdn.net/main-qimg-45b9ac150523239d107c649e89f12ced)

In short, it just how the application interact each other. If you want to have an application that can communicate with another application to use the data, you can make an API for it.

For the example, if you want to know the weather, you can try to use [OpenWeatherMap API](https://openweathermap.org/api). So, you only have to get the data from OpenWeatherMap and you don't have to implement the weather application and provide the data by yourself, you only have to "ask" their website for the data.

## What are the Benefit and the Drawback for Microservice Architecture?

### Pros

- The application logic will be separated on each service, so the services can manage their own (developer) team independenly. Managing small team is way more easier than managing a big team. It reduce the burden for the developer to maintain and develop the application
- It is really easy to adopt a new technology stack. Every service can implement their own tools and programming language
- Reduce the program coupling
- It is more reliable. When one service is shut off, it won't be a problem for the service that doesn't have any correlation with it
- Code review and quality assurance become easier
- Development and deploying much easier. Most of company want their application to came up to the market quickly

### Cons

- It adds the complexity to develop the application because microservice is a [distributed system](https://en.wikipedia.org/wiki/Distributed_computing). No joke, it's **really** complex
- Every service has their own database schema that runs independently. It will be a challenge to maintain the data consistency

## Monolithic Architecture vs Microservice Architecture

![Before implementing microservice](https://www.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part1-1_monolithic-architecture.png)

**Before implementing microservice** [[Nginx](https://www.nginx.com/blog/introduction-to-microservices/)]

![After implementing microservice](https://www.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part1-2_microservices-architecture.png)

**After implementing microservice** [[Nginx](https://www.nginx.com/blog/introduction-to-microservices/)]

Look at the figure **Before implementing microservice**, every application logic are contained in one huge service. It will be very hard to be managed by big company that have (lets say) 100 developer as a one team to manage the huge monolithic application.

Applications written in this style are extremely common. They are simple to develop . These kinds of applications are also simple to test. You just have to copy the packaged application to a server. You can also scale the application by running multiple copies behind a load balancer ([Replication](https://en.wikipedia.org/wiki/Replication_(computing))). In the early stages of the project it works well, but it would be a mess when the project are growing larger.

When you look at the figure **After implementing microservice**, as you can see, the application logic are separated each other on their correspond service. It will be very easy to managed by 100 folks, with every service has a different team that consist of 8-10 people.

The apps don’t, however, have direct access to the backend services. Instead, communication is mediated by an entry point, API Gateway. The API Gateway is responsible for tasks such as load balancing, caching, access control, API metering, and monitoring.

Each of the services may have a different database, API protocol and programming language. It would be benefit a lot since the needs of a service could be vary.

![Another example of microservice](https://microservices.io/i/bffe.png)

**Another example of microservice architecture** [microservices.io](https://microservices.io/i/bffe.png)

## Simple Example

Lets make a simple microservice example for an authentication using two service, **gateway service** and **users service**.

The gateway service act as the interface for the user. The **users service** used as the logic and data container for users entity.

![Simple microservice diagram](https://i.imgur.com/bpqJCNY.png)

### User Story

- User can register their profile
- User can input their credential and get their session if the credential was right
- User can get their profile data

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/aWd4tZ94r8E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can take a look for the source code can be seen here: https://gitlab.com/andraantariksa/simple-microservice/

---

Yes, building complex applications is extremely difficult. A monolithic architecture only makes sense for simple, lightweight applications. You will end up in a world of pain if you use it for complex applications. The microservices architecture is the better choice for complex, evolving applications despite the drawbacks and implementation challenges.

A lot of company like Gojek, Grab, and Tokopedia, have solved this problem by adopting microservices architecture. Instead of building a single monstrous, monolithic application, the idea is to split your application into set of smaller, interconnected services.

---

## Further Reading

- https://github.com/vaquarkhan/vaquarkhan/wiki/Difference-between-scaling-horizontally-and-vertically
- http://www.antonkharenko.com/2015/06/notes-on-distributed-vs-non-distributed.html
- https://medium.com/codelabs-unikom/microservices-apaan-tuh-b9f5d56e8848
- https://www.guru99.com/microservices-tutorial.html
- https://martinfowler.com/articles/microservices.html
- https://www.ca.com/content/dam/ca/us/files/ebook/microservice-architecture-aligning-principles-practices-and-culture.pdf
- https://blog.cloudobjects.io/api-design/2017/04/10/api-design-paradigms/
- https://apisyouwonthate.com/blog/understanding-rpc-rest-and-graphql