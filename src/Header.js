import './Header.css'
export function Header (){
return(
    <>
    <h1>Sign-in user</h1>
    <h2>Please fill the below details</h2>
    </>
);
}
export default function Input(props) {
   return(
     <>
        <div class="nameField">
        <label for="html"><h3>{props.name}</h3></label>
        <input type={props.type} id="fname" placeholder={props.namePlaceholder} value={props.value} />
        </div>
    </>
    );
}