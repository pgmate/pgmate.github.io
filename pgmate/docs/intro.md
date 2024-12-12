---
sidebar_position: 1
---

# PGMate in 5 minutes

Let's discover **PGMate in less than 5 minutes**. You can easily run PGMate Demo Project in the Cloud for free, and quickly get to a result like:

![PGMate Table View](https://github.com/pgmate/demo/raw/main/pgmate-data.png)

## Getting Started

You can try PGMate in 4 different ways:

- In the Cloud
  - run it on GitPod.io
  - run it as GitHub Codespace
- Locally
  - quick bash command
  - by cloning the Demo project

## In the Cloud

### Run PGMate on GitPod.io

Click on this button and enjoy the automation:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/pgmate/demo)

### Run PGMate on GitHub Codespace

1. Open the [Demo Project on GitHub](https://github.com/pgmate/demo?tab=readme-ov-file#pgmate-demo)
2. Click on: Code
3. Click on: Create codespace on main
4. Take a cup of coffee...

![Run PGMate as GitHub Codespace](https://github.com/pgmate/demo/raw/main/pgmate-github-codespace.png)

## In Your Development Machine

### Quick Bash

1. open your favourite Terminal App
2. paste this command

```bash
curl -sL https://bit.ly/3ZAx19E | bash -s -- run
```

:::info
You need [Docker](https://docker.com) and a Linux environment (Mac also works fine)
:::

### Clone the Demo Project

1. open your favourite Terminal App
2. `git clone https://github.com/pgmate/demo pgmate`
3. `cd pgmate`
4. `docker compose up`

:::info
You need [Docker](https://docker.com) and a Linux environment (Mac also works fine)
:::

## Login

The [Demo Project](https://github.com/pgmate/demo) ships with `pgmate` as default password:

![PGMate Login](https://github.com/pgmate/demo/raw/main/pgmate-login.png)

:::info
You can change it to your favourite password by editing `PGMATE_ADMIN_SECRET` env variable.

🧑‍💻 If you are running if from the _QuickBash_ command, try:

```bash
curl -sL https://bit.ly/3ZAx19E | bash -s \
  -- run \
  --secret=foobar
```
:::

## Connections Manger (coming soon)

This feature is under development and you will soon be able to connect to multiple databases.

For now, PGMate requires a default connection string, and the [Demo Project](https://github.com/pgmate/demo) ships with a local Postgres container running alongside PGMate.

Select the `default` connection and start exploring the default database.

:::info
You can change the default db by editing the `PGSTRING` env variable

🧑‍💻 If you are running if from the _QuickBash_ command, try:

```bash
curl -sL https://bit.ly/3ZAx19E | bash -s \
  -- run \
  --pgstring=postgres://....
```
:::

## Explore your Database

[[ coming soon... ]]

## Move across different Views

[[ coming soon... ]]

## Quick Connection Switch

[[ coming soon... ]]
