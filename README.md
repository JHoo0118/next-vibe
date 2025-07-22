# Vibe

```shell

# PostgreSQL
$ docker compose up -d

# Prisma
$ npx prisma migrate reset
$ npx prisma migrate dev

# Inngest
$ npx inngest-cli@latest dev

# E2B(Execute to Build) Sandbox
$ brew install e2b

$ e2b auth login

$ e2b sandbox list

# ./sandbox-templates/nextjs
$ e2b template build --name {template-name}
$ e2b template build --name {template-name} --cmd "/compile_page.sh"
$ e2b template publish -t {team-id}
```
