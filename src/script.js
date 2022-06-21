
function generadePostsHTML(i) {
    const post = posts[i];

    return `
        <div class="post">
            <div class="post__user-name">
                <div class="user-name__logo">${post.logo}</div>
                <p class="post__title post__title-width">${post.name}</p>
                <p class="post__title">...</p>
            </div>
            <div>
                <img src="${post.picture}" alt="">
            </div>
            <div>
                <div class="post__icons">
                    <img src="img/heart.png" alt="">
                    <img src="img/comment.png" alt="">
                    <img src="img/arrow.png" alt="">
                </div>
                <img src="img/mark.png" alt="">
            </div>
            <div>
                <p class="post__text">Gefält ${post.likes_count} Mal</p>
            </div>
            <div>
                <p class="post__text post__text-link" onclick="renderComments(${i})">Alle ${post.comment.length} Kommentare ansehen</p>
            </div>
                <div>
                    <p class="post__text">${post.date}</p>
                </div>
                <div class="post__input-comment">
                    <img src="img/smile.png" alt="">
                    <input id="post-${i}"type="text" placeholder="Kommentieren" style="">
                    <button id="send-${i}" disabled="disabled">Posten</button>
                </div>
                <div class="d-none post__comments"></div>
            </div>
    `;
}

function generadeRecommendatiosHTML() {
    return `
            <div class="recommend__info">
                <div></div>
                <span>account_name</span>
                <button>Folgen</button>
            </div>
        `;
}

function renderRecommendations() {
    const recommend = document.getElementById('recommend');
    for (let i = 0; i < 4; i++) {
        recommend.innerHTML += generadeRecommendatiosHTML();
    }
}

function renderPosts() {
    const post = document.getElementById('posts');
    for (let i = 0; i < posts.length; i++) {
        post.innerHTML += generadePostsHTML(i);
    }

    renderRecommendations();
}


function generadeShowCommentHTML(item) {
    return `
        <ul>
            <li>${item}</li>
        </ul>
    `;
}

function showComment(number) {
    const show = document.getElementById('comments');
    const comments = posts[number].comment;
    
    comments.forEach(item => {
        show.innerHTML += generadeShowCommentHTML(item);
    });   
}


function generadeCommentsHTML(number) {
    const comments = posts[number];

    return `
        <p onclick="closeComments()">x</p>
        <div class="post__comments-pic">
            <img src="${comments.picture}" alt="">   
        </div>
        <div class="post__comments-user">
            <div class="post__user-name post__comments-user-name">
                <div class="user-name__logo">${comments.logo}</div>
                <p class="post__title post__title-width">${comments.name}</p>
                <p class="post__title">...</p>
            </div>
            <div class="post__comments-text">
                <span>Kommentare:</span>
                <div id="comments"></div>
            </div>
        </div>
    `;
}

function renderComments(number) {
    const show = document.querySelector('.post__comments');

    const main = document.querySelector('main');
    main.classList.toString('bgc-gray');

    show.classList.toggle('d-none');
    show.innerHTML = generadeCommentsHTML(number);

    showComment(number);
}

function closeComments() {
    const show = document.querySelector('.post__comments');
    show.classList.toggle('d-none');
}








