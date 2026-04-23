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
    const post = posts.find((p: any) => p.slug === slug || p.id === slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read post' }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
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
    
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    let posts = JSON.parse(fileData);
    const index = posts.findIndex((p: any) => p.slug === slug || p.id === slug);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    // Update slug if title changed
    const newSlug = postData.title 
      ? postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      : posts[index].slug;

    posts[index] = {
      ...posts[index],
      ...postData,
      slug: newSlug,
      updatedAt: new Date().toISOString()
    };
    
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2));
    return NextResponse.json(posts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    let posts = JSON.parse(fileData);
    const index = posts.findIndex((p: any) => p.slug === slug || p.id === slug);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    posts.splice(index, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
