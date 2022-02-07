import React, { Component } from 'react';

export class DisplayMidTerm2Marks extends Component {
  render() {
    return <div>
                   <div className='container'>
                <h4>Mit Term-2 Marks</h4>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>CO A</th>
                            <th scope="col" className='col-2'>CO B</th>
                            <th scope="col" className='col-2'>CO C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>3</td>
                            <td className='col-2'>4</td>
                            <td className='col-2'>5</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>3</td>
                            <td className='col-2'>4</td>
                            <td className='col-2'>5</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>3</td>
                            <td className='col-2'>4</td>
                            <td className='col-2'>5</td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope="row" className='col-2'>CS601</th>
                            <td className='col-2'>3</td>
                            <td className='col-2'>4</td>
                            <td className='col-2'>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>;
  }
}

export default DisplayMidTerm2Marks;
