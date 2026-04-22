import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'posts.json');

export async function GET(request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const posts = JSON.parse(fileData);
    const post = posts.find((p: any) => p.slug === slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read post' }, { status: 500 });
  }
}
