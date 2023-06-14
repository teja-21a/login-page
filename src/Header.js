import './Header.css'
export function Header (){
return(
    <>
    <h1>Sign-in user</h1>
    <h2>Please fill the below details</h2>
    </>
);
}
export function Name() {
   return(
     <>
        <div class="name">

        <div class="first-name">
        <label for="html"><h3>First Name</h3></label>
        <input type="text" id="fname" placeholder="Enter first name" />
        </div>

        <div class="last-name">
        <label for="html"><h3>Last Name</h3></label>
        <input type="text" id="fname" placeholder="Enter last name" />
        </div>  

        </div>
    </>
    );
}

export function UserContacts(){
    return(
        <div class="contact">

        <div class=  "mail">
            <label for="html"><h3>Email</h3></label>
            <input type="email" id="fname" placeholder="abc@gmail.com" />
        </div>
        
        <div class="phone">
        <label for="html"><h3>Phone Number</h3></label>
        <input type="tel" id="fname" placeholder="+91" />
        </div>

        </div>
    );
}

export default function Submit(){
    return(
        <div class="submission">
        <div class=  "cancel">
        <input type="cancel" id="cancel" value = "Cancel" />
        </div>
        
        <div class="submit">
        <input type="submit" id="submit" value = "Submit" />
        </div>

        </div>
    );
}
