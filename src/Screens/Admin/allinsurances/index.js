import React, { useEffect, useState } from 'react'
import { Card, Button, Grid } from "semantic-ui-react";
import Insurance from '../../../ethereum/insurance'
// import web3 from '../../ethereum/web3';
import Insurancefactory from '../../../ethereum/admin';
// import Web3 from 'web3';
import Cookies from 'js-cookie';
import { Redirect } from "react-router-dom";

export default function Index() {
    const [items, setItems] = useState([]);
    const [queueItems, setQueueItems] = useState([]);

    const getQueue = async (id) => {
        setid(id);
        const tmpInsurance = Insurance((await Insurancefactory.methods.getDeployedInsurances().call())[id]);
        const memb = await tmpInsurance.methods.getMembersList().call();
        console.log(await tmpInsurance.methods.getMembersList().call())
        let items = [];
        var k = 0;
        if (memb == undefined) {
            var x = 0;
            alert("No queue avaible for this admin!");
        }
        else {
            console.log(">" + memb.length);
            for (let i = 0; i < memb.length; i++, k++) {

                items.push({
                    header: `${memb[i]}`,
                    meta: "",
                    description: (
                        <Card.Content extra>
                            <div className='buttons'>
                                <Button basic color='black' href="/admin/allinsurances/details" onClick={()=>setdata(memb[i])} style={{ margin: 3 }}>
                                    Show Details
                                </Button>
                            </div>
                        </Card.Content>
                    ),
                    fluid: true,
                });

            }
            setQueueItems(items);
        }


    }

    const setid = async(id) => {
        Cookies.set('id',id);
    }

    const setdata = async(data) => {
        Cookies.set('data',data);

    }
    // useEffect(() => {
    //     init();
    // }, []);

    return (
        <div style={{paddingTop: 80}}>
            <div className="card mb-3 container" style={{ padding: 5, margin: 10 }}>
                <div className="row g-0">
                    <div className="col-md-6" style={{ padding: 10, }} >
                        <div className="h3">Names of Insurances</div>
                        <div style={{ marginTop: 2 }}>

                            <div class="card w-75">
                                <div class="card-body">
                                    <h5 class="card-title">Health Insurance</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Button onClick={()=>getQueue(0)} class="buttons">Show Applicants</Button>
                                </div>
                            </div>

                            <div class="card w-75">
                                <div class="card-body">
                                    <h5 class="card-title">Life Insurance</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Button onClick={()=>getQueue(1)} class="buttons">Show Applicants</Button>
                                </div>
                            </div>

                            <div class="card w-75">
                                <div class="card-body">
                                    <h5 class="card-title">Car Insurance</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Button onClick={()=>getQueue(2)} class="buttons">Show Applicants</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6" style={{ padding: 10 }}>
                        <div className="h3">Applicants</div>
                        <div style={{ marginTop: 2 }} >
                            <Card.Group items={queueItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
