1. Using ajax get get a text file from your server (local webserver) and put the contents into the html document's body.
2. Using javascript create an unordered list and put that unordered list into the document.
    - Create 3 text files and get the content of each one via ajax.  Put that content as list item into the unordered list.


    const request = new XMLHttpRequest();
    request.onreadystatechange = (evt) => {
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) console.log(req.response)
    };
    request.open("GET",'./samples/test.txt')
    request.send()

    document.createElement 
    const callback = (res) => document.body.append(res)    
    ajax("./textfile.txt", callback)
    let value = (res, input) => document.body.append(res);       ajax("text.txt", value);       
    //   let b = document.querySelector("body");       //   b.append(value);       //