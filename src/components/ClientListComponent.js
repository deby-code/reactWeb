import React from 'react';

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

            <table className="table container table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Is overweight</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.clients.map(client => (
                        <tr>
                            <th scope="row"> {client.id}</th>
                            <td> {client.name}</td>
                            <td> {client.lastName}</td>
                            <td>{client.isOverWeight ? 'Si' : 'No'}</td>
                        </tr>))

                }
                </tbody>
            </table>

        </ul>;
    }
}

export default ClientListComponent;
