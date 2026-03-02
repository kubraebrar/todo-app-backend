import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// Veritabanı bağlantı adresini çevre değişkenlerinden alıyoruz
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Prisma Client'ı artık bu adaptörle başlatıyoruz
const prisma = new PrismaClient({ adapter });

export default prisma;