

const defaultStyle = ` --default-color: #333;
--default-color2:#555;
--white:#fff;
--white2:#f9f9f9;
--white3:#f2f2f2;
--lightgray:lightgray;
--linkColor:dodgerblue;
--rythm:rgba(0, 100, 0, 0.356);
--rythm2:rgba(0, 100, 0, 0.493);
--rythm3:rgba(139, 0, 0, 0.541);
--headerColor:#ddd;
`


const darkTheme = ` --default-color: white;
--default-color2:#f9f9f9;
--white:#333;
--white2:#444;
--white3:#344;
--lightgray:lightgray;
--linkColor:dodgerblue;
--rythm2:lightgreen;
--headerColor:#222;
`


const changeTheme = (e)=>{

    if(e.target.checked===true)document.documentElement.style = darkTheme 
    else document.documentElement.style = defaultStyle
  


}




function DarkMode(Profs) {
    const{scale,className}=Profs
  
  return (
 <div className={`changeTheme ${className}`} style={{transform:`scale(${scale})`}}>
   <span>DarkMode:</span>
  <label className="switch">
    <input type="checkbox" className="toggle" onChange={changeTheme}/>
    <span className="slider"></span>
  </label>
  </div>
  )
}

export default DarkMode
