import React, { Component } from 'react';

export class DisplayMidTerm2Co extends Component {

    render() {
        return <div>
            <div className='container'>
                <h4>Mit Term-2 CO Scheme</h4>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>Roll Number</th>
                            <th scope="col" className='col-2'>Total Marks</th>
                            <th scope="col" className='col-2'>CO C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>0905CS191100</td>
                            <td className='col-2'>19</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>0905CS191100</td>
                            <td className='col-2'>19</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>0905CS191100</td>
                            <td className='col-2'>19</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>0905CS191100</td>
                            <td className='col-2'>19</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>;
    }
}

export default DisplayMidTerm2Co;
