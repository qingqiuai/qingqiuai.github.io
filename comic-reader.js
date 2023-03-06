// 解析URL参数
var urlParams = new URLSearchParams(window.location.search);
var comicUrl = urlParams.get('comic_url');

// 如果URL中没有传递漫画文件的URL参数，则提示用户
if (!comicUrl) {
    alert('请传入漫画文件的URL参数');
}

// 加载漫画文件
loadComic(comicUrl);

// 加载漫画文件
function loadComic(url) {
    // 通过JavaScript创建一个<iframe>标签，并将漫画文件的URL作为src属性值
    var iframe = document.createElement('iframe');
    iframe.src = url;
    // 将<iframe>标签添加到DOM树中，使其可以显示漫画
    document.body.appendChild(iframe);
}

// 处理错误
window.onerror = function(message, source, lineno, colno, error) {
    alert('加载漫画文件时出错：' + message);
};
