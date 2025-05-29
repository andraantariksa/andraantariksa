<header class="container">
    <ul class="item">
        <li><a href="/">About Me</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    <h2 class="item center"><a href="/">Andra Antariksa</a></h2>
    <ul class="item right">
        <li><a href="https://github.com/andraantariksa" class="icon--github" aria-label="GitHub"></a></li>
        <li><a href="https://linkedin.com/in/andraantariksa" class="icon--linkedin" aria-label="GitHub"></a></li>
    </ul>
</header>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        border-bottom: 0.8px solid black;
        padding: 0 32px;
    }

    .item {
        flex: 1;
    }

    .center {
        text-align: center;
    }

    .right {
        justify-content: flex-end;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 18px;

        li {
            margin: 0;
            padding: 0;
            line-height: 12px;
            font-size: 12px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    .icon--github {
        width: 32px;
        height: 32px;
        background-image: url('/image/github.png');
        background-size: cover;
        display: inline-block;
    }

    .icon--linkedin {
        width: 32px;
        height: 32px;
        background-image: url('/image/linkedin.png');
        background-size: cover;
        display: inline-block;
    }
</style>
