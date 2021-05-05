import React from 'react';
import { Link  } from 'react-router-dom';
import taxes from '@/api/taxes';

class Taxes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            error: null
        };
    }    

    getTaxes() {
        let result, error;
        //[result, error] = taxes.getTaxes();
        taxes.getTaxes()
            .then(response => {
                [result, error] = response;                        
                if(error){                
                    this.setState({
                        error: error.data.message
                    });
                }                
            });
        
        // axios.get('/taxes').then((
        //     response // console.log(response.data.tasks)
        // ) =>
        //     this.setState({
        //         tasks: [...response.data.tasks]
        //     })
        // );
    }

    componentDidMount() {
        this.getTaxes();
    }

    render() {
        return (
            <>  
                <div>{ this.state.error }</div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Products</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Taxes;
