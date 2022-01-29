

export default function(head,body){
    return `
        <html>
            <head>
                <link rel = 'icon' type = 'image/png' href = './Resources/Favicon.png'>
                <link rel = 'stylesheet' type = 'text/css' href = './Styles/Style.css'>
                ${ head }
            </head>
            <body>${ body }</body>
        </html>
    `;
}
