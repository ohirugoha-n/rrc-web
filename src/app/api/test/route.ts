import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { NextResponse } from 'next/server';

import { PrismaClient } from '@/generated/prisma/client';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || '',
});
const prisma = new PrismaClient({ adapter });

export async function GET() {
  const tests = await prisma.test.findMany();

  return NextResponse.json(tests);
}
