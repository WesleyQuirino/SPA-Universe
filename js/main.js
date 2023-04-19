import Router from "./router.js"

const routes = new Router()
routes.add("/","./pages/home.html")
routes.add("/universe","./pages/universe.html")
routes.add("/explore","./pages/explore.html")
routes.add(404,"./pages/404.html")


routes.handle()

window.onpopstate = () => routes.handle()

window.route = () => routes.route()