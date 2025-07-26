# NGConfig-quick-poc

Show how to make environment configuration at runtime,

Configuration service -> src/app/config/config.service.ts

Loads

Configuration Json -> public/assets/config.json

Provided from

app.config.ts

With

provideAppInitializer(initializeApp),

See result when

docker compose up, go to <http://localhost:4200/>