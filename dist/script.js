let api_url = "https://type.fit/api/quotes"
let btn = document.querySelector('.btn')
let quote = document.querySelector('.text')
let author = document.querySelector('.author_name')
let quotes 

async function getData(){
    let response = await fetch(api_url)
    quotes = await response.json();
    quote_gen()
}

function author_name(a_quote){
    if(a_quote.author== null){
        return 'Anonymous'
    }else{
        return a_quote.author
    }
}

function quote_gen(){
    let a_quote = quotes[Math.floor(Math.random()*1643)]
    quote.textContent = a_quote.text
    author.textContent =  '- '+author_name(a_quote)
}

btn.addEventListener('click', quote_gen)


