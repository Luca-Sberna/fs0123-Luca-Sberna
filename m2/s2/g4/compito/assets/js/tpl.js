const linkTpl = (t, c = '', h= '#') => `<a class="${c}" href="${h}">${t}</a>`
const postTpl = (title, icon, author, content, date, timeRead, tag, img) =>`<article>
                        <div class="post-content">
                            <a class="post-author" href="#" >
                                <img src="assets/imgs/${icon}"  width="20" height="20" loading="lazy" />
                                <h4><strong>${author}</strong></h4>                
                            </a>
                            <a href="#">
                                <h2>${title}</h2>
                                <h3>${content}</h3>
                            </a>
                            <div class="post-date">
                                <div>
                                    <span>${date}</span>
                                    <span>·</span>
                                    <span">${timeRead}</span>
                                    <span>·</spans>
                                    <a href="#">${tag}</a>
                                    <button><img src="assets/imgs/svg/star.svg" width="16" height="16"></button>
                                </div>
                                <button ><img src="assets/imgs/svg/bookmark.svg"></button>
                            </div>
                        </div>
                        <a class="post-thumb" href="#">
                            <img src="assets/imgs/${img}">
                        </a>
                    </article>`

const trendingTpl = (position, author, icon, title, date, timeRead, category = '') => `<div class="trending">
                                <div class="trending-container">
                                    <div class="trending-post">
                                    <div class="trending-position">0${position}</div>
                                    <div class="trending-content">
                                            <a class="trending-author" href="#" >
                                                <img alt="${author}" src="assets/imgs/${icon}" width="20" height="20" />
                                                <h4 class=""><strong>${author}</strong>${ category ?  ' in <strong>' + category + '</strong>'   : '' }</h4>
                                            </a>
                                            <a href="#">
                                                <h2>${title}</h2>
                                            </a>
                                            <div class="trending-date">
                                                <span>${date}</span>
                                                <span>·</span>
                                                <span>${timeRead} read</span>
                                                <button><img src="assets/imgs/svg/star.svg" width="16" height="16"></button>                   
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </div>`