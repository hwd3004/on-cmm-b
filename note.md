npm install @graphql-tools/schema @graphql-tools/merge @graphql-tools/load-files

npm i prisma

npx prisma init

npx prisma migrate dev

npx prisma generate

```
docker rm -f postgres-container

docker run -d --name postgres-container -e POSTGRES_PASSWORD=1234 -p 5432:5432 postgres

psql -U postgres

db 목록 조회 명령어 - \l

SELECT * FROM PG_USER;

alter user postgres password '1234';
```

---

```
Prisma에서 findUnique, findFirst, findUniqueOrThrow는 모두 데이터베이스에서 단일 레코드를 검색하는 메서드입니다.

findUnique: 단일 레코드를 검색하며, 해당 레코드가 없으면 null을 반환합니다.
findFirst: 단일 레코드를 검색하며, 해당 레코드가 없으면 null을 반환합니다. 여러 레코드가 존재하는 경우 첫 번째 레코드를 반환합니다.
findUniqueOrThrow: 단일 레코드를 검색하며, 해당 레코드가 없으면 에러를 발생시킵니다.
```
