export class Router {
    routes = { }

    add(link, page){
        this.routes[link] = page
    }
    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)

        this.handle()

    }
     handle () {
        const { pathname } = window.location
        const route = this.routes[pathname] || "/pages/home.html"

        console.log(route)
    
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html
        })  

        if(pathname == "/"){
            let body = document.querySelector("body")
            body.style.background = "url(./images/mountains-universe-1.png)"
            body.style.backgroundSize = "cover"
            body.style.backgroundPositionY = "-9rem"
        } else if (pathname == "/universe"){
            let body = document.querySelector("body")
            body.style.background = "url(./images/mountains-universe02.png)"
            body.style.backgroundSize = "cover"
            body.style.backgroundPositionY = "-9rem"
        } else if (pathname == "/exploration"){
            let body = document.querySelector("body")
            body.style.background = "url(./images/mountains-universe-3.png)"
            body.style.backgroundSize = "cover"
            body.style.backgroundPositionY = "-9rem"
        }
     }
}
