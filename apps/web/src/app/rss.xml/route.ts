import { NextResponse } from 'next/server'
import RSS from "@/lib/rss";
import { getBlogPosts } from '@/lib/db/blog';
import { getPortfolioPosts } from '@/lib/db/portfolio';
import config from '@/config';

const { title, description, author } = config;

export const GET = async () => {
  const feed = new RSS({
    title: title,
    description: description,
    site_url: "https://www.1chooo.com",
    feed_url: `https://www.1chooo.com/rss.xml`,
    language: 'en-US',
    image_url: `https://www.1chooo.com/og`
  })

  let blogs = await getBlogPosts();

  for (const blog of blogs) {
    let {
      title,
      publishedAt,
      summary,
    } = blog.metadata;

    feed.item({
      title,
      url: `https://www.1chooo.com/blog/${blog.slug}`,
      publishedAt,
      description: summary,
      author: author
    })
  }

  let projects = await getPortfolioPosts();

  for (const project of projects) {
    let {
      title,
      publishedAt,
      summary,
    } = project.metadata;

    feed.item({
      title,
      url: `https://www.1chooo.com/portfolio/${project.slug}`,
      publishedAt,
      description: summary,
      author: author
    })
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}