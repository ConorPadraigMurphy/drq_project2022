import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export function UpdateJob() {
    let { id } = useParams();
    const [vechModel, setvechModel] = useState('');
    const [problem, setproblem] = useState('');
    const [owner, setowner] = useState('');
    const [contactNum, setcontactNum] = useState('');
    const [reg, setreg] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/Jobs/' + id)
            .then((response) => {
                setvechModel(response.data.vechModel);
                setproblem(response.data.problem);
                setowner(response.data.owner);
                setcontactNum(response.data.contactNum);
                setreg(response.data.reg);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateJob = {
            vechModel: vechModel,
            problem: problem,
            owner: owner,
            contactNum: contactNum,
            reg: reg
        }
        //Gets the details corresponding to the id of the job
        axios.put('http://localhost:4000/api/Jobs/' + id, updateJob)
            .then((res) => {
                console.log(res.data)
                Navigate('/CurrentJobs')
            })
            .catch();
    }
    //returns the items that have been updated by the  user
    return (
        <div>
            <h3>Update Job Client Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Update Car Model: </label>
                    <input type="text"
                        className="form-control"
                        value={vechModel}
                        onChange={(e) => { setvechModel(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Update TO-DO: </label>
                    <input type="text"
                        className="form-control"
                        value={problem}
                        onChange={(e) => { setproblem(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Update Owner: </label>
                    <input type="text"
                        className="form-control"
                        value={owner}
                        onChange={(e) => { setowner(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Update Contact Number: </label>
                    <input type="text"
                        className="form-control"
                        value={contactNum}
                        onChange={(e) => { setcontactNum(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Update Registration Number: </label>
                    <input type="text"
                        className="form-control"
                        value={reg}
                        onChange={(e) => { setreg(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Update Details"></input>
            </form>
        </div>
    );
}
