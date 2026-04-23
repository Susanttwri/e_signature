import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'posts.json');

export async function GET() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const posts = JSON.parse(fileData);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const postData = await request.json();
    if (
      !postData?.title ||
      !postData?.shortDescription ||
      !postData?.content ||
      !postData?.metaTitle ||
      !postData?.metaDescription ||
      !postData?.imageUrl
    ) {
      return NextResponse.json(
        { error: 'Title, short description, content, image, meta title and meta description are required.' },
        { status: 400 }
      );
    }
    
    // Generate a simple slug
    const slug = postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const newPost = {
      ...postData,
      id: Date.now().toString(),
      slug,
      type: postData.type || 'Blog',
      status: postData.status || 'Published',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    let posts = [];
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf8');
      posts = JSON.parse(fileData);
    }
    
    // Add to beginning of array
    posts.unshift(newPost);
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2));
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
