<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Attendance Management System

Enterprise Attendance Management System built with **NestJS Microservices**, **gRPC**, **RabbitMQ**, **Prisma ORM**, and **PostgreSQL** following **Domain-Driven Design (DDD)** and **Clean Architecture** principles.

---

# Features

- Employee Management
- Authentication & Authorization
- Attendance Management
- Location Based Attendance
- Position Management
- Notification Event (RabbitMQ)
- Audit Log
- gRPC Internal Communication
- REST API Gateway (Planned)
- JWT Authentication
- Refresh Token
- Role Based Access Control (RBAC)

---

# Technology Stack

## Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- gRPC
- RabbitMQ
- JWT
- bcrypt
- class-validator
- class-transformer

---

# Current Services

## Employee Service

Responsible for:

- Employee CRUD
- Position Management
- Employee Location
- Sync Employee Credential to Auth Service
- Soft Delete
- Pagination
- Search

---

## Auth Service

Responsible for:

- User Authentication
- Login
- JWT
- Refresh Token
- Password Hashing
- Role
- Permission

---

## Attendance Service

Responsible for:

- Check In
- Check Out
- Attendance History
- Attendance Validation
- GPS Validation
- Working Hours

---

# Communication

## Internal

- gRPC

## Async

- RabbitMQ

---

# Design Pattern

- Clean Architecture
- Repository Pattern
- Dependency Injection
- CQRS Ready
- Domain Driven Design
- SOLID Principle

---

# Security

- JWT Authentication
- Refresh Token
- Password Hashing (bcrypt)
- RBAC
- gRPC Internal Communication

---

# Highlights

- Enterprise-ready Microservice Architecture
- Domain-Driven Design (DDD)
- Clean Architecture
- gRPC Service-to-Service Communication
- RabbitMQ Event-Driven Communication
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Repository Pattern
- Soft Delete
- Transaction Management
- Dependency Injection
- Production-ready Project Structure

---

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

