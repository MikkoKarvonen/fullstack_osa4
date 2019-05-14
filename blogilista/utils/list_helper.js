const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((a, b) => a + (b.likes || 0), 0);
}

const favoriteBlog = (blogs) => {
    return blogs.sort((a, b) => b.likes - a.likes)[0];
}

const mostEntries = (blogs) => {
    let numOfBlogs = [];
    blogs.forEach(function(blog) {
        if (numOfBlogs.some(e => e.author === blog.author)) {
            let found = numOfBlogs.find(e => e.author === blog.author)
            found['blogs'] = found['blogs'] + 1
        } else {
            numOfBlogs.push({author: blog.author,  blogs: 1})
        }
    });
    let most = numOfBlogs.sort((a,b)=>b.blogs-a.blogs)[0];   
    return most;
}

const mostLikes = (blogs) => {
    let numOfLikes = [];
    blogs.forEach(function(blog) {
        if (numOfLikes.some(e => e.author === blog.author)) {
            let found = numOfLikes.find(e => e.author === blog.author)
            found['likes'] = found['likes'] + blog.likes
        } else {
            numOfLikes.push({author: blog.author,  likes: blog.likes})
        }
    });
    let most = numOfLikes.sort((a,b)=>b.likes-a.likes)[0];   
    return most;
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostEntries,
    mostLikes
}