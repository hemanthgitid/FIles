function Input({handlechange,value,title,name,color}){
return(
   <p><span style={{backgroundColor:color}}><input onChange={handlechange} type="radio" value={value} name={name}/>
   <span>{title}</span>
   </span></p>
);
}
export default Input;