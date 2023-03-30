import { useState } from 'react';
import './styles.css';

const Lineup = () => {
    const [lineup, setLineup] = useState([]);
    
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
       // TODO: use setLineup to append input values (use spread operator ...) 
       // TODO: handle edgecase dont allow blank sumbission
        // TODO: clear out input after submit
    //    console.log(lineup)
       console.log(formData.getAll("name"))
    //    console.log(lineup.concat(formData.getAll("name")))
    //    console.log([...lineup, ...formData.getAll("name")])
        setLineup([...lineup, ...formData.getAll("name")])
    }
    return (
    <div>
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" id="fname" name="name"></input>
            <button>Submit</button>
        </form>
        <ul>
        {lineup.map(comic => <li>{comic}</li>)}
        </ul>
    </div>
    );
};

export default Lineup;