
export default function App(){

  const message =<h1>Atribuição da Tag html a uma variável</h1>
  function sum(a,b){
    return a+b;
  }

  return(
    <div className="App">
      <header className="App-header">
        {message}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          O resultado da soma é:{sum(5,5)}
        </p>
      </header>
     
    </div>
  )


}