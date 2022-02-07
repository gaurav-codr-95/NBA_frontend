import React, { Component } from 'react';

export class DisplayStudent extends Component {

    render() {
        return <div className='container'>
            <h4>Student Details</h4>
            <table class="table table-hover table-dark">
                <thead>
                    <tr className='d-flex'>
                        <th scope="col" className='col-2'>Roll Number</th>
                        <th scope="col" className='col-2'>Name</th>
                        <th scope="col" className='col-2'>Branch</th>
                        <th scope="col" className='col-2'>Batch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='d-flex'>
                        <th scope="row" className='col-2'>0905CS191100</th>
                        <td className='col-2'>Kirti Mulchandani</td>
                        <td className='col-2'>CSE</td>
                        <td className='col-2'>B2</td>
                    </tr>
                    <tr className='d-flex'>
                        <th scope="row" className='col-2'>0905CS191100</th>
                        <td className='col-2'>Kirti Mulchandani</td>
                        <td className='col-2'>CSE</td>
                        <td className='col-2'>B2</td>
                    </tr>
                    <tr className='d-flex'>
                        <th scope="row" className='col-2'>0905CS191100</th>
                        <td className='col-2'>Kirti Mulchandani</td>
                        <td className='col-2'>CSE</td>
                        <td className='col-2'>B2</td>
                    </tr>
                    <tr className='d-flex'>
                        <th scope="row" className='col-2'>0905CS191100</th>
                        <td className='col-2'>Kirti Mulchandani</td>
                        <td className='col-2'>CSE</td>
                        <td className='col-2'>B2</td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default DisplayStudent;
