const baseURL = "https://www.reddit.com/";

const getPosts = async () => {
    const response = await fetch(`${baseURL}.json`);
    const data = await response.json();
    const posts = data.data.children;
    const results = {};
    for (let [i, post] of posts.entries()) {
        results[`${i}`] = {
            name: post.data.subreddit,
            title: post.data.title,
            prefix: post.data.subreddit_name_prefixed,
            thumbnail: post.data.thumbnail,
            content: post.data.selftext,
            ups: post.data.ups,
            downs: post.data.downs,
            media: post.data.media,
            id: post.data.id
        };
    }
    console.log(results);
    return results;
};

const getPostsBySearch = async (text) => {
    const query = encodeURIComponent(text);
    const response = await fetch(`${baseURL}search.json?q=${query}`);
    const data = await response.json();
    const posts = data.data.children;
    const results = {};
    for (let [i, post] of posts.entries()) {
        results[`${i}`] = {
            name: post.data.subreddit,
            title: post.data.title,
            prefix: post.data.subreddit_name_prefixed,
            thumbnail: post.data.thumbnail,
            content: post.data.selftext,
            ups: post.data.ups,
            downs: post.data.downs,
            media: post.data.media,
            id: post.data.id
        };
    }
    console.log(results);
    return results;
};

const getRedditUsers = async() => {
    const response = await fetch(`${baseURL}subreddits/.json`);
    const data = await response.json();
    const posts = data.data.children;
    const results = {};
    for (let [i, post] of posts.entries()) {
        results[post.data.display_name] = post.data.icon_img;
    }
    console.log(results);
    return results;
};

const getPostsByUser = async(user) => {
    const query = encodeURIComponent(user);
    const response = await fetch(`${baseURL}r/${query}/.json`);
    const data = await response.json();
    const posts = data.data.children;
    const results = {};
    for (let [i, post] of posts.entries()) {
        results[`${i}`] = {
            name: post.data.subreddit,
            title: post.data.title,
            prefix: post.data.subreddit_name_prefixed,
            thumbnail: post.data.thumbnail,
            content: post.data.selftext,
            ups: post.data.ups,
            downs: post.data.downs,
            media: post.data.media,
            id: post.data.id
        };
    }
    console.log(results);
    return results;
};

const getComments = async(name, id) => {
    const response = await fetch(`${baseURL}r/${name}/comments/${id}/.json`);
    const data = await response.json();
    const comments = data[1].data.children;
    const results = {};
    for (let comment of comments) {
        results[comment.data.author] = comment.data.body;
    }
    console.log(results);
    return results;
};
