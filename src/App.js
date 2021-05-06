import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';
const App = () => {
    const [set, setext] = useState('');
    const [item, setitem] = useState([]);

    const textchange = (e) => {
        setext(e.target.value);
    }

    const submit = () => {
        if (set == '') {
            alert("Write...");
        }
        else {
            setitem([...item, set]);

            localStorage.setItem();
            setext('');
        }


    }

    // delete item
    const Delete = (id) => {
        const newList = item.filter((element, ind) => ind != id);

        setitem(newList);

    }
    return (
        <>
            <div id="container">
                <div id="heading">
                    <h2> Todo App</h2>
                </div>
                <div id="inputBox">
                    <input type="text" name="text" id="text" value={set} onChange={textchange} placeholder="Write..." />

                    <Button color="black" variant="contained" onClick={submit}><AddIcon></AddIcon></Button>
                </div>
            </div>
            {/* <Table /> */}
            <div id="table">
                <h1>Your Items</h1>
                <div id="content">
                    <table className="table  table-striped">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Todo Items</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                item.map((element, index) => {

                                    return (

                                        < tr >
                                            <td>{index + 1}</td>
                                            <td>{element}</td>
                                            <td><Button onClick={() => Delete(index)}><DeleteIcon></DeleteIcon></Button></td>
                                        </tr >
                                    )
                                })

                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default App;