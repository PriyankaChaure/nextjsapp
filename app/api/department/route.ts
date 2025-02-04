import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Student ( StudenId bigint, StudentName varchar(255), Department varchar(255), Marks varchar(255) );`;
     
    return NextResponse.json({ result }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

