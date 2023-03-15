import React, {useState} from 'react'

export default function Convert() {

    const[myText,setMyText] = useState('');
 // onchange event
 const Onchange=(event)=>{
    setMyText(event.target.value)
 }
// lower case
const LowerCase=()=>{
    let newText=myText.toLowerCase();
    setMyText(newText);
}
// Upper case
const UpperCase=()=>{
    let newText=myText.toUpperCase();
    setMyText(newText);
}
// Capatilize case
const Capitalize=()=>{
    let newText=myText.replace(/(?:^|\s)\S/g, function (a){return a.toUpperCase();});
    setMyText(newText);
}

//reverse
const ReverseCase=()=>{
    let newText=myText.split('').reverse().join('');
    setMyText(newText);
}

//clear
const Clear = ()=>{
    setMyText('');
}



  return (
    <div className='container'>
        <h1 className= 'text-center heading mt-5'>ConvertCase</h1>
      <div className= 'line'></div>
      <h2 className="heading mt-5">Enter your text here to see changes</h2>
      <form>
       <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" 
        onChange={Onchange} value={myText} rows="8">
        </textarea>
        </div>

        <div className='d-flex justify-content-center mt-5'>
        <button type="button" class="btn btn-dark me-3" onClick={LowerCase}>Lower Case</button>
        <button type="button" class="btn btn-dark me-3" onClick={UpperCase}>UPPER CASE</button>
        <button type="button" class="btn btn-dark me-3" onClick={Capitalize}>Capitalize</button>
        <button type="button" class="btn btn-dark me-3" onClick={ReverseCase}>Reverse</button>
        <button type="button" class="btn btn-dark me-3" onClick={Clear}>Clear</button>
        </div>
        
         </form>
         <div className='mt-5'>
          <h1 className='text-center'> Calculate Length of words and character</h1>
          <h1 className='text-center head'>{myText.split(" ").length} Word and {myText.length} character</h1>
         </div>
    </div>
  )
}
