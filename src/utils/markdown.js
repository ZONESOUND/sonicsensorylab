
export function parseFrontmatter(text) {
    const pattern = /^---[\s\S]*?---/;
    const match = text.match(pattern);

    if (!match) {
        return { frontmatter: {}, content: text };
    }

    const frontmatterRaw = match[0].replace(/---/g, '').trim();
    const content = text.replace(pattern, '').trim();

    const frontmatter = {};
    frontmatterRaw.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length) {
            let value = values.join(':').trim();
            // Basic type inference
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            } else if (value.startsWith('[') && value.endsWith(']')) {
                // Simple array parsing
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
            }
            frontmatter[key.trim()] = value;
        }
    });

    return { frontmatter, content };
}

export function getPosts() {
    const modules = import.meta.glob('/src/content/projects/*.md', { eager: true, query: '?raw', import: 'default' });

    const posts = Object.keys(modules).map((path) => {
        const slug = path.split('/').pop().replace('.md', '');
        const markdown = modules[path];

        // Use our custom simple parser to avoid Node.js 'Buffer' issues in browser
        const { frontmatter, content } = parseFrontmatter(markdown);

        return {
            slug,
            frontmatter,
            content
        };
    });

    return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getPost(slug) {
    const posts = getPosts();
    return posts.find((p) => p.slug === slug);
}
