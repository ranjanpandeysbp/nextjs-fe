import Author from "../components/Author";

const fetchQuotes = async ()=>{
    let quotes = await fetch('https://dummyjson.com/quotes');
    quotes = await quotes.json();
    return quotes.quotes;
}
const ClientInServer = async () => {
    let quotes = await fetchQuotes();
    console.log(quotes);
  return (
    <div className='container'>
        <h2 className='text-center mt-2'>Popular Quotes</h2>
        {
            quotes.map((p)=>{
                return <div key={p.id}>
                    <p>Quote: {p.quote}</p>
                    <Author authorName={p.author}/>
                    <hr />
                </div>
            })
        }
    </div>
  )
}

export default ClientInServer