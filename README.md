Regenerate migrations and database

rm -rf prisma/migrations
bunx prisma migrate dev --name init
bunx prisma generate
