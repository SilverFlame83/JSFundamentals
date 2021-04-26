function solve(input){
    let comments = {};
    let users = [];
    let article = [];

    for( let line of input){
        if(line.includes('user')){
            let tokens = line.split('user');
            let name = tokens[1].trim();
            users.push(name);
        } else if(line.includes('article')){
            let tokens = line.split('article');
            let articleName = tokens[1].trim();
            article.push(articleName);
        } else if(line.includes('posts')){
            let tokens = line.split(': ');
            let el = tokens[0].split('posts on');
            let userName = el[0].trim();
            let articleN = el[1].trim();
            let splited = tokens[1].split(', ');
            let title = splited[0].trim();
            let content = splited[1].trim();
            if(users.includes(userName) 
            && article.includes(articleN)) {
                let string = `--- From user ${userName}: ${title} - ${content}`;
                
                if(!comments.hasOwnProperty(articleN)){
                    comments[articleN] = [];
                }
                comments[articleN].push(string);
            }
            
        }
    }
    let sortedComments = Object.entries(comments)
    .sort((a, b) => b[1].length - a[1].length);
 
    for(let e of sortedComments){
        let article = e[0];
        let comments = e[1].sort((a, b) => b.substring(15).localeCompare(a.substring(15)));
        console.log(`Comments on ${article}`);
        for(let el of comments){
            console.log(`${el}`);
        }   
    }
}

solve(['user aUser123', 
'someUser posts on someArticle: NoTitle, stupidComment', 
'article Books', 
'article Movies', 
'article Shopping', 
'user someUser', 
'user uSeR4', 
'user lastUser', 
'uSeR4 posts on Books: I like books, I do really like them', 
'uSeR4 posts on Movies: I also like movies, I really do', 
'someUser posts on Shopping: title, I go shopping every day', 
'someUser posts on Movies: Like, I also like movies very much'])