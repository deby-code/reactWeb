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
            <h2 className='list-head'>Available Public Repositories</h2>
            {
                this.state.clients.map(client =>(
                        <div>
                            {client.id}
                        </div>
                    )
                )

            }



        </ul>;
    }
}
export default ClientListComponent;
