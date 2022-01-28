import React, { Component } from 'react';

class Main extends Component {
  render() {
    return <div className='container-fluid'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/1000x500/?college" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1000x500/?university" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1000x500/?college,university" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>;
  }
}

export default Main;
