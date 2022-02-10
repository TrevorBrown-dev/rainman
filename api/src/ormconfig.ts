import { createConnection } from 'typeorm';
import { Item } from './server/entities/Item';
import { Name } from './server/entities/Name';

export default {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    entities: [Item, Name],
    synchronize: true, //? probably should comment out in production
    // logging: true, //? turn on if you wanna look at sql

    // cache: {
    //     type: 'redis',
    //     host: process.env.REDIS_HOST || 'localhost',
    //     port: process.env.REDIS_PORT || 6379,
    // },
} as Parameters<typeof createConnection>[0];