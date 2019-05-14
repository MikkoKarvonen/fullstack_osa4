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
            /* vendors contains the element we're looking for */
            let found = numOfBlogs.find(e => e.author === blog.author)
            found['blogs'] = found['blogs'] + 1
        } else {
            numOfBlogs.push({author: blog.author,  blogs: 1})
        }
    });
    let most = numOfBlogs.sort((a,b)=>b.blogs-a.blogs)[0];   
    return most;
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostEntries
}