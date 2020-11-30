module.import = serveFavicon

const http = require("http")
const { builtinModules } = require("module")
const serveFavicon = require("./serveFavicon")
const setContent = require("./setContent")
const port = 4433

const server = http.createServer(req,res)=>{
    const url = new URL(req.headers.host+req.url)
   
    //handling favicon
    if(url.pathname == `${port}/favicon.ico`){
        return serveFavicon(req, res, (req,res)=>{
            console.log('Im gonna send this favicon')
            res.end()
        })
    }

    let page = url.searchParams.get("page")
    let content = setContent(page)
    res.write(content)
    res.end()
}

server.listen(port,()=>{
    console.log(`Running on Port ${port}`)
})


