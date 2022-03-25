import React from 'react';
import './clients.css';
class ClientListComponent extends React.Component {
    state = {
        clients: []
    };

    componentDidMount() {
        const apiUrl = 'https://localhost:7161/api/clients';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({clients: data}));
    }

    render() {
        return <ul>
            <h2 className='list-head'>Clients List</h2>

            {/*<table className="table container table-striped">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">#</th>*/}
            {/*        <th scope="col">First</th>*/}
            {/*        <th scope="col">Last</th>*/}
            {/*        <th scope="col">Is overweight</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        this.state.clients.map(client => (*/}
            {/*            <tr onClick={goDetail(client.id)}>*/}
            {/*                <th scope="row"> {client.id}</th>*/}
            {/*                <td> {client.name}</td>*/}
            {/*                <td> {client.lastName}</td>*/}
            {/*                <td>{client.isOverWeight ? 'Si' : 'No'}</td>*/}
            {/*            </tr>))*/}

            {/*    }*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                // style="width: 45px; height: 45px"
                                className="rounded-circle profile"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Software engineer</p>
                        <p className="text-muted mb-0">IT department</p>
                    </td>
                    <td>
                        <span className="badge badge-success rounded-pill d-inline">Active</span>
                    </td>
                    <td>Senior</td>
                    <td>
                        <button type="button" className="btn btn-link btn-sm btn-rounded">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                className="rounded-circle profile"
                                alt=""
                                // style="width: 45px; height: 45px"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Alex Ray</p>
                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Consultant</p>
                        <p className="text-muted mb-0">Finance</p>
                    </td>
                    <td>
        <span className="badge badge-primary rounded-pill d-inline"
        >Onboarding</span
        >
                    </td>
                    <td>Junior</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-link btn-rounded btn-sm fw-bold"
                            data-mdb-ripple-color="dark"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                className="rounded-circle profile"
                                alt=""
                                // style="width: 45px; height: 45px"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Kate Hunington</p>
                                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">Designer</p>
                        <p className="text-muted mb-0">UI/UX</p>
                    </td>
                    <td>
                        <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                    </td>
                    <td>Senior</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-link btn-rounded btn-sm fw-bold"
                            data-mdb-ripple-color="dark"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

        </ul>;
    }
}

export default ClientListComponent;
function goDetail(id) {
alert(id);
}
